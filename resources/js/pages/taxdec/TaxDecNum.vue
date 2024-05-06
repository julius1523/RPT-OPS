<template>
    <v-container fluid>
        <breadcrumbs :breadcrumbs="pageBreadcrumbs"></breadcrumbs>
        <v-card class="pa-4 rounded-xl shadow">
            <v-card-title class="px-0 pt-0 font-weight-bold grey--text text--darken-3">
                Tax Declaration Number
            </v-card-title>
        </v-card>
    </v-container>
</template>

<script>
export default {
    metaInfo() {
        return { title: "Tax Declaration Number" }
    },
    data() {
        return {
            pageBreadcrumbs: [
                { text: 'Home', to: '/dashboard' },
                { text: 'Current Page', to: '/taxdecnum' },
            ],
        }
    }
}
</script>
