import axios from "axios";
import Vue from "vue";
import store from "../store";
import router from "../router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

// Request interceptor to set the token in the headers and show loading overlay for POST requests
axios.interceptors.request.use(
    (request) => {
        const token = store.state.auth.token;

        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }

        // Show loading overlay only for POST requests
        if (request.method === "post") {
            store.dispatch("auth/setLoadingOverlay", true);
        }

        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to hide loading overlay for POST requests
axios.interceptors.response.use(
    (response) => {
        // Hide loading overlay only for POST requests
        if (response.config.method === "post") {
            store.dispatch("auth/setLoadingOverlay", false);
        }

        return response;
    },
    (error) => {
        // Hide loading overlay on request error for POST requests
        if (error.config.method === "post") {
            store.dispatch("auth/setLoadingOverlay", false);
        }

        // Handle other error cases as needed
        const { status } = error.response;

        if (status === 401 && store.getters["auth/isAuthenticated"]) {
            Vue.swal({
                icon: "error",
                title: "401 Unauthorized",
                text: "You can't perform this action!",
                timer: 3000,
                confirmButtonText: "Ok",
                scrollbarPadding: false,
            });
            store.dispatch("auth/logout");
            router.push("/login").catch(() => {});
        } else if (status === 429) {
            Vue.swal({
                icon: "error",
                title: "429 Too Many Requests",
                text: "Try again later!",
                timer: 3000,
                confirmButtonText: "Ok",
                scrollbarPadding: false,
            });
        } else if (status === 500) {
            Vue.swal({
                icon: "error",
                title: "500 Internal Server Error:",
                text: "There is a problem in the server!",
                timer: 3000,
                confirmButtonText: "Ok",
                scrollbarPadding: false,
            });
        }

        return Promise.reject(error);
    }
);

// Export axios instance
export default axios;
