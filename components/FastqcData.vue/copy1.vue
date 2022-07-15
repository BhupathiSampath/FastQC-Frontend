<template>
    <div>
        <link
            rel="stylesheet"
            href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />
        <div class="flex justify-center py-2 w-full py-2 w-full mr-4">
            <span
                class="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex"
            >
                <input
                    type="search"
                    name="search"
                    v-model="search"
                    v-on:keyup.enter="openMenu((page = 1))"
                    placeholder="Search"
                    class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
                />
                <i
                    @click="openMenu((page = 1))"
                    class="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"
                >
                </i>
            </span>
        </div>
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col">
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="inline-block w-full align-middle">
                        <table
                            class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                        >
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr class="bg-primary text-center">
                                	<th 
                                		class="py-3 px-6 text-lg font-medium tracking-wider text-white uppercase dark:text-gray-400"
                                		v-for="(column, index) in table_columns" :key="index"> {{column.split('_')[0]}}
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
                                        class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.project_name }}
                                    </td>
                                    <td
                                        v-if="event.patient_id"
                                        class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {{ event.patient_id }}
                                    </td>
                                    <td
                                        class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                    	<span @click="somefunction(event, 'DNA', 'Normal')" v-html="NormalButtonSelect(event.DNA.Normal)"></span>
                                    	<span @click="somefunction(event, 'Tumor', 'Normal')" v-html="TumorButtonSelect(event.DNA.Tumor)"></span>
                                    </td>
                                    <td
                                        class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                    	<span @click="somefunction(event, 'RNA', 'Normal')" v-html="NormalButtonSelect(event.RNA.Normal)"></span>
                                    	<span @click="somefunction(event, 'RNA', 'Tumor')" v-html="TumorButtonSelect(event.RNA.Tumor)"></span>
                                    </td>
                                    <td
                                        class="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                    	<span @click="somefunction(event, 'FFPE', 'Normal')" v-html="NormalButtonSelect(event.FFPE.Normal)"></span>
                                    	<span @click="somefunction(event, 'FFPE', 'Tumor')" v-html="TumorButtonSelect(event.FFPE.Tumor)"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p
                            v-if="datatable.count == 0"
                            class="flex justify-center py-2 font-light font-serif text-lg"
                        >
                            No matching records found
                        </p>
                        <div
                            v-if="datatable.count >= 1"
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
                                                page < datatable.count / 20 - 1
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
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { map } from "lodash";
export default {
    data: () => ({
        // params: {}
    }),
    computed: {
        ...mapFields("base", [
        	"table_columns",
            "datatable",
            "datatable_loaded",
            "page",
            "search",
        ]),
    },

    methods: {
    	NormalButtonSelect(value) {
            if(value) {
            	return '<button class="px-4 py-2 font-semibold text-sm bg-green-500 text rounded-full shadow-sm text-white" > Normal </button>'
            } else {
            	return '<button class="px-4 py-2 font-semibold text-sm bg-gray-500 text-white rounded-full shadow-sm cursor-not-allowed" > Normal </button>'
            }            
        },
        TumorButtonSelect(value) {
            if(value) {
            	this.somefunction()
            	return '<button class="px-4 py-2 font-semibold text-sm bg-red-500 text rounded-full shadow-sm text-white" > Tumor </button>'
            } else {
            	return '<button class="px-4 py-2 font-semibold text-sm bg-gray-500 text-white rounded-full shadow-sm cursor-not-allowed" > Tumor </button>'
            }        
        },
        openMenu() {
            this.$store.dispatch("base/DataTable");
        },
        async somefunction(value, sequence, sample_type) {
        	if(value[sequence][sample_type]) {
	            this.$router.push(`/datatable?project_name=${value.project_name}&patient_id=${value.patient_id}&sequence=${sequence}&sample_type=${sample_type}`);
	            this.$store.dispatch("base/PatientDataTable", {project_name: value.project_name, patient_id: value.patient_id, sequence: sequence, sample_type: sample_type});
        	}
        },
    },
    mounted() {
        this.$nextTick(() => {
            if(this.$auth.user == null) {
                this.$router.push('/login');
            }
        });
    },
};
</script>
