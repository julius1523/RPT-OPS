<template>
  <div>
    <!-- Navigation Header -->
    <v-app-bar flat app class="white v-bar--underline" clipped-left>
      <v-app-bar-nav-icon
        v-if="
          (showDrawer && $vuetify.breakpoint.mdAndDown) ||
          (isAuthenticated && $vuetify.breakpoint.mdAndDown)
        "
        @click="showSidebar"
      ></v-app-bar-nav-icon>
      <router-link
        :to="getLink()"
        style="display: flex; align-items: center; text-decoration: none"
        :class="{ 'ml-2': $vuetify.breakpoint.mdAndDown }"
      >
        <v-list-item-avatar class="my-0">
          <v-img src="/img/carmona_logo_wbg.jpg"></v-img>
        </v-list-item-avatar>
        <v-app-bar-title
          v-if="$vuetify.breakpoint.smAndUp"
          class="text-body-2 text-sm-body-2 text-md-subtitle-1 text-lg-subtitle-1 text-xl-subtitle-1 font-weight-bold grey--text text--darken-3 text-uppercase text-center"
          >RPT Collection Online Services</v-app-bar-title
        >
      </router-link>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-menu left offset-y rounded="b-xl">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-on="on"
              text
              color="grey darken-1"
              depressed
              class="text-capitalize rounded-lg"
              :class="{ 'mr-2': isAuthenticated }"
              >Support<v-icon v-if="$vuetify.breakpoint.mdAndUp" size="15"
                >mdi-chevron-down</v-icon
              ></v-btn
            >
          </template>
          <v-list nav dense>
            <v-list-item>
              <v-list-item-title>User's Manual</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Help</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>About Us</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y v-if="isAuthenticated" max-width="290px" rounded="lg">
          <template v-slot:activator="{ on }">
            <v-btn icon large v-on="on">
              <v-avatar color="primary" size="45"
                ><span class="white--text text-h6">{{
                  getUser ? getUser.initials : null
                }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card class="pa-2 rounded-lg">
            <v-list dense nav>
              <v-card outlined class="shadow-sm rounded-lg">
                <v-list-item @click="account">
                  <v-list-item-avatar size="50" color="primary" class="mr-3">
                    <span class="white--text text-h5">{{
                      getUser ? getUser.initials : null
                    }}</span>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold text-subtitle-1"
                      >{{ getUser ? getUser.first_name : null }}
                      {{ getUser ? getUser.last_name : null }}</v-list-item-title
                    >
                    <v-list-item-subtitle>
                      {{ getUser ? getUser.email : null }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
              <v-divider class="my-3"></v-divider>
              <v-list-item @click="changepass" class="py-1">
                <v-list-item-icon class="mr-3">
                  <v-icon size="19">mdi-key-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold"
                    >Change Password</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="logout" class="py-1">
                <v-list-item-icon class="mr-3">
                  <v-icon size="22">mdi-logout-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">Sign Out</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <v-btn
          color="primary"
          style="text-decoration: none"
          depressed
          v-if="!isAuthenticated && hideSignIn"
          :to="{ name: 'login' }"
          class="text-capitalize ml-2 rounded-lg"
          min-width="0px"
          ><span v-if="$vuetify.breakpoint.smAndUp">Sign In</span
          ><v-icon v-if="$vuetify.breakpoint.xsOnly" :right="$vuetify.breakpoint.smAndUp"
            >mdi-login</v-icon
          ></v-btn
        >
      </div>
    </v-app-bar>

    <v-navigation-drawer
      height="100%"
      v-model="drawer"
      v-if="showDrawer || isAuthenticated"
      app
      flat
      :clipped="$vuetify.breakpoint.mdAndUp"
    >
      <v-list expand nav dense>
        <v-list-item
          color="primary"
          class="mb-1"
          :to="{ name: 'dashboard' }"
          ref="dashboard"
        >
          <v-list-item-icon>
            <v-icon>{{
              isActive("dashboard") ? "mdi-view-dashboard" : "mdi-view-dashboard-outline"
            }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="font-weight-bold">Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-group
          class="mb-1"
          no-action
          append-icon="mdi-menu-down"
          :value="['registerproperty', 'listofproperty'].includes($route.name)"
          eager
          ref="propertyrecords"
        >
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>{{
                isActive("propertyrecords")
                  ? "mdi-file-document-multiple"
                  : "mdi-file-document-multiple-outline"
              }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold"
              >Property Records</v-list-item-title
            >
          </template>

          <v-list-item :to="{ name: 'registerproperty' }" exact>
            <v-list-item-title class="font-weight-bold"
              >Register Property</v-list-item-title
            >
          </v-list-item>
          <v-list-item :to="{ name: 'listofproperty' }" exact>
            <v-list-item-title class="font-weight-bold"
              >List of Property</v-list-item-title
            >
          </v-list-item>
        </v-list-group>

        <v-list-group
          class="mb-1"
          no-action
          append-icon="mdi-menu-down"
          :value="['soapayment'].includes($route.name)"
          eager
          ref="soapayment"
        >
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>{{
                isActive("soapayment") ? "mdi-invoice-list" : "mdi-invoice-list-outline"
              }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold"
              >SOA and Payments</v-list-item-title
            >
          </template>

          <v-list-item :to="{ name: 'soapayment' }" exact>
            <v-list-item-title class="font-weight-bold"
              >Statement of Accounts</v-list-item-title
            >
          </v-list-item>
        </v-list-group>

        <v-list-item
          color="primary"
          :to="{ name: 'taxdecnum' }"
          class="mb-1"
          ref="taxdecnum"
        >
          <v-list-item-icon>
            <v-icon>{{
              isActive("taxdecnum") ? "mdi-file-document" : "mdi-file-document-outline"
            }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="font-weight-bold"
            >Tax Dec. Number</v-list-item-title
          ></v-list-item
        >
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    drawer: null,
  }),
  computed: {
    ...mapGetters("auth", ["isAuthenticated", "getUser"]),
    user() {
      return this.$store.getters.getUser;
    },
    hideSignIn() {
      const hiddenRoutes = ["login", "signup"];
      return !hiddenRoutes.includes(this.$route.name);
    },
    showDrawer() {
      return this.$route.meta.showDrawer === true;
    },
  },
  methods: {
    isActive(type) {
      switch (type) {
        case "dashboard":
          if (this.$refs.dashboard) {
            return this.$refs.dashboard.isActive;
          }
          return false;
        case "propertyrecords":
          if (this.$refs.propertyrecords) {
            return this.$refs.propertyrecords.isActive;
          }
          return false;
        case "soapayment":
          if (this.$refs.soapayment) {
            return this.$refs.soapayment.isActive;
          }
          return false;
        case "taxdecnum":
          if (this.$refs.taxdecnum) {
            return this.$refs.taxdecnum.isActive;
          }
          return false;
        default:
          break;
      }
    },
    showSidebar() {
      this.drawer = !this.drawer;
    },
    account() {
      const currentPath = this.$router.currentRoute.path;
      if (currentPath !== "/accountinfo") {
        this.$router.push("/accountinfo");
      }
    },
    changepass() {
      const currentPath = this.$router.currentRoute.path;
      if (currentPath !== "/changepassword") {
        this.$router.push("/changepassword");
      }
    },
    async logout() {
      this.$swal({
        icon: "warning",
        title: "Are you sure?",
        text: "You will be signed out from the system!",
        showCancelButton: true,
        timer: 3000,
        confirmButtonText: "Yes, sign me out!",
        cancelButtonText: "Cancel",
        scrollbarPadding: false,
      }).then((result) => {
        if (result.value) {
          axios
            .post("/api/logout")
            .then(() => {
              this.$store.dispatch("auth/logout");
              this.$router.push("/login");
            })
            .catch((error) => {});
        }
      });
    },
    getLink() {
      return this.isAuthenticated ? { name: "dashboard" } : { name: "index" };
    },
  },
};
</script>

<style scoped>
.v-bar--underline {
  border-bottom-color: rgba(0, 0, 0, 0.12) !important;
}

.v-bar--underline {
  border-width: 0 0 thin;
  border-style: solid;
}

.v-app-bar-title__content {
  width: auto;
}

.v-list-item {
  text-decoration: none;
}
</style>
