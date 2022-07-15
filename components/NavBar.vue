<template>
    <div>
        <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
            rel="stylesheet"
        />
        <div
            class="flex flex-row items-center p-1 justify-between bg-white shadow-xs"
        >
            <div v-if="this.$auth.user" class="ml-8 text-lg text-gray-700 hidden md:flex">{{ this.$auth.user.username }}</div>
            <div v-if="this.$auth.user == null" class="ml-8 text-lg text-gray-700 hidden md:flex">MY site</div>
            <div class="flex flex-row-reverse mr-8 hidden md:flex">
                <div v-if="this.$auth.user == null"
                    class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
                >
                    <NuxtLink to="/login">Login</NuxtLink>
                </div>
                <div v-if="this.$auth.user"
                    class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
                >
                    <button @click="logout">Logout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { async } from 'q';
import { mapFields } from 'vuex'
export default {
    data() {
        return {};
    },
    methods: {
        async logout() {
            await this.$auth.logout().then(() => {
                this.$router.push("/login");
            });
        },
    },
};
</script>
