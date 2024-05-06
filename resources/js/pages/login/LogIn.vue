<template>
    <v-container>
        <v-layout row wrap justify-center align-center>
            <v-card width="425" class="pa-6 rounded-xl shadow">
                <v-card-title class="pt-0 pl-0 grey--text text--darken-3 font-weight-bold text-sm-h6 text-md-h5">Sign
                    In</v-card-title>
                <v-card-subtitle class="pt-0 pl-0 text-sm-caption text-md-body-2">Please sign in to your account to
                    proceed</v-card-subtitle>
                <v-form fast-fail ref="form" @submit.prevent="login">
                    <v-text-field :rules="isFormSubmitted ? rules.mobileno : []" required
                        :dense="$vuetify.breakpoint.smAndDown" filled v-model="form.mobileno" label="Mobile No."
                        class="mt-2"></v-text-field>
                    <v-text-field :rules="isFormSubmitted ? rules.password : []" required
                        :dense="$vuetify.breakpoint.smAndDown" filled v-model="form.password" label="Password"
                        type="password" :append-icon="!value ? 'mdi-eye-off' : 'mdi-eye'"
                        @click:append="() => (value = !value)" :type="!value ? 'password' : 'text'"></v-text-field>
                    <v-btn type="submit" depressed color="primary" large :x-large="$vuetify.breakpoint.mdAndUp" block
                        @click="isFormSubmitted = true" class="text-capitalize font-weight-bold rounded-lg text-h6">Sign
                        In</v-btn>
                </v-form>
                <v-divider class="mt-6 mb-4"></v-divider>
                <v-card-text class="p-0 text-center">New on our platform? <router-link class="text-decoration-none"
                        :to="{ name: 'signup' }">Create an
                        account</router-link></v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
import Form from "vform";
import axios from "axios";

export default {
    metaInfo() {
        return { title: "Sign In" };
    },
    data: () => ({
        value: false,
        form: new Form({
            mobileno: null,
            password: null,
        }),
        rules: {
            mobileno: [
                (v) => !!v || 'Mobile No. is required',
                (v) => /^09?.{10,}$/i.test(v) || 'Mobile No. must be valid',
                (v) => /^.{11}$/i.test(v) || 'Mobile No. must be 11 characters'
            ],
            password: [
                (v) => !!v || 'Password is required',
            ],
        },
        isFormSubmitted: false,
    }),

    methods: {
        async login() {
            if (this.$refs.form.validate()) {
                await axios
                    .post("/api/login", this.form)
                    .then((response) => {
                        if (response.data.token) {
                            const token = response.data.token;
                            const name = response.data.name;
                            // this.$store.dispatch("auth/fetchUser");
                            this.$store.dispatch("auth/login", token);
                            this.$swal({
                                icon: 'success',
                                title: 'Login Successful',
                                text: 'Welcome, ' + name + '!',
                                timer: 3000,
                                confirmButtonText: 'Ok',
                                scrollbarPadding: false,
                            });
                            this.$router.push("/dashboard");
                        }
                    })
                    .catch((error) => {
                        this.$swal({
                            icon: 'error',
                            title: 'Login Failed',
                            text: 'The provided login information is incorrect.',
                            timer: 3000,
                            confirmButtonText: 'Ok, I understood',
                            scrollbarPadding: false,
                        });
                    });
            } else {
                if (this.validationResetTimeout) {
                    clearTimeout(this.validationResetTimeout);
                }

                this.validationResetTimeout = setTimeout(() => {
                    this.resetValidationRules();
                    this.validationResetTimeout = null;
                }, 3000);
            }
        },

        resetValidationRules() {
            this.isFormSubmitted = false;
        },
    }
};
</script>