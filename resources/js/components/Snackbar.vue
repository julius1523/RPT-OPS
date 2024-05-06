<template>
    <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout" :left="$vuetify.breakpoint.mdAndUp">
        <v-icon v-if="snackbar.icon" :color="color" class="mr-2">{{ snackbar.icon }}</v-icon>
        <span class="text-caption">{{ snackbar.message }}</span>
        <template v-slot:action="{ attrs }">
            <v-btn color="primary" class="text-caption" text v-bind="attrs" @click="snackbar.show = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    data() {
        return {
            snackbar: {
                show: false,
                message: null,
                timeout: 3000,
                icon: null,
            },
        };
    },
    computed: {
        color() {
            if (this.snackbar.icon === 'mdi-information') {
                return 'primary';
            } else if (this.snackbar.icon === 'mdi-check-circle') {
                return 'success';
            } else if (this.snackbar.icon === 'mdi-alert-circle') {
                return 'warning'
            }
        }
    },
    created() {
        this.$root.$on('show-global-snackbar', (options) => {
            this.snackbar.message = options.message;
            this.snackbar.icon = options.icon;
            this.snackbar.show = true;
        });
    },
    beforeDestroy() {
        this.$root.$off('show-global-snackbar');
    },
};
</script>