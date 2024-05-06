<template>
  <v-container fluid>
    <breadcrumbs :breadcrumbs="pageBreadcrumbs"></breadcrumbs>
    <v-card class="pa-4 rounded-xl shadow">
      <v-form ref="form">
        <v-card-title class="px-0 pt-0 font-weight-bold grey--text text--darken-3"
          >Account Information</v-card-title
        >
        <v-card-subtitle class="px-0">Account No: {{ account_no }}</v-card-subtitle>
        <v-alert
          v-if="validationError.first_name"
          text
          dense
          type="error"
          class="mb-0 rounded-lg"
        >
          {{ validationError.first_name }}
        </v-alert>
        <v-card
          flat
          color="rgba(0, 0, 0, 0.05)"
          class="pa-4 pa-sm-6 my-2 rounded-lg shadow"
        >
          <v-row no-gutters>
            <v-col cols="12" sm="2" class="my-auto"
              ><v-card-subtitle
                class="font-weight-bold py-0 text-subtitle-2 text-md-subtitle-1 px-1"
                >First Name:</v-card-subtitle
              ></v-col
            >
            <v-col cols="11" sm="9" class="my-auto">
              <v-text-field
                class="py-0 text-field-transparent"
                :rules="rules.first_name"
                v-model="form.first_name"
                dense
                flat
                hide-details
                :solo="!isEditFirstName"
                :readonly="!isEditFirstName"
                @keyup="
                  compareData();
                  validateFirstName();
                "
              ></v-text-field>
            </v-col>
            <v-col cols="1" class="my-auto text-right"
              ><v-btn icon @click="editFirstName"
                ><v-icon v-if="!isEditFirstName" size="20">mdi-pencil</v-icon
                ><v-icon v-else>mdi-cancel</v-icon></v-btn
              ></v-col
            >
          </v-row>
        </v-card>

        <v-alert
          v-if="validationError.last_name"
          text
          dense
          type="error"
          class="mb-0 rounded-lg"
        >
          {{ validationError.last_name }}
        </v-alert>
        <v-card
          flat
          color="rgba(0, 0, 0, 0.05)"
          class="pa-4 pa-sm-6 my-2 rounded-lg shadow"
        >
          <v-row no-gutters>
            <v-col cols="12" sm="2" class="my-auto"
              ><v-card-subtitle
                class="font-weight-bold py-0 text-subtitle-2 text-md-subtitle-1 px-1"
                >Last Name:</v-card-subtitle
              ></v-col
            >
            <v-col cols="11" sm="9" class="my-auto">
              <v-text-field
                class="py-0 text-field-transparent"
                :rules="rules.last_name"
                v-model="form.last_name"
                dense
                flat
                hide-details
                :solo="!isEditLastName"
                :readonly="!isEditLastName"
                @keyup="
                  compareData();
                  validateLastName();
                "
              ></v-text-field>
            </v-col>
            <v-col cols="1" class="my-auto text-right"
              ><v-btn icon @click="editLastName"
                ><v-icon v-if="!isEditLastName" size="20">mdi-pencil</v-icon
                ><v-icon v-else>mdi-cancel</v-icon></v-btn
              ></v-col
            >
          </v-row>
        </v-card>

        <v-alert
          v-if="validationError.mobileno"
          text
          dense
          type="error"
          class="mb-0 rounded-lg"
        >
          {{ validationError.mobileno }}
        </v-alert>
        <v-card
          flat
          color="rgba(0, 0, 0, 0.05)"
          class="pa-4 pa-sm-6 my-2 rounded-lg shadow"
        >
          <v-row no-gutters>
            <v-col cols="12" sm="2" class="my-auto"
              ><v-card-subtitle
                class="font-weight-bold py-0 text-subtitle-2 text-md-subtitle-1 px-1"
                >Mobile No.:</v-card-subtitle
              ></v-col
            >
            <v-col cols="11" sm="9" class="my-auto">
              <v-text-field
                class="py-0 text-field-transparent"
                :rules="rules.mobileno"
                v-model="form.mobileno"
                dense
                flat
                hide-details
                :solo="!isEditMobile"
                :readonly="!isEditMobile"
                @keyup="
                  compareData();
                  validateMobileno();
                "
              ></v-text-field>
            </v-col>
            <v-col cols="1" class="my-auto text-right"
              ><v-btn icon @click="editMobile"
                ><v-icon v-if="!isEditMobile" size="20">mdi-pencil</v-icon
                ><v-icon v-else>mdi-cancel</v-icon></v-btn
              ></v-col
            >
          </v-row>
        </v-card>

        <v-alert
          v-if="validationError.email"
          text
          dense
          type="error"
          class="mb-0 rounded-lg"
        >
          {{ validationError.email }}
        </v-alert>
        <v-card
          flat
          color="rgba(0, 0, 0, 0.05)"
          class="pa-4 pa-sm-6 my-2 rounded-lg shadow"
        >
          <v-row no-gutters>
            <v-col cols="12" sm="2" class="my-auto"
              ><v-card-subtitle
                class="font-weight-bold py-0 text-subtitle-2 text-md-subtitle-1 px-1"
                >Email:</v-card-subtitle
              ></v-col
            >
            <v-col cols="11" sm="9" class="my-auto">
              <v-text-field
                class="py-0 text-field-transparent"
                :rules="rules.email"
                v-model="form.email"
                dense
                flat
                hide-details
                :solo="!isEditEmail"
                :readonly="!isEditEmail"
                @keyup="
                  compareData();
                  validateEmail();
                "
              ></v-text-field>
            </v-col>
            <v-col cols="1" class="my-auto text-right"
              ><v-btn icon @click="editEmail"
                ><v-icon v-if="!isEditEmail" size="20">mdi-pencil</v-icon
                ><v-icon v-else>mdi-cancel</v-icon></v-btn
              ></v-col
            >
          </v-row>
        </v-card>

        <v-alert
          v-if="validationError.address"
          text
          dense
          type="error"
          class="mb-0 rounded-lg"
        >
          {{ validationError.address }}
        </v-alert>
        <v-card
          flat
          color="rgba(0, 0, 0, 0.05)"
          class="pa-4 pa-sm-6 my-2 rounded-lg shadow"
        >
          <v-row no-gutters>
            <v-col cols="12" sm="2" class="my-auto"
              ><v-card-subtitle
                class="font-weight-bold py-0 text-subtitle-2 text-md-subtitle-1 px-1"
                >Address:</v-card-subtitle
              ></v-col
            >
            <v-col cols="11" sm="9" class="my-auto">
              <v-text-field
                class="py-0 text-field-transparent"
                :rules="rules.address"
                v-model="form.address"
                dense
                flat
                hide-details
                :solo="!isEditAddress"
                :readonly="!isEditAddress"
                @keyup="
                  compareData();
                  validateAddress();
                "
              ></v-text-field>
            </v-col>
            <v-col cols="1" class="my-auto text-right"
              ><v-btn icon @click="editAddress"
                ><v-icon v-if="!isEditAddress" size="20">mdi-pencil</v-icon
                ><v-icon v-else>mdi-cancel</v-icon></v-btn
              ></v-col
            >
          </v-row>
        </v-card>

        <v-alert
          v-if="validationError.username"
          text
          dense
          type="error"
          class="mb-0 rounded-lg"
        >
          {{ validationError.username }}
        </v-alert>
        <v-card
          flat
          color="rgba(0, 0, 0, 0.05)"
          class="pa-4 pa-sm-6 my-2 rounded-lg shadow"
        >
          <v-row no-gutters>
            <v-col cols="12" sm="2" class="my-auto"
              ><v-card-subtitle
                class="font-weight-bold py-0 text-subtitle-2 text-md-subtitle-1 px-1"
                >Username:</v-card-subtitle
              ></v-col
            >
            <v-col cols="11" sm="9" class="my-auto">
              <v-text-field
                class="py-0 text-field-transparent"
                :rules="rules.username"
                v-model="form.username"
                dense
                flat
                hide-details
                :solo="!isEditUsername"
                :readonly="!isEditUsername"
                @keyup="
                  compareData();
                  validateUsername();
                "
              ></v-text-field>
            </v-col>
            <v-col cols="1" class="my-auto text-right"
              ><v-btn icon @click="editUsername"
                ><v-icon v-if="!isEditUsername" size="20">mdi-pencil</v-icon
                ><v-icon v-else>mdi-cancel</v-icon></v-btn
              ></v-col
            >
          </v-row>
        </v-card>
      </v-form>

      <template v-if="$vuetify.breakpoint.xsOnly">
        <v-row dense class="mt-4">
          <v-col cols="12" class="order-sm-first order-last">
            <v-btn
              color="primary"
              text
              depressed
              class="text-capitalize text-subtitle-2 font-weight-bold rounded-lg"
              @click="cancelEdit"
              :block="$vuetify.breakpoint.xsOnly"
              :disabled="disableCancel"
              :large="$vuetify.breakpoint.mdAndUp"
              >Cancel</v-btn
            >
          </v-col>
          <v-col cols="12">
            <v-btn
              color="primary"
              depressed
              class="text-capitalize text-subtitle-2 font-weight-bold rounded-lg"
              :block="$vuetify.breakpoint.xsOnly"
              @click="updateAccount"
              :disabled="disableSave"
              :large="$vuetify.breakpoint.mdAndUp"
              >Save changes</v-btn
            >
          </v-col>
        </v-row>
      </template>
      <template v-else>
        <v-row dense no-gutters class="mt-4">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            outlined
            class="text-capitalize text-subtitle-2 font-weight-bold rounded-lg"
            depressed
            @click="cancelEdit"
            :disabled="disableCancel"
            :large="$vuetify.breakpoint.mdAndUp"
            >Cancel</v-btn
          >
          <v-btn
            color="primary"
            class="text-capitalize text-subtitle-2 font-weight-bold ml-2 rounded-lg"
            depressed
            @click="updateAccount"
            :disabled="disableSave"
            :large="$vuetify.breakpoint.mdAndUp"
            >Save changes</v-btn
          >
        </v-row>
      </template>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  metaInfo() {
    return { title: "Account Information" };
  },
  data() {
    return {
      isEditFirstName: false,
      isEditLastName: false,
      isEditMobile: false,
      isEditEmail: false,
      isEditAddress: false,
      isEditUsername: false,
      disableCancel: true,
      disableSave: true,
      account_no: null,
      validationError: {
        first_name: null,
        last_name: null,
        mobileno: null,
        email: null,
        address: null,
        username: null,
      },
      form: {
        first_name: null,
        last_name: null,
        mobileno: null,
        email: null,
        address: null,
        username: null,
      },
      currentdata: {
        first_name: null,
        last_name: null,
        mobileno: null,
        email: null,
        address: null,
        username: null,
      },
      rules: {
        first_name: [
          (v) => !!v || "First Name is required",
          (v) => /^[a-zA-Z]+([' -][a-zA-Z]+)*$/i.test(v) || "First Name must be valid",
        ],
        last_name: [
          (v) => !!v || "Last Name is required",
          (v) => /^[a-zA-Z]+([' -][a-zA-Z]+)*$/i.test(v) || "Last Name must be valid",
        ],
        address: [
          (v) => !!v || "Address is required",
          (v) =>
            /^[a-zA-Z0-9,'.\-][a-zA-Z0-9\s,'.\-]*[a-zA-Z0-9]$/i.test(v) ||
            "Address must be valid",
        ],
        mobileno: [
          (v) => !!v || "Mobile No. is required",
          (v) =>
            /^\d{11}$/i.test(v) ||
            "Mobile No. must be valid and contain only numeric characters",
        ],
        email: [
          (v) => !!v || "Email Address is required",
          (v) =>
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(v) ||
            "Email Address must be valid",
        ],
        username: [
          (v) => !!v || "Username is required",
          (v) =>
            /^[a-zA-Z0-9_.]{3,16}$/i.test(v) ||
            "Username must be between 3 and 16 characters in length and can only contain letters, numbers, underscores, and periods.",
        ],
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
      pageBreadcrumbs: [
        { text: "Home", to: "/dashboard" },
        { text: "Current Page", to: "/accountinfo" },
      ],
    };
  },
  watch: {
    isEditFirstName: "updateCancelStatus",
    isEditLastName: "updateCancelStatus",
    isEditMobile: "updateCancelStatus",
    isEditEmail: "updateCancelStatus",
    isEditAddress: "updateCancelStatus",
    isEditUsername: "updateCancelStatus",
  },
  created() {
    this.getAccount();
  },
  methods: {
    async updateAccount() {
      await axios.post("/api/user/updateaccinfo", this.form).then((result) => {
        switch (result.data) {
          case 0:
            this.$swal({
              icon: "success",
              title: "Update Successful",
              text: "You have successfully updated your account info!",
              timer: 3000,
              confirmButtonText: "Ok",
              scrollbarPadding: false,
            });
            this.$store.dispatch("auth/fetchUser");
            this.getAccount();
            this.setDisable();
            break;
          case 1:
            this.$swal({
              icon: "error",
              title: "Save Failed",
              text: "The email you are trying to use is already taken!",
              timer: 3000,
              confirmButtonText: "Ok",
              scrollbarPadding: false,
            });
            break;
          case 2:
            this.$swal({
              icon: "error",
              title: "Save Failed",
              text: "The mobile number you are trying to use is already taken!",
              timer: 3000,
              confirmButtonText: "Ok",
              scrollbarPadding: false,
            });
            break;
          case 3:
            this.$swal({
              icon: "error",
              title: "Save Failed",
              text: "The username you are trying to use is already taken!",
              timer: 3000,
              confirmButtonText: "Ok",
              scrollbarPadding: false,
            });
            break;
          default:
            break;
        }
      });
    },
    async getAccount() {
      await axios
        .get("/api/user/getaccinfo")
        .then((result) => {
          this.form.first_name = result.data.first_name;
          this.form.last_name = result.data.last_name;
          this.form.mobileno = result.data.mobileno;
          this.form.email = result.data.email;
          this.form.address = result.data.address;
          this.form.username = result.data.username;

          this.account_no = result.data.accno;

          this.currentdata = result.data;
          this.compareData();
        })
        .catch((result) => {});
    },
    compareData() {
      if (!this.currentdata) {
        return true;
      }

      var found = 0;
      for (var key in this.form) {
        if (this.currentdata[key] != this.form[key] && this.form[key] != "") {
          found += 1;
        }
      }

      if (found > 0) {
        if (this.$refs.form.validate()) {
          this.disableSave = false;
        } else {
          this.disableSave = true;
        }
      } else {
        this.disableSave = true;
      }
    },
    editFirstName() {
      this.form.first_name = this.currentdata.first_name;
      this.isEditFirstName = !this.isEditFirstName;
      this.compareData();
      this.updateCancelStatus();
      this.validateFirstName();
    },
    editLastName() {
      this.form.last_name = this.currentdata.last_name;
      this.isEditLastName = !this.isEditLastName;
      this.compareData();
      this.updateCancelStatus();
      this.validateLastName();
    },
    editMobile() {
      this.form.mobileno = this.currentdata.mobileno;
      this.isEditMobile = !this.isEditMobile;
      this.compareData();
      this.updateCancelStatus();
      this.validateMobileno();
    },
    editEmail() {
      this.form.email = this.currentdata.email;
      this.isEditEmail = !this.isEditEmail;
      this.compareData();
      this.updateCancelStatus();
      this.validateEmail();
    },
    editAddress() {
      this.form.address = this.currentdata.address;
      this.isEditAddress = !this.isEditAddress;
      this.compareData();
      this.updateCancelStatus();
      this.validateAddress();
    },
    editUsername() {
      this.form.username = this.currentdata.username;
      this.isEditUsername = !this.isEditUsername;
      this.compareData();
      this.updateCancelStatus();
      this.validateUsername();
    },
    setDisable() {
      for (var key in this.form) {
        if (this.currentdata[key] != this.form[key]) {
          if (key === "first_name") {
            this.isEditFirstName = false;
          } else if (key === "last_name") {
            this.isEditLastName = false;
          } else if (key === "mobileno") {
            this.isEditMobile = false;
          } else if (key === "email") {
            this.isEditEmail = false;
          } else if (key === "address") {
            this.isEditAddress = false;
          } else if (key === "username") {
            this.isEditUsername = false;
          }
        }
      }
    },
    updateCancelStatus() {
      this.disableCancel =
        !this.isEditFirstName &&
        !this.isEditLastName &&
        !this.isEditMobile &&
        !this.isEditEmail &&
        !this.isEditAddress &&
        !this.isEditUsername;
    },
    cancelEdit() {
      this.isEditFirstName = false;
      this.isEditLastName = false;
      this.isEditMobile = false;
      this.isEditEmail = false;
      this.isEditAddress = false;
      this.isEditUsername = false;
      this.form = { ...this.currentdata };
      this.compareData();
      this.updateCancelStatus();
    },
    validateFirstName() {
      this.validationError.first_name = null;

      for (const rule of this.rules.first_name) {
        const result = rule(this.form.first_name);
        if (result !== true) {
          this.validationError.first_name = result;
          break;
        }
      }
    },
    validateLastName() {
      this.validationError.last_name = null;

      for (const rule of this.rules.last_name) {
        const result = rule(this.form.last_name);
        if (result !== true) {
          this.validationError.last_name = result;
          break;
        }
      }
    },
    validateMobileno() {
      this.validationError.mobileno = null;

      for (const rule of this.rules.mobileno) {
        const result = rule(this.form.mobileno);
        if (result !== true) {
          this.validationError.mobileno = result;
          break;
        }
      }
    },
    validateEmail() {
      this.validationError.email = null;

      for (const rule of this.rules.email) {
        const result = rule(this.form.email);
        if (result !== true) {
          this.validationError.email = result;
          break;
        }
      }
    },
    validateAddress() {
      this.validationError.address = null;

      for (const rule of this.rules.address) {
        const result = rule(this.form.address);
        if (result !== true) {
          this.validationError.address = result;
          break;
        }
      }
    },
    validateUsername() {
      this.validationError.username = null;

      for (const rule of this.rules.username) {
        const result = rule(this.form.username);
        if (result !== true) {
          this.validationError.username = result;
          break;
        }
      }
    },
  },
};
</script>

<style scoped>
.text-field-transparent:deep().v-input__slot {
  background: transparent !important;
  padding: 0 3px !important;
}
</style>
