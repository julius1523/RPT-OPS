<template>
  <v-container fluid>
    <breadcrumbs :breadcrumbs="pageBreadcrumbs"></breadcrumbs>
    <v-card class="pa-4 rounded-xl shadow">
      <v-card-title class="px-0 pt-0 font-weight-bold grey--text text--darken-3"
        >Change Password</v-card-title
      >
      <v-row>
        <v-col cols="12" sm="6" align="center" class="my-auto">
          <v-card flat max-width="400">
            <v-card-subtitle
              class="pt-0 px-0 text-sm-caption text-md-body-2 text-left text-justify text-muted"
              >Tip: Your password must be at least 6 characters and should include a
              combination of numbers, letters and special characters
              (!$@%)</v-card-subtitle
            >
            <v-form fast-fail ref="form" @submit.prevent="change">
              <v-text-field
                :rules="isFormSubmitted ? rules.password : []"
                required
                :dense="$vuetify.breakpoint.smAndDown"
                filled
                v-model="form.password"
                label="Password"
                type="password"
                :append-icon="!value1 ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="() => (value1 = !value1)"
                :type="!value1 ? 'password' : 'text'"
                autocomplete
              ></v-text-field>
              <v-text-field
                v-if="hidden"
                :rules="
                  isFormSubmitted
                    ? form.password === form.confirm
                      ? []
                      : ['Password does not match']
                    : []
                "
                required
                :dense="$vuetify.breakpoint.smAndDown"
                filled
                v-model="form.confirm"
                label="Confirm Password"
                type="password"
                :append-icon="!value2 ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="() => (value2 = !value2)"
                :type="!value2 ? 'password' : 'text'"
                autocomplete
              ></v-text-field>
              <v-btn
                type="submit"
                depressed
                color="primary"
                large
                :x-large="$vuetify.breakpoint.mdAndUp"
                block
                @click="isFormSubmitted = true"
                class="text-capitalize font-weight-bold text-subtitle-1 rounded-lg"
                >Change Password</v-btn
              >
            </v-form>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          align="center"
          class="my-auto"
          v-if="$vuetify.breakpoint.smAndUp"
        >
          <v-img contain eager src="/img/change_password.svg" max-height="280"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  metaInfo() {
    return { title: "Change Password" };
  },
  data() {
    return {
      isFormSubmitted: false,
      value1: false,
      value2: false,
      form: {
        password: null,
        confirm: null,
      },
      pageBreadcrumbs: [
        { text: "Home", to: "/dashboard" },
        { text: "Current Page", to: "/changepassword" },
      ],
      rules: {
        password: [
          (v) => !!v || "Password is required",
          (v) =>
            /^.{6,15}$/.test(v) ||
            "Password must be between 6 and 15 characters in length",
          (v) =>
            /^(?=.*[0-9])/.test(v) || "Password must contain at least 1 numeric digit",
          (v) => /^(?=.*[a-zA-Z])/.test(v) || "Password must contain at least 1 letter",
        ],
      },
    };
  },

  computed: {
    hidden() {
      if (this.form && this.form.password) {
        const isValidPassword = this.rules.password.every(
          (rule) => rule(this.form.password) === true
        );

        if (isValidPassword) {
          this.form.confirm = null;
          this.resetValidationRules();
        }

        return isValidPassword;
      }
      return false;
    },
  },

  methods: {
    async change() {
      if (this.$refs.form.validate()) {
        await axios.post("api/user/changepass", this.form).then((result) => {
          switch (result.data) {
            case 0:
              this.$swal({
                icon: "success",
                title: "Change Password Successful",
                text: "You have successfully changed your password!",
                timer: 3000,
                confirmButtonText: "Ok",
                scrollbarPadding: false,
              });
              this.$refs.form.reset();
              this.resetValidationRules();
              break;
            case 1:
              this.$swal({
                icon: "error",
                title: "Change Password Failed",
                text: "You cannot use your previous password! Please choose a new one",
                timer: 3000,
                confirmButtonText: "Ok",
                scrollbarPadding: false,
              });
              this.resetValidationRules();
              break;
            default:
              break;
          }
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
