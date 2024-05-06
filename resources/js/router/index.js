import Vue from "vue";
import routes from "./routes";
import Meta from "vue-meta";
import VueRouter from "vue-router";
import store from "../store";
import checkAuth from "../middleware/check-auth";

Vue.use(Meta);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(checkAuth);

router.beforeEach((to, from, next) => {
    router.app.$nextTick(() => router.app.$loading.start());

    const isAuthenticated = store.state.auth.token;
    const isDirectAccess = store.state.auth.directAccess;

    if (
        to.matched.some((record) => record.meta.requiresAuth) &&
        !isAuthenticated
    ) {
        router.app.$emit("show-global-snackbar", {
            message: "You must log in first to proceed.",
            icon: "mdi-alert-circle",
        });
        next("/login");
    } else if (
        (to.path === "/login" || to.path === "/login/") &&
        isAuthenticated
    ) {
        next({ name: "dashboard" });
    } else if (
        (to.path === "/index" || to.path === "/index/") &&
        isAuthenticated
    ) {
        next({ name: "dashboard" });
    } else if (
        (to.path === "/registerproperty" || to.path === "/registerproperty/") &&
        !isDirectAccess &&
        !isAuthenticated
    ) {
        next("/index");
    } else {
        next();
    }
});

export default router;
