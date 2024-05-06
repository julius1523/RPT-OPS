<template>
    <v-overlay :value="loading" z-index="99999999">
        <v-progress-circular indeterminate size="64"> </v-progress-circular>
    </v-overlay>
</template>

<script>
export default {
    computed: {
        loading() {
            return this.$store.getters["auth/isLoadingOverlay"];
        },
    },
};
</script>
