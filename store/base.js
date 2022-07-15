import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
	path: "",
	page: 1,
	search: "",
	table_columns : [],

	userlist: {},
	userlist_loaded: false,

	datatable: {},
	datatable_loaded: false,

	patientdatatable: {},
	patientdatatable_loaded: false,
});

export const getters = {
	getField,
};

export const mutations = {
	SET_UsersList(state, payload) {
		state.userlist = payload;
		state.userlist_loaded = true;
	},
	SET_DataTable(state, payload) {
		state.table_columns = Object.keys(payload.results[0])
		state.datatable = payload;
		state.datatable_loaded = true;
	},
	SET_PatientDataTable(state, payload) {
		state.patientdatatable = payload;
		state.patientdatatable_loaded = true;
	},
	SET_MultiQC(state, payload) {
		state.path = payload;
	},
	SET_Payload(state, payload) {
		state.project_name = payload.project_name;
		state.patient_id = payload.patient_id;
		state.sequence = payload.sequence;
		state.sample_type = payload.sample_type;
	},
	updateField,
};

export const actions = {
	async UsersList({ state, commit, dispatch }) {
		const response = await this.$axios.$get(
			'http://10.10.6.87/fastqc/api/v1/list_users'
		);
		console.log(response)
		await commit("SET_UsersList", response);
	},
	async DataTable({ state, commit, dispatch }) {
		if (state.page > 1) {
			const prev = state.page - 1;
		}
		const response = await this.$axios.$get(
			`http://10.10.6.87/fastqc/api/fastqc_data1/?page= ${state.page}&search=${state.search}`
		);
		console.log(Object.keys(response.results[0]))
		await commit("SET_DataTable", response);
	},
	async PatientDataTable({ state, commit }, payload) {
		const response = await this.$axios.$get(
			"http://10.10.6.87/fastqc/api/patientdata/",
			{
				params: {
					search: payload.search,
					project_name: payload.project_name,
					sample_type: payload.sample_type,
					sequence: payload.sequence,
					patient_id: payload.patient_id,
					basic_statistics: payload.basic_statistics,
					per_base_sequence_quality:
						payload.per_base_sequence_quality,
					per_tile_sequence_quality:
						payload.per_tile_sequence_quality,
					per_sequence_quality_scores:
						payload.per_sequence_quality_scores,
					Per_base_sequence_content:
						payload.Per_base_sequence_content,
					per_sequence_gc_content: payload.per_sequence_gc_content,
					per_base_n_content: payload.per_base_n_content,
					sequence_length_distribution:
						payload.sequence_length_distribution,
					sequence_duplication_levels:
						payload.sequence_duplication_levels,
					overrepresented_sequences:
						payload.overrepresented_sequences,
					adapter_content: payload.adapter_content,
					sample_name: payload.sample_name,
					flowcell: payload.flowcell,
					lane: payload.lane,
					row: payload.row,
					total_sequences: payload.total_sequences,
					sequence_length: payload.sequence_length,
					GC: payload.GC,
				},
			}
		);
		const path =
			"http://10.10.6.87/fastqc/api/multiqc_report/" +
			payload.project_name +
			"/" +
			payload.patient_id +
			"/" +
			payload.sequence +
			"/" +
			payload.sample_type;
		await commit("SET_Payload", payload);
		await commit("SET_MultiQC", path);
		await commit("SET_PatientDataTable", response);
	},
};
