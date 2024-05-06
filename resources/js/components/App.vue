<template>
  <div style="min-width: 425px">
    <v-app class="custom-background">
      <loading ref="loading" />
      <NavBar />
      <v-main>
        <v-container style="max-width: 1264px">
          <SnackBar />
          <router-view></router-view>
        </v-container>
      </v-main>
      <LoadingOverlay />
      <Ft />
    </v-app>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Ft from "./Footer.vue";
import SnackBar from "./Snackbar.vue";
import Loading from "./Loading.vue";
import LoadingOverlay from "./LoadingOverlay.vue";

export default {
  el: "#app",
  components: {
    NavBar,
    Ft,
    SnackBar,
    Loading,
    LoadingOverlay,
  },

  metaInfo() {
    const { appName } = window.config;

    return {
      title: appName,
      titleTemplate: `%s | ${appName}`,
    };
  },

  mounted() {
    this.$loading = this.$refs.loading;
  },
};
</script>

<style>
html {
  overflow-y: scroll !important;
}

/* Custom Style for Slide Group */
.custom-slide-group {
  display: flex;
  flex-direction: column;
  position: relative;
}

.custom-slide-group .v-slide-group__next {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.v-slide-group__next .v-icon.v-icon:hover,
.v-slide-group__prev .v-icon.v-icon:hover {
  color: #757575;
}

.custom-slide-group .v-slide-group__prev {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  font-size: 30px;
}

.v-slide-group__next .v-icon.v-icon,
.v-slide-group__prev .v-icon.v-icon {
  font-size: 40px;
  color: #616161;
  background: white;
  border-radius: 100%;
}

/* Custom Style for Table */
.v-data-table-header th,
.v-data-table td {
  white-space: nowrap;
}

/* Custom Style for Table Footer */
.v-data-footer__select .v-select {
  margin: 13px 0 13px 15px !important;
}

.v-data-footer__pagination {
  margin: 0 16px 0 16px !important;
}

.v-data-footer__select {
  margin-left: auto !important;
  margin-right: 0px !important;
}

/* Custom Style for Input Field */
.v-input,
.v-label {
  font-size: 14px;
}

.v-text-field > .v-input__control > .v-input__slot {
  padding: 0 12px;
}

.v-input__icon--clear > .v-icon,
.v-input__icon--prepend-inner > .v-icon {
  padding: 0;
  font-size: 18px;
}

/* Custom Style for Dialog */
.v-dialog {
  border-radius: 16px !important;
}
</style>

<style scoped>
.custom-background {
  background-color: #eceff1;
}
</style>
