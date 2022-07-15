<template>
    <div>
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
                                    class="py-4 text-sm font-semibold text-gray-900"
                                >
                                    Username
                                </th>
                                <th
                                    scope="col"
                                    class="py-4 text-sm font-semibold text-gray-900"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    class="py-4 text-sm font-semibold text-gray-900"
                                >
                                    Projects
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 text-center" v-for="event in userslist"
                                :key="event.id">
                                <td
                                    class="whitespace-nowrap text-sm text-gray-500"
                                >
                                    Username
                                </td>
                                <td
                                    class="whitespace-nowrap text-sm text-gray-500"
                                >
                                    {{ event.email}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
    }),
    computed: {
        ...mapFields("base", [
            "userslist",
            "userslist_loaded",
        ]),
    },
    methods: {
    },
    mounted() {
        this.$nextTick(() => {});
    },
};
</script>
