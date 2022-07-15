<template>
    <div>
        <NavBar />
        <div class="p-4 bg-gray-100">
            <Nuxt />
        </div>
        <Footer />
    </div>
</template>
<script>
export default {
    name: "default",
    data: () => ({}),
    created() {
        if(this.$auth.user) {
            this.$store.dispatch("base/DataTable");
            this.$store.dispatch("base/UsersList");
        }
    },
    mounted() {
        this.$nextTick(() => {});
    },
};
</script>
<style scoped></style>
