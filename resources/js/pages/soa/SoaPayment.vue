<template>
  <v-container fluid>
    <breadcrumbs :breadcrumbs="pageBreadcrumbs"></breadcrumbs>

    <v-card class="pa-4 mb-4 rounded-xl shadow" v-if="isAuthenticated">
      <v-card-title class="px-0 pt-0 font-weight-bold grey--text text--darken-3"
        >Statement of Accounts</v-card-title
      >

      <template v-if="table0 && table0.data && table0.data.length > 0">
        <v-row dense>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-text-field
              v-model="search0"
              prepend-inner-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              rounded
              filled
              dense
              clearable
            ></v-text-field>
          </v-col>
        </v-row>

        <v-data-table
          :loading="loadTable0"
          :headers="soaHeaders"
          :items="table0.data"
          class="my-4"
          mobile-breakpoint="0"
          :search="search0"
        >
          <template v-slot:[`item.trans_status`]="{ item }">
            <v-chip
              :color="bgColor(item.trans_status)"
              :text-color="txtColor(item.trans_status)"
              pill
              dark
              :small="$vuetify.breakpoint.smAndDown"
            >
              {{ item.trans_status }}
            </v-chip>
          </template>

          <template v-slot:[`item.pin`]="{ item }">
            <div v-for="(pin, index) in item.pin" :key="index">{{ pin }}</div>
          </template>

          <template v-slot:[`item.id`]="{ item }">
            <v-btn
              depressed
              class="text-capitalize rounded-lg"
              outlined
              :small="$vuetify.breakpoint.smAndDown"
              color="red darken-2"
              @click="cancelRequest(item)"
              v-if="item.trans_status === 'Awaiting SOA from Treasury'"
            >
              <v-icon left small>mdi-cancel</v-icon>
              Cancel
            </v-btn>
            <v-menu
              top
              :offset-y="offset"
              v-if="
                item.trans_status === 'SOA Available' ||
                item.trans_status === 'For Upload of Payroll Receipt' ||
                item.trans_status === 'Payment Complete'
              "
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="rounded-lg"
                  depressed
                  outlined
                  :small="$vuetify.breakpoint.smAndDown"
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>
              <v-list dense class="pa-2">
                <v-list-item>
                  <v-list-item-title>View SOA</v-list-item-title>
                </v-list-item>
                <v-list-item v-if="item.trans_status === 'SOA Available'">
                  <v-list-item-title>Pay</v-list-item-title>
                </v-list-item>
                <v-list-item v-if="item.trans_status === 'For Upload of Payroll Receipt'">
                  <v-list-item-title>Upload Receipt(s)</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
      </template>

      <template v-if="table0 && table0.data && table0.data.length === 0">
        <v-img
          contain
          width="100%"
          style="height: clamp(150px, 30vw, 250px)"
          src="/img/no_data_2.svg"
          eager
        ></v-img>
        <v-card-title class="d-flex align-center justify-center text-subtitle-1"
          >No statement of accounts yet</v-card-title
        >
      </template>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  metaInfo() {
    return { title: "SOA and Payment" };
  },

  data() {
    return {
      offset: true,
      pageBreadcrumbs: [
        { text: "Home", to: "/index" },
        { text: "Current Page", to: "/soapayment" },
      ],
      search0: null,
      loadTable0: null,
      table0: [],
      soaHeaders: [
        {
          text: "Transaction No.",
          value: "transno",
          align: "center",
        },
        {
          text: "Status",
          value: "trans_status",
          align: "center",
        },
        {
          text: "PIN",
          value: "pin",
          align: "left",
        },
        {
          text: "Amount Due",
          value: "amount_due",
          align: "right",
        },
        {
          text: "Validity Date",
          value: "due_date",
          align: "left",
        },
        {
          text: "Comments",
          value: "admin_message",
          align: "left",
        },
        {
          text: "Action",
          value: "id",
          align: "center",
          sortable: false,
          filterable: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  created() {
    this.getSoaRequest();
  },
  methods: {
    async getSoaRequest() {
      this.loadTable0 = true;
      await axios
        .get("/api/soa/getSoaRequest")
        .then((result) => {
          this.table0 = result.data;

          this.loadTable0 = false;
        })
        .catch((result) => {});
    },
    async cancelRequest(item) {
      const result = await this.$swal({
        icon: "warning",
        title: "Confirm Cancel",
        html: `Are you sure you want to cancel your request for SOA for this property? <br/><br/> Transaction No.:  ${item.transno}`,
        showCancelButton: true,
        confirmButtonText: "Yes, cancel it",
        cancelButtonText: "No",
        scrollbarPadding: false,
      });

      if (result.value) {
        axios
          .post("/api/soa/cancelRequest", { id: item.id })
          .then((response) => {
            this.$swal({
              icon: response.data.icon,
              title: response.data.title,
              text: response.data.text,
              timer: 3000,
              confirmButtonText: "Ok",
              scrollbarPadding: false,
            });
            this.getSoaRequest();
          })
          .catch((error) => {});
      }
    },
    bgColor(status) {
      return status === "Awaiting SOA from Treasury"
        ? "orange lighten-4"
        : status === "SOA Available"
        ? "blue lighten-4"
        : status === "For Upload of Payroll Receipt"
        ? "yellow lighten-4"
        : status === "Payment Complete"
        ? "green lighten-4"
        : "";
    },
    txtColor(status) {
      return status === "Awaiting SOA from Treasury"
        ? "orange"
        : status === "SOA Available"
        ? "blue"
        : status === "For Upload of Payroll Receipt"
        ? "yellow accent-4"
        : status === "Payment Complete"
        ? "green"
        : "";
    },
  },
};
</script>
