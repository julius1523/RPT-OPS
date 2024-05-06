<template>
    <v-breadcrumbs v-if="isAuthenticated" class="px-0 pt-0 no-underline" :items="breadcrumbs"></v-breadcrumbs>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('auth', ['isAuthenticated']),
    },
    props: {
        breadcrumbs: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style>
.no-underline .v-breadcrumbs__item:not(.v-breadcrumbs__item--disabled) {
    text-decoration: none;
}
</style>