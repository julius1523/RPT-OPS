import store from "../store";

export default async (to, from, next) => {
    if (store.getters["auth/isAuthenticated"]) {
        try {
            await store.dispatch("auth/fetchUser");
        } catch (e) {}
    }
    next();
};
