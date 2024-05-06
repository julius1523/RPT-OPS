<template>
    <v-container fluid>
        <v-layout row wrap justify-center align-center>
            <v-card flat class="mb-3 d-flex align-center" :class="{ 'px-5': $vuetify.breakpoint.smAndUp }"
                color="transparent" height="50" width="100%">
                <v-row>
                    <v-card-subtitle class="text-subtitle-1 ml-auto">
                        Already have an account?
                        <router-link :to="{ name: 'login' }" class="text-subtitle-1 text-decoration-none">Sign
                            in <v-icon size="15" class="pb-1" color="primary">mdi-arrow-right</v-icon></router-link>
                    </v-card-subtitle>
                </v-row>
            </v-card>
            <v-stepper class="rounded-xl shadow" :width="stepWidth" v-model="e1">
                <v-card flat class="pt-6 pl-6 pr-6 pb-2 mb-1">
                    <v-card-title
                        class="pt-0 pl-0 grey--text text--darken-3 font-weight-bold text-sm-h6 text-md-h5">Sign
                        Up</v-card-title>
                    <v-card-subtitle class="pt-0 pl-0 text-sm-caption text-md-body-2">Please fill out the fields to
                        create
                        your
                        account.</v-card-subtitle>
                </v-card>
                <v-stepper-header elevation="0">
                    <v-stepper-step :complete="e1 > 1" step="1">
                        Personal Details
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">
                        Account Details
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">
                        Confirm Password
                    </v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                    <!-- Step 1 -->
                    <v-stepper-content step="1">
                        <v-form ref="form1" @submit.prevent="nextStep(2, 'form1')">
                            <v-card class="mt-2 pa-0" :class="{ 'mb-12': $vuetify.breakpoint.mdAndUp }" elevation="0"
                                height="290">
                                <v-text-field :rules="isFormSubmitted ? rules.first_name : []" required
                                    :dense="$vuetify.breakpoint.smAndDown" filled v-model="form.first_name"
                                    label="First Name" clearable></v-text-field>
                                <v-text-field :rules="isFormSubmitted ? rules.last_name : []" required
                                    :dense="$vuetify.breakpoint.smAndDown" filled v-model="form.last_name"
                                    label="Last Name" clearable></v-text-field>
                                <v-text-field :rules="isFormSubmitted ? rules.address : []" required
                                    :dense="$vuetify.breakpoint.smAndDown" filled v-model="form.address" label="Address"
                                    clearable></v-text-field>
                                <v-text-field :rules="isFormSubmitted ? rules.mobileno : []" required
                                    :dense="$vuetify.breakpoint.smAndDown" filled v-model="form.mobileno"
                                    label="Mobile Number" clearable></v-text-field>
                            </v-card>

                            <v-row dense no-gutters class="mt-5">
                                <v-btn depressed color="primary"
                                    :large="$vuetify.breakpoint.mdAndUp"
                                    class="ml-auto mb-1 text-capitalize text-subtitle-2 font-weight-bold rounded-lg" type="submit"
                                    @click="isFormSubmitted = true">
                                    Continue
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-stepper-content>

                    <!-- Step 2 -->
                    <v-stepper-content step="2">
                        <v-form ref="form2" @submit.prevent="nextStep(3, 'form2')">
                            <v-card class="mt-2 pa-0" :class="{ 'mb-12': $vuetify.breakpoint.mdAndUp }" elevation="0"
                                height="220">
                                <v-text-field :rules="isFormSubmitted ? rules.email : []" required
                                    :dense="$vuetify.breakpoint.smAndDown" filled v-model="form.email"
                                    label="Email Address" clearable></v-text-field>
                                <v-text-field :rules="isFormSubmitted ? rules.username : []" required
                                    :dense="$vuetify.breakpoint.smAndDown" filled v-model="form.username"
                                    label="Username" clearable></v-text-field>
                                <v-text-field :rules="isFormSubmitted ? rules.password : []" required
                                    :dense="$vuetify.breakpoint.smAndDown" filled v-model="form.password"
                                    label="Password" type="password" :append-icon="!value1 ? 'mdi-eye-off' : 'mdi-eye'"
                                    @click:append="() => (value1 = !value1)" :type="!value1 ? 'password' : 'text'"
                                    clearable></v-text-field>
                            </v-card>

                            <v-row dense no-gutters class="mt-5">
                                <v-btn text color="primary"
                                    :large="$vuetify.breakpoint.mdAndUp"
                                    class="text-capitalize text-capitalize text-subtitle-2 font-weight-bold rounded-lg"
                                    @click="prevStep">
                                    Previous
                                </v-btn>
                                <v-btn depressed color="primary"
                                    :large="$vuetify.breakpoint.mdAndUp"
                                    class="ml-auto mb-1 text-capitalize text-subtitle-2 font-weight-bold rounded-lg" type="submit"
                                    @click="isFormSubmitted = true">
                                    Continue
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-stepper-content>

                    <!-- Step 3 -->
                    <v-stepper-content step="3">
                        <v-form fast-fail ref="form3" @submit.prevent="submitForm('form3')">
                            <v-card class="mt-2 pa-0" :class="{ 'mb-12': $vuetify.breakpoint.mdAndUp }" elevation="0"
                                height="220">
                                <v-text-field
                                    :rules="isFormSubmitted ? (form.password === form.confirmpass ? [] : ['Password does not match']) : []"
                                    required :dense="$vuetify.breakpoint.smAndDown" filled v-model="form.confirmpass"
                                    label="Confirm Password" type="password"
                                    :append-icon="!value2 ? 'mdi-eye-off' : 'mdi-eye'"
                                    @click:append="() => (value2 = !value2)" :type="!value2 ? 'password' : 'text'"
                                    clearable></v-text-field>
                            </v-card>

                            <v-row dense no-gutters class="mt-5">
                                <v-btn text color="primary"
                                    :large="$vuetify.breakpoint.mdAndUp"
                                    class="text-capitalize text-capitalize text-subtitle-2 font-weight-bold rounded-lg"
                                    @click="prevStep">
                                    Previous
                                </v-btn>
                                <v-btn depressed color="primary"
                                    :large="$vuetify.breakpoint.mdAndUp"
                                    class="ml-auto text-capitalize ml-auto mb-1 text-capitalize text-subtitle-2 font-weight-bold rounded-lg"
                                    type="submit" @click="isFormSubmitted = true">
                                    Create Account
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-layout>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    metaInfo() {
        return { title: "Sign Up" };
    },
    data: () => ({
        e1: 1,
        form: {
            first_name: null,
            last_name: null,
            address: null,
            mobileno: null,
            email: null,
            username: null,
            password: null,
            confirmpass: null,
        },
        value1: false,
        value2: false,
        rules: {
            first_name: [
                (v) => !!v || "First Name is required",
                (v) => /^[a-zA-Z]+([' -][a-zA-Z]+)*$/i.test(v) || "First Name must be valid"
            ],
            last_name: [
                (v) => !!v || "Last Name is required",
                (v) => /^[a-zA-Z]+([' -][a-zA-Z]+)*$/i.test(v) || "Last Name must be valid"
            ],
            address: [
                (v) => !!v || "Address is required",
                (v) => /^[a-zA-Z0-9,'.\-][a-zA-Z0-9\s,'.\-]*[a-zA-Z0-9]$/i.test(v) || "Address must be valid"
            ],
            mobileno: [
                (v) => !!v || 'Mobile No. is required',
                (v) => /^\d{11}$/i.test(v) || 'Mobile No. must be valid and contain only numeric characters',
            ],
            email: [
                (v) => !!v || "Email Address is required",
                (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(v) || "Email Address must be valid"
            ],
            username: [
                (v) => !!v || "Username is required",
                (v) => /^[a-zA-Z0-9_.]{3,16}$/i.test(v) || "Username must be between 3 and 16 characters in length and can only contain letters, numbers, underscores, and periods.",
            ],
            password: [
                (v) => !!v || "Password is required",
                (v) => /^.{6,15}$/.test(v) || 'Password must be between 6 and 15 characters in length',
                (v) => /^(?=.*[0-9])/.test(v) || 'Password must contain at least 1 numeric digit',
                (v) => /^(?=.*[a-zA-Z])/.test(v) || 'Password must contain at least 1 letter',
            ],
        },
        isFormSubmitted: false,
    }),
    computed: {
        stepWidth() {
            return this.$vuetify.breakpoint.xsOnly ? 400 : 500;
        },
    },
    methods: {
        nextStep(step, formRef) {
            if (this.$refs[formRef].validate()) {
                this.e1 = step;
                this.isFormSubmitted = false;
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
        prevStep() {
            this.e1 -= 1;
        },
        async submitForm(formRef) {
            if (this.$refs[formRef].validate()) {
                await axios
                    .post("/api/signup/save", this.form)
                    .then((result) => {
                        switch (result.data) {
                            case 0:
                                this.$swal({
                                    icon: 'success',
                                    title: 'Sign Up Successful',
                                    text: 'You have successfully created an account!',
                                    timer: 3000,
                                    confirmButtonText: 'Ok',
                                    scrollbarPadding: false,
                                });
                                this.$router.push("/login");
                                this.resetValidationRules();
                                break;
                            case 1:
                                this.$swal({
                                    icon: 'error',
                                    title: 'Sign Up Failed',
                                    text: 'The email you are trying to use is already taken!',
                                    timer: 3000,
                                    confirmButtonText: 'Ok',
                                    scrollbarPadding: false,
                                });
                                this.resetValidationRules();
                                break;
                            case 2:
                                this.$swal({
                                    icon: 'error',
                                    title: 'Sign Up Failed',
                                    text: 'The mobile number you are trying to use is already taken!',
                                    timer: 3000,
                                    confirmButtonText: 'Ok',
                                    scrollbarPadding: false,
                                });
                                this.resetValidationRules();
                                break;
                            case 3:
                                this.$swal({
                                    icon: 'error',
                                    title: 'Sign Up Failed',
                                    text: 'The username you are trying to use is already taken!',
                                    timer: 3000,
                                    confirmButtonText: 'Ok',
                                    scrollbarPadding: false,
                                });
                                this.resetValidationRules();
                                break;
                            default:
                                break;
                        }
                    })
                    .catch((result) => {
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
    },
};
</script>

<style scoped>
.v-stepper__header {
    box-shadow: none;
}
</style>