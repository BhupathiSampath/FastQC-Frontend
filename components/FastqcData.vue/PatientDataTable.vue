<template>
    <div>
        <link
            rel="stylesheet"
            href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />
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
                class="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-full shadow-sm hover:underline pr-2"
                >MultiQC Report</a
            >
        </p>
        <div class="flex flex-col">
            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                <div class="inline-block w-7xl align-middle">
                    <div class="overflow-hidden">
                        <div class="py-2 w-full">
                            <span
                                class="w-screen md:w-1/4 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex"
                            >
                                <input
                                    v-model="search"
                                    v-on:keyup.enter="TableFilter"
                                    placeholder="Search for patient_id or project"
                                    class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
                                />
                                <i
                                    @click="TableFilter"
                                    class="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"
                                >
                                </i>
                            </span>
                        </div>
                        <table
                            class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                        >
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr class="bg-primary text-center">
                                    <th
                                        class="py-2 text-lg font-medium tracking-wider w-4 dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="BS"
                                                v-model="basic_statistics"
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Basic statistics
                                            </div>
                                        </i>
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="PBSQ"
                                                v-model="per_base_sequence_quality"
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Per base sequenc quality
                                            </div>
                                        </i>
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="PTSQ"
                                                v-model="per_tile_sequence_quality"
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Per tile sequence quality
                                            </div>
                                        </i>
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="PSQS"
                                                v-model="
                                                    per_sequence_quality_scores
                                                "
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Per sequence quality scores
                                            </div>
                                        </i>
                                    </th>

                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="PBSC"
                                                v-model="Per_base_sequence_content"
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Per base sequence content
                                            </div>
                                        </i>
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="PSGC"
                                                v-model="per_sequence_gc_content"
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Per sequence gc content
                                            </div>
                                        </i>
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="PBNC"
                                                v-model="per_base_n_content"
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Per base n content
                                            </div>
                                        </i>
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="SLD"
                                                v-model="
                                                    sequence_length_distribution
                                                "
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Sequence length distribution
                                            </div>
                                        </i>
                                    </th>

                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="SDL"
                                                v-model="
                                                    sequence_duplication_levels
                                                "
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Sequence duplication levels
                                            </div>
                                        </i>
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="OS"
                                                v-model="overrepresented_sequences"
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Overrepresented sequences
                                            </div>
                                        </i>
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="AC"
                                                v-model="adapter_content"
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Adapter content
                                            </div>
                                        </i>
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="SN"
                                                v-model="sample_name"
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Sample name
                                            </div>
                                        </i>
                                    </th>

                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <input
                                            placeholder="Flowcell"
                                            v-model="flowcell"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <input
                                            placeholder="Lane"
                                            v-model="lane"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <input
                                            placeholder="Row"
                                            v-model="row"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="TS"
                                                v-model="total_sequences"
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Total sequences
                                            </div>
                                        </i>
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider dark:text-gray-400"
                                    >
                                        <i
                                            class="relative hover-trigger"
                                        >
                                            <input
                                                placeholder="SL"
                                                v-model="sequence_length"
                                                v-on:keyup.enter="TableFilter"
                                                class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                            />
                                            <div
                                                class="absolute bg-white border border-grey-100 px-4 hover-target text-sm"
                                            >
                                                Sequence length
                                            </div>
                                        </i>
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider uppercase dark:text-gray-400"
                                    >
                                        <input
                                            placeholder="GC%"
                                            v-model="GC"
                                            v-on:keyup.enter="TableFilter"
                                            class="flex-grow px-4 rounded-l-full w-24 rounded-r-full text-sm focus:outline-none text-center"
                                        />
                                    </th>
                                    <th
                                        class="text-lg font-medium tracking-wider text-white dark:text-gray-400"
                                    >
                                        FastQC
                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                            >
                                <tr
                                    class="hover:bg-gray-100 dark:hover:bg-gray-700 text-center"
                                    v-for="event in patientdatatable.results"
                                    :key="event.id"
                                >
                                    <!-- <td
                                            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {{ event.project_name }}
                                        </td> -->

                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.basic_statistics }}
                                    </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.per_base_sequence_quality }}
                                    </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.per_tile_sequence_quality }}
                                    </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.per_sequence_quality_scores }}
                                    </td>

                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.Per_base_sequence_content }}
                                    </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.per_sequence_gc_content }}
                                    </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.per_base_n_content }}
                                    </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.sequence_length_distribution }}
                                    </td>

                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.sequence_duplication_levels }}
                                    </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.overrepresented_sequences }}
                                    </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.adapter_content }}
                                    </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.sample_name }}
                                    </td>

                                    <td
                                        class="text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.flowcell }}
                                    </td>
                                    <td
                                        class="text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.lane }}
                                    </td>
                                    <td
                                        class="text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.row }}
                                    </td>
                                    <td
                                        class="text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.total_sequences }}
                                    </td>
                                    <td
                                        class="text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.sequence_length }}
                                    </td>
                                    <td
                                        class="text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.GC }}
                                    </td>
                                    <td
                                        class="text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
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
    data: () => ({
        l: "",
        filters: {
            name: { value: "", keys: ["true_sequence"] },
        },
    }),
    computed: {
        ...mapFields("base", [
            "patientdatatable1",
            "patientdatatable_loaded1",
            "patientdatatable",
            "patientdatatable_loaded",
            "path",
            "search",
            "project_name",
            "sample_type",
            "sequence",
            "patient_id",
            "basic_statistics",
            "per_base_sequence_quality",
            "per_tile_sequence_quality",
            "per_sequence_quality_scores",
            "Per_base_sequence_content",
            "per_sequence_gc_content",
            "per_base_n_content",
            "sequence_length_distribution",
            "sequence_duplication_levels",
            "overrepresented_sequences",
            "adapter_content",
            "sample_name",
            "flowcell",
            "lane",
            "row",
            "total_sequences",
            "sequence_length",
            "GC",
        ]),
    },
    methods: {
        openMenu() {
            this.$router.push("/");
        },
        TableFilter() {
            console.log("name", this.patient_id);
            this.$store.dispatch("base/PatientDataTable", {
                project_name: this.project_name,
                patient_id: this.patient_id,
                sequence: this.sequence,
                sample_type: this.sample_type,
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
        this.$nextTick(() => {});
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
</style>
