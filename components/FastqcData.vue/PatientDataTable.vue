<template>
    <div>
        <div>
            <div class="flex justify-center">
                <p class="text-gray-600">
                    <button
                        @click="openMenu"
                        class="px-4 py-2 font-semibold text-sm bg-red-500 text-white rounded-full shadow-sm hover:underline"
                    >
                        Go back
                    </button>
                    <a
                        :href="this.path"
                        target="_blank"
                        class="px-4 py-2.5 font-semibold text-sm bg-blue-500 text-white rounded-full shadow-sm hover:underline pr-2"
                        >MultiQC Report</a
                    >
                </p>
            </div>
            <div class="flex justify-center py-2 w-full">
                <span
                    class="w-screen md:w-1/4 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex"
                >
                    <input
                        v-model="params.search"
                        v-on:keyup.enter="TableFilter"
                        placeholder="Search"
                        class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
                    />
                    <i
                        @click="TableFilter"
                        class="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"
                    >
                    </i>
                </span>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="overflow-x-auto shadow-md sm:rounded-lg pb-6">
                <div class="inline-block w-full align-middle">
                        <table
                            class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 rounded-l-full py-2"
                        >
                        <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr class="bg-primary text-center px-2">
                                <th
                                    scope="col"
                                    class="py-4 text-sm font-semibold text-gray-900 transform -rotate-90"
                                >
                                </th>
                                <th
                                    scope="col"
                                    class="py-4 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="SN"
                                            v-model="params.sample_name"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow font-semibold px-4 rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Sample name
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <input
                                        placeholder="Flowcell"
                                        v-model="params.flowcell"
                                        v-on:keyup.enter="TableFilter"
                                        class="flex-grow font-semibold px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                    />
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <input
                                        placeholder="Lane"
                                        v-model="params.lane"
                                        v-on:keyup.enter="TableFilter"
                                        class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                    />
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <input
                                        placeholder="Row"
                                        v-model="params.row"
                                        v-on:keyup.enter="TableFilter"
                                        class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                    />
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="TS"
                                            v-model="params.total_sequences"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Total sequences
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="SL"
                                            v-model="params.sequence_length"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Sequence length
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <input
                                        placeholder="GC%"
                                        v-model="params.GC"
                                        v-on:keyup.enter="TableFilter"
                                        class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                    />
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="BS"
                                            v-model="params.basic_statistics"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-2 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Basic statistics
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="PBSQ"
                                            v-model="params.per_base_sequence_quality"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Per_base sequenc quality
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="PTSQ"
                                            v-model="params.per_tile_sequence_quality"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Per tile sequence quality
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="PSQS"
                                            v-model="
                                                params.per_sequence_quality_scores
                                            "
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Per_sequence quality scores
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="PBSC"
                                            v-model="params.Per_base_sequence_content"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Per_base sequence content
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="PSGC"
                                            v-model="params.per_sequence_gc_content"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Per_sequence gc content
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="PBNC"
                                            v-model="params.per_base_n_content"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Per_base n content
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="SLD"
                                            v-model="
                                                params.sequence_length_distribution
                                            "
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Sequence length distribution
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="SDL"
                                            v-model="
                                                params.sequence_duplication_levels
                                            "
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Sequence duplication levels
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="OS"
                                            v-model="params.overrepresented_sequences"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Overrepresented sequences
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 text-sm font-semibold text-gray-900"
                                >
                                    <i
                                        class="relative hover-trigger"
                                    >
                                        <input
                                            placeholder="AC"
                                            v-model="params.adapter_content"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 font-semibold rounded-l-full w-20 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                        <div
                                            class="absolute font-thin bg-white rounded-l-full rounded-r-full border border-grey-100 px-4 hover-target text-sm"
                                        >
                                            Adapter content
                                        </div>
                                    </i>
                                </th>
                                <th
                                    scope="col"
                                    class="py-3.5 px-2 text-sm font-semibold text-gray-900"
                                >
                                    FastQC
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 text-center" v-for="event in patientdatatable.results"
                                :key="event.id">
                                <td class="whitespace-nowrap p-1 text-sm">
                                    <span class="flex justify-center">
                                        <div v-html="IconSelect(event.basic_statistics)"></div>
                                        <div v-html="IconSelect(event.per_base_sequence_quality)"></div>
                                        <div v-html="IconSelect(event.per_tile_sequence_quality)"></div>
                                        <div v-html="IconSelect(event.per_sequence_quality_scores)"></div>
                                        <div v-html="IconSelect(event.Per_base_sequence_content)"></div>
                                        <div v-html="IconSelect(event.per_sequence_gc_content)"></div>
                                        <div v-html="IconSelect(event.per_base_n_content)"></div>
                                        <div v-html="IconSelect(event.sequence_length_distribution)"></div>
                                        <div v-html="IconSelect(event.sequence_duplication_levels)"></div>
                                        <div v-html="IconSelect(event.overrepresented_sequences)"></div>
                                        <div v-html="IconSelect(event.adapter_content)"></div>
                                    </span>
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-gray-500"
                                >
                                    {{ event.sample_name}}
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-gray-500"
                                >
                                    {{ event.flowcell}}
                                </td>
                                <td class="whitespace-nowrap text-sm text-gray-500">
                                    {{ event.lane}}
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-gray-500"
                                >
                                    {{ event.row}}
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-gray-500"
                                >
                                    {{ event.total_sequences}}
                                </td>
                                <td class="whitespace-nowrap text-sm text-gray-500">
                                    {{ event.sequence_length}}
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-gray-500"
                                >
                                    {{ event.GC}}
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-white"
                                > 
                                    <div v-html="SpanSelect(event.basic_statistics)"></div> 
                                </td>
                                <td class="whitespace-nowrap text-sm text-white">
                                    <div v-html="SpanSelect(event.per_base_sequence_quality)"></div>
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-white"
                                >
                                    <div v-html="SpanSelect(event.per_tile_sequence_quality)"></div>
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-white"
                                >
                                    <div v-html="SpanSelect(event.per_sequence_quality_scores)"></div>
                                </td>
                                <td 
                                    class="whitespace-nowrap text-sm text-white"
                                >
                                    <div v-html="SpanSelect(event.Per_base_sequence_content)"></div>
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-white"
                                >
                                    <div v-html="SpanSelect(event.per_sequence_gc_content)"></div>
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-white"
                                >
                                    <div v-html="SpanSelect(event.per_base_n_content)"></div>
                                </td>
                                <td class="whitespace-nowrap text-sm text-white">
                                    <div v-html="SpanSelect(event.sequence_length_distribution)"></div>
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-white"
                                >
                                    <div v-html="SpanSelect(event.sequence_duplication_levels)"></div>
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-white"
                                >
                                    <div v-html="SpanSelect(event.overrepresented_sequences)"></div>
                                </td>
                                <td class="whitespace-nowrap text-sm text-white">
                                    <div v-html="SpanSelect(event.adapter_content)"></div>
                                </td>
                                <td class="pr-2 whitespace-nowrap text-sm text-gray-500">
                                    <a
                                        @click="somefunction(event)"
                                        :href="l"
                                        target="_blank"
                                        class="text-blue-600 dark:text-blue-500 hover:underline"
                                        >Report</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p
                        v-if="patientdatatable.count == 0" 
                        class="flex justify-center py-2 font-light font-serif text-lg">
                            No matching records found
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { map } from "lodash";
export default {
    data: () => ({
        l: "",
        filters: {
            name: { value: "", keys: ["true_sequence"] },
        },
        params: {
            search: "",
            project_name: "",
            sample_type: "",
            sequence: "",
            patient_id: "",
            basic_statistics: "",
            per_base_sequence_quality: "",
            per_tile_sequence_quality: "",
            per_sequence_quality_scores: "",
            Per_base_sequence_content: "",
            per_sequence_gc_content: "",
            per_base_n_content: "",
            sequence_length_distribution: "",
            sequence_duplication_levels: "",
            overrepresented_sequences: "",
            adapter_content: "",
            sample_name: "",
            flowcell: "",
            lane: "",
            row: "",
            total_sequences: "",
            sequence_length: "",
            GC: "",
        },
    }),
    computed: {
        ...mapFields("base", [
            "patientdatatable",
            "patientdatatable_loaded",
            "path",
        ]),
    },
    methods: {
        SpanSelect(value) {
            if(value == 'PASS') {
                return '<span class="bg-green-400 py-1 px-3 rounded-full text-xs">PASS</span>'
            } else if(value == 'FAIL') {
                return '<span class="bg-red-400 py-1 px-4 rounded-full text-xs">FAIL</span>'
            } else if(value == 'WARN') {
                return '<span class="bg-yellow-400 py-1 px-3 rounded-full text-xs">WARN</span>'
            } else {
                return '<span class="bg-gray-400 py-1 px-3 rounded-full text-xs">NULL</span>'
            }
                        
        },
        openMenu() {
            this.$router.push("/");
        },
        IconSelect(value) {
            if(value == 'PASS') {
                return '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>'
            } else if(value == 'FAIL') {
                return '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" > <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /> </svg>'
            } else if(value == 'WARN') {
                return '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle" width="24" height="24" viewBox="-2 0 30 29" stroke-width="3" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="12" r="9" /> <line x1="12" y1="8" x2="12" y2="12" /> <line x1="12" y1="16" x2="12.01" y2="16" /> </svg>'
            } else {
                return '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ban" ="18" height="18" viewBox="-2 -1 28 23"" stroke-width="3" stroke="#9e9e9e" ="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="12" r="9" /> <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" /> </svg>'
            }
        },
        TableFilter() {
            this.$store.dispatch("base/PatientDataTable",  this.params );
        },
        somefunction(value) {
            this.l =
                "http://10.10.6.87/fastqc/api/fastqc_report/" +
                "/" +
                value.project_name +
                "/" +
                value.patient_id +
                "/" +
                value.sequence +
                "/" +
                value.sample_type +
                "/" +
                value.path_name;
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.params.project_name = this.$route.query.project_name
            this.params.patient_id = this.$route.query.patient_id
            this.params.sequence = this.$route.query.sequence
            this.params.sample_type = this.$route.query.sample_type
            this.$store.dispatch("base/PatientDataTable", this.params)
            
            if(this.$auth.user == null) {
                this.$router.push('/login');
            }
        });
    },
};
</script>

<style scoped>

.hover-trigger .hover-target {
  display: none;
}

.hover-trigger:hover .hover-target {
  display: block;
}

input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #07021b;
}

.head {
    width: 1px;
}
</style>