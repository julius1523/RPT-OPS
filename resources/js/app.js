import "vuetify/dist/vuetify.min.css";
import Vue from "vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import App from "./components/App.vue";
import Vuetify from "vuetify";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import "./plugins/axios.js";

Vue.component("breadcrumbs", Breadcrumbs);
Vue.use(VueSweetalert2);
Vue.use(Vuetify);

new Vue({
    el: "#app",
    vuetify,
    store,
    router,
    ...App,
});
