<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="450px" scrollable>
      <v-form fast-fail ref="form" @submit.prevent="payOnline">
        <v-card class="rounded-lg">
          <v-toolbar flat>
            <span class="grey--text text--darken-3 text-h6 font-weight-bold">Pay Online</span>
            <v-spacer></v-spacer>
            <v-btn fab depressed small @click="closeDialog" color="blue-grey lighten-5">
              <v-icon size="27" color="grey darken-2">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider class="my-0"></v-divider>
          <v-card-text class="pa-3" style="height: auto">
            <v-container>
              <v-row dense>
                <v-col cols="12" class="pb-0">
                  <v-text-field v-model="form.soa_no" :rules="isFormSubmitted ? rules.soa_no : []"
                    :dense="$vuetify.breakpoint.smAndDown" required filled clearable label="Soa No."
                    class="mt-2"></v-text-field>
                </v-col>
                <v-col cols="12" class="pb-0">
                  <v-text-field v-model="form.amount" :rules="isFormSubmitted ? rules.amount : []"
                    :dense="$vuetify.breakpoint.smAndDown" required filled clearable label="Amount" class="mt-2"
                    type="number"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-divider class="my-0"></v-divider>
          <div class="d-flex justify-end pa-5" :class="{ 'flex-column': $vuetify.breakpoint.smAndDown }"
            style="gap: 8px">
            <v-btn color="blue-grey lighten-5" depressed @click="closeDialog"
              class="text-capitalize text-subtitle-2 font-weight-bold rounded-lg" large>
              Cancel
            </v-btn>
            <v-btn type="submit" color="primary" depressed @click="isFormSubmitted = true" large
              class="text-capitalize text-subtitle-2 font-weight-bold rounded-lg order-first order-md-last">
              Proceed
            </v-btn>
          </div>
        </v-card>
      </v-form>
    </v-dialog>
    <v-layout row wrap justify-center align-center>
      <v-row>
        <v-col cols="12" sm="6" class="text-center text-sm-left my-auto">
          <v-card-title
            class="grey--text text--darken-3 text-break font-weight-bold text-h5 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h4 px-0">
            Welcome to Real Property Tax Online Payment Service
          </v-card-title>
          <v-card-subtitle class="px-0"> City of Carmona, Cavite </v-card-subtitle>
          <div class="d-flex justify-center justify-sm-start">
            <v-btn :large="$vuetify.breakpoint.lgAndUp" rounded color="teal darken-1" dark depressed @click="requestSOA"
              class="text-capitalize text-subtitle-2 font-weight-bold mr-2"><v-icon left dark> mdi-file-document
              </v-icon> Request SOA</v-btn>
            <v-btn outlined :large="$vuetify.breakpoint.lgAndUp" rounded color="teal darken-1" dark depressed
              @click="openDialog" class="text-capitalize text-subtitle-2 font-weight-bold"><v-icon left dark> mdi-wallet
              </v-icon> Pay Online</v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img contain :width="imgSize" :height="imgSize" src="/img/index_img.svg" class="mx-auto"></v-img>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    form: {
      soa_no: null,
      amount: null,
    },
    rules: {
      soa_no: [
        (v) => !!v || "SOA No. is required",
        (v) =>
          /^[0-9]{2}-[0-9]{4}-[0-9]{5}$/.test(v) ||
          /^[0-9]{3}-[0-9]{2}-[0-9]{4}-[0-9]{3}-[0-9]{2}-[0-9]{4}$/.test(v) ||
          "SOA No. must be valid",
      ],
      amount: [(v) => !!v || "Amount Paid is required"],
    },
    isFormSubmitted: false,
  }),
  metaInfo() {
    return { title: "Home" };
  },
  computed: {
    imgSize() {
      return {
        xl: 550,
        lg: 450,
        md: 350,
        sm: 300,
        xs: 200,
      }[this.$vuetify.breakpoint.name];
    },
  },
  methods: {
    requestSOA() {
      this.$store.commit("auth/SET_DIRECT_ACCESS", true);
      this.$router.push("/registerproperty");
    },
    async payOnline() {
      if (this.$refs.form.validate()) {
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
    openDialog() {
      for (var key in this.form) {
        this.form[key] = null;
      }
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>
