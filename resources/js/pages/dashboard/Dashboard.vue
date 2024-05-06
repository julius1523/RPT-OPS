<template>
  <v-container fluid>
    <v-card-title class="px-0 pt-0 font-weight-bold grey--text text--darken-3"
      >Dashboard</v-card-title
    >
    <v-row dense>
      <v-col cols="4">
        <v-sheet class="rounded-xl shadow">
          <v-row dense class="p-2">
            <v-col cols="12" md="4" class="my-auto text-center">
              <v-icon color="success" style="font-size: clamp(35px, 6vw, 80px)" right>
                mdi-cash-multiple
              </v-icon>
            </v-col>
            <v-col
              cols="12"
              md="8"
              class="my-auto text-nowrap text-truncate"
              :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
            >
              <span class="text-caption text-sm-subtitle-1 text-muted">Total Payment</span
              ><br />
              <span class="font-weight-bold text-body-2 text-sm-h6 text-success">
                ₱{{ total_payment.toFixed(2) }}
              </span>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>

      <v-col cols="4">
        <v-sheet class="rounded-xl shadow">
          <v-row dense class="p-2">
            <v-col cols="12" md="4" class="my-auto text-center">
              <v-icon color="primary" style="font-size: clamp(35px, 6vw, 80px)" right>
                mdi-home-city
              </v-icon>
            </v-col>
            <v-col
              cols="12"
              md="8"
              class="my-auto text-nowrap text-truncate"
              :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
            >
              <span class="text-caption text-sm-subtitle-1 text-muted"
                >Total Properties</span
              ><br />
              <span class="font-weight-bold text-body-2 text-sm-h6 text-primary">
                {{ total_property }}
              </span>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>

      <v-col cols="4">
        <v-sheet class="rounded-xl shadow">
          <v-row dense class="p-2">
            <v-col cols="12" md="4" class="my-auto text-center">
              <v-icon color="danger" style="font-size: clamp(35px, 6vw, 80px)" right>
                mdi-home-group-remove
              </v-icon>
            </v-col>
            <v-col
              cols="12"
              md="8"
              class="my-auto text-nowrap text-truncate"
              :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
            >
              <span class="text-caption text-sm-subtitle-1 text-muted"
                >Total Delinquent Properties</span
              ><br />
              <span class="font-weight-bold text-body-2 text-sm-h6 text-danger">
                {{ total_delinquent }}
              </span>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>

    <v-card class="pa-4 mt-4 rounded-xl shadow">
      <v-card-title
        class="p-0 font-weight-bold grey--text text--darken-3 text-subtitle-1"
      >
        Payment Transactions
      </v-card-title>

      <template v-if="table && table.data && table.data.length > 0">
        <v-row dense class="mt-4">
          <v-col cols="6" sm="3" md="3" lg="2">
            <v-dialog
              ref="dialog1"
              v-model="modal1"
              :return-value.sync="date1"
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date1"
                  class="customFS dt rounded-lg"
                  label="From"
                  dense
                  prepend-inner-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  readonly
                  hide-details
                  rounded
                  filled
                  single-line
                  prefix="From:"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date1" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal1 = false"> Cancel </v-btn>
                <v-btn text color="primary" @click="$refs.dialog1.save(date1)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="6" sm="3" md="3" lg="2">
            <v-dialog
              ref="dialog2"
              v-model="modal2"
              :return-value.sync="date2"
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date2"
                  class="customFS dt rounded-lg"
                  label="Date To"
                  dense
                  prepend-inner-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  readonly
                  hide-details
                  rounded
                  filled
                  single-line
                  prefix="To:"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date2" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
                <v-btn text color="primary" @click="$refs.dialog2.save(date2)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              class="customFS"
              v-model="search"
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
          id="paymenttransact"
          :headers="paymentHeaders"
          :items="table.data"
          class="my-4"
        ></v-data-table>
      </template>

      <template v-else>
        <v-img
          contain
          width="100%"
          style="height: clamp(150px, 30vw, 250px)"
          src="/img/no_data_2.svg"
          eager
        ></v-img>
        <v-card-title class="d-flex align-center justify-center text-subtitle-1"
          >No payment transactions yet</v-card-title
        >
      </template>
    </v-card>
  </v-container>
</template>

<script>
export default {
  metaInfo() {
    return { title: "Dashboard" };
  },
  data() {
    return {
      //Date From
      date1: new Date(new Date().setDate(1)).toISOString().substr(0, 10),
      menu1: false,
      modal1: false,

      //Date To
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
      modal2: false,

      search: null,

      total_payment: 0,
      total_property: 0,
      total_delinquent: 0,

      table: [],
      paymentHeaders: [
        {
          text: "Date Paid",
          value: "",
          align: "center",
          width: "",
        },
        {
          text: "Reference No.",
          value: "",
          align: "left",
          width: "",
        },
        {
          text: "SOA No.",
          value: "",
          align: "left",
          width: "",
        },
        {
          text: "Status",
          value: "",
          align: "center",
          width: "",
          sortable: false,
        },
      ],
    };
  },
};
</script>
