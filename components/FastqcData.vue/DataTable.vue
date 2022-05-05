<template>
    <div>
        <link
            rel="stylesheet"
            href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />
        <div class="max-w-7xl mx-auto">
            <div class="py-2 w-full">
                <span
                    class="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex"
                >
                    <input
                        type="search"
                        name="search"
                        v-model="search"
                        v-on:keyup.enter="openMenu"
                        placeholder="Search for patient_id or project"
                        class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
                    />
                    <i
                        @click="openMenu"
                        class="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"
                    >
                    </i>
                </span>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="inline-block w-full align-middle">
                        <div class="overflow-hidden">
                            <table
                                class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                            >
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <tr class="bg-primary text-center">
                                        <th
                                            class="py-3 px-6 text-lg font-medium tracking-wider text-white uppercase dark:text-gray-400"
                                        >
                                            Project
                                        </th>
                                        <th
                                            class="py-3 px-6 text-lg font-medium tracking-wider text-white uppercase dark:text-gray-400"
                                        >
                                            Patient ID
                                        </th>
                                        <th
                                            class="py-3 px-6 text-lg font-medium tracking-wider text-white uppercase dark:text-gray-400"
                                        >
                                            DNA
                                        </th>
                                        <th
                                            class="py-3 px-6 text-lg font-medium tracking-wider text-white uppercase dark:text-gray-400"
                                        >
                                            RNA
                                        </th>
                                        <th
                                            class="py-3 px-6 text-lg font-medium tracking-wider text-white uppercase dark:text-gray-400"
                                        >
                                            FFPE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                                >
                                    <tr
                                        class="hover:bg-gray-100 dark:hover:bg-gray-700 text-center"
                                        v-for="event in datatable.results"
                                        :key="event.id"
                                    >
                                        <td
                                            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {{ event.project_name }}
                                        </td>
                                        <td
                                            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {{ event.patient_id }}
                                        </td>
                                        <td
                                            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <button
                                                @click="
                                                    somefunction(
                                                        event,
                                                        'DNA',
                                                        'Normal'
                                                    )
                                                "
                                                class="px-4 py-2 font-semibold text-sm bg-green-500 text-white rounded-full shadow-sm"
                                            >
                                                Normal
                                            </button>
                                            <button
                                                @click="
                                                    somefunction(
                                                        event,
                                                        'DNA',
                                                        'Tumor'
                                                    )
                                                "
                                                class="px-4 py-2 font-semibold text-sm bg-red-500 text-white rounded-full shadow-sm"
                                            >
                                                Tumor
                                            </button>
                                        </td>
                                        <td
                                            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <button
                                                @click="
                                                    somefunction(
                                                        event,
                                                        'RNA',
                                                        'Normal'
                                                    )
                                                "
                                                class="px-4 py-2 font-semibold text-sm bg-green-500 text-white rounded-full shadow-sm"
                                            >
                                                Normal
                                            </button>
                                            <button
                                                @click="
                                                    somefunction(
                                                        event,
                                                        'RNA',
                                                        'Tumor'
                                                    )
                                                "
                                                class="px-4 py-2 font-semibold text-sm bg-red-500 text-white rounded-full shadow-sm"
                                            >
                                                Tumor
                                            </button>
                                        </td>
                                        <td
                                            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <button
                                                @click="
                                                    somefunction(
                                                        event,
                                                        'FFPE',
                                                        'Normal'
                                                    )
                                                "
                                                class="px-4 py-2 font-semibold text-sm bg-green-500 text-white rounded-full shadow-sm"
                                            >
                                                Normal
                                            </button>
                                            <button
                                                @click="
                                                    somefunction(
                                                        event,
                                                        'FFPE',
                                                        'Tumor'
                                                    )
                                                "
                                                class="px-4 py-2 font-semibold text-sm bg-red-500 text-white rounded-full shadow-sm"
                                            >
                                                Tumor
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div
                                class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                            >
                                <div
                                    class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
                                >
                                    <div>
                                        <p class="text-sm text-gray-700">
                                            Showing
                                            <span class="font-medium">{{
                                                page
                                            }}</span>
                                            of
                                            <span class="font-medium">{{
                                                (datatable.count / 20 + 1) ^ 0
                                            }}</span>
                                            pages
                                        </p>
                                    </div>
                                    <div>
                                        <nav
                                            class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px cursor-pointer"
                                            aria-label="Pagination"
                                        >
                                            <a
                                                v-if="page > 1"
                                                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                v-on:click="
                                                    openMenu((page = page - 1))
                                                "
                                                >Previous</a
                                            >
                                            <a
                                                aria-current="page"
                                                class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                v-on:click="openMenu(page)"
                                                >{{ page }}</a
                                            >
                                            <a
                                                v-if="
                                                    page >= 1 &&
                                                    page < datatable.count / 20
                                                "
                                                class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                v-on:click="
                                                    openMenu((page = page + 1))
                                                "
                                                >{{ page + 1 }}</a
                                            >
                                            <a
                                                v-if="
                                                    page >= 1 &&
                                                    page <
                                                        datatable.count / 20 - 1
                                                "
                                                class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                v-on:click="
                                                    openMenu((page = page + 2))
                                                "
                                                >{{ page + 2 }}</a
                                            >
                                            <a
                                                v-if="
                                                    page >= 1 &&
                                                    page < datatable.count / 20
                                                "
                                                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                v-on:click="
                                                    openMenu((page = page + 1))
                                                "
                                                >Next</a
                                            >
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { map } from "lodash";
export default {
    data: () => ({}),
    computed: {
        ...mapFields("base", [
            "project_name",
            "patient_id",
            "sequence",
            "sample_type",
            "datatable",
            "datatable_loaded",
            "page",
            "search",
            "basic_statistics","per_base_sequence_quality","per_tile_sequence_quality",
            "per_sequence_quality_scores","Per_base_sequence_content","per_sequence_gc_content",
            "per_base_n_content","sequence_length_distribution","sequence_duplication_levels",
            "overrepresented_sequences","adapter_content","sample_name","flowcell","lane","row",
            "total_sequences","sequence_length","GC"
        ]),
    },
    methods: {
        openMenu() {
            this.$store.dispatch("base/DataTable");
        },
        async somefunction(value, sequence, sample_type) {
            console.log(
                value.project_name,
                value.patient_id,
                sequence,
                sample_type
            );
            // this.store.state.path  = "http://10.10.6.87/fastqc/api/multiqc_report/ICGC/316/DNA/Tumor"
            this.$router.push("/datatable");
            this.$store.dispatch("base/PatientDataTable", {
                project_name: value.project_name,
                patient_id: value.patient_id,
                sequence: sequence,
                sample_type: sample_type,
                search: this.search,
                basic_statistics: this.basic_statistics,
                per_base_sequence_quality: this.per_base_sequence_quality,
                per_tile_sequence_quality: this.per_tile_sequence_quality,
                per_sequence_quality_scores: this.per_sequence_quality_scores,
                Per_base_sequence_content: this.Per_base_sequence_content,
                per_sequence_gc_content: this.per_sequence_gc_content,
                per_base_n_content: this.per_base_n_content,
                sequence_length_distribution: this.sequence_length_distribution,
                sequence_duplication_levels: this.sequence_duplication_levels,
                overrepresented_sequences: this.overrepresented_sequences,
                adapter_content: this.adapter_content,
                sample_name: this.sample_name,
                flowcell: this.flowcell,
                lane: this.lane,
                row: this.row,
                total_sequences: this.total_sequences,
                sequence_length: this.sequence_length,
                GC: this.GC,

            });
        },
    },
    mounted() {
        this.$nextTick(() => {});
    },
};
</script>
