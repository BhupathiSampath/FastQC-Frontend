import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
	project_name: "",
	patient_id: "",
	sequence: "",
	sample_type: "",
	basic_statistics:"",
	per_base_sequence_quality:"",
	per_tile_sequence_quality:"",
	per_sequence_quality_scores:"",
	Per_base_sequence_content:"",
	per_sequence_gc_content:"",
	per_base_n_content:"",
	sequence_length_distribution:"",
	sequence_duplication_levels:"",
	overrepresented_sequences:"",
	adapter_content:"",
	sample_name:"",
	flowcell:"",
	lane:"",
	row:"",
	total_sequences:"",
	sequence_length:"",
	GC:"",
	// path : "http://10.10.6.87/fastqc/api/multiqc_report/ICGC/316/DNA/Tumor",
	path: '',
	datatable: {},
	datatable_loaded: false,
	patientdatatable: {},
	patientdatatable_loaded: false,
	page: 1,
	search: '',


	patientdatatable1: {},
	patientdatatable_loaded1: false,
});

export const getters = {
	getField,
};

export const mutations = {
	SET_DataTable(state, payload) {
		state.datatable = payload;
		state.datatable_loaded = true;
	},
	SET_PatientDataTable(state, payload) {
		state.patientdatatable = payload;
		state.patientdatatable_loaded = true;
	},
	SET_MultiQC(state, payload) {
		state.path = payload
	},
	SET_Payload(state, payload) {
		state.project_name = payload.project_name
		state.patient_id = payload.patient_id
		state.sequence = payload.sequence
		state.sample_type = payload.sample_type
	},

	SET_PatientDataTable1(state, payload) {
		state.patientdatatable1 = payload;
		state.patientdatatable_loaded1 = true;
	},
	updateField,
};

export const actions = {
	async DataTable({ state, commit, dispatch }) {
		if (state.page > 1) {
			const prev = state.page - 1
		}
		const response = await this.$axios.$get(
			`http://10.10.6.87/fastqc/api/fastqcdata/?page= ${state.page}&search=${state.search}`
		);
		await commit("SET_DataTable", response);
	},
	async PatientDataTable({ state, commit }, payload) {
		const response = await this.$axios.$get(
			`http://10.10.6.87/fastqc/api/patientdata/?search=${payload.search}&project_name=${payload.project_name}&patient_id=${payload.patient_id}&sequence= ${payload.sequence}&sample_type=${payload.sample_type}
			&basic_statistics=${payload.basic_statistics}&per_base_sequence_quality=${payload.per_base_sequence_quality}
			&per_tile_sequence_quality=${payload.per_tile_sequence_quality}&per_sequence_quality_scores=${payload.per_sequence_quality_scores}
			&Per_base_sequence_content=${payload.Per_base_sequence_content}&per_sequence_gc_content=${payload.per_sequence_gc_content}
			&per_base_n_content=${payload.per_base_n_content}&sequence_length_distribution=${payload.sequence_length_distribution}
			&sequence_duplication_levels=${payload.sequence_duplication_levels}&overrepresented_sequences=${payload.overrepresented_sequences}
			&adapter_content=${payload.adapter_content}&sample_name=${payload.sample_name}
			&flowcell=${payload.flowcell}&lane=${payload.lane}
			&row=${payload.row}&total_sequences=${payload.total_sequences}
			&sequence_length=${payload.sequence_length}&GC=${payload.GC}`
		);
		const path = "http://10.10.6.87/fastqc/api/multiqc_report/" + payload.project_name + "/"+ payload.patient_id +"/"+ payload.sequence +"/" + payload.sample_type
		
		console.log(response)
		await commit("SET_Payload", payload)
		await commit("SET_MultiQC", path)
		await commit("SET_PatientDataTable", response);
	},

	async PatientDataTable1({ state, commit }, payload) {
		const response = await this.$axios.$get(
			`http://10.10.6.87/fastqc/api/patientdata/?project_name=${payload.project_name}&patient_id=${payload.patient_id}&sequence= ${payload.sequence}&sample_type=${payload.sample_type}&total_sequences=${payload.total_sequences}`
		);
		console.log(response)
		await commit("SET_PatientDataTable1", response);
	},

	async MultiQC({ state, commit }, payload) {
		const response = await this.$axios.$get(
			`http://10.10.6.87/fastqc/api/multiqc_report/ICGC/316/DNA/Tumor`
		);
		await commit("SET_MultiQC", response);
	},
};




