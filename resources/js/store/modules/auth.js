import axios from "axios";
import Cookies from "js-cookie";
import * as types from "../mutation-types";

export const state = {
    token: Cookies.get("token") || null,
    user: null,
    directAccess: false,
    loadingOverlay: false,
};

export const mutations = {
    [types.SET_TOKEN](state, token) {
        state.token = token;
        Cookies.set("token", token);
    },
    [types.CLEAR_TOKEN](state) {
        state.token = null;
        state.user = null;
        Cookies.remove("token");
    },
    [types.SET_DIRECT_ACCESS](state, value) {
        state.directAccess = value;
    },
    [types.FETCH_USER_SUCCESS](state, { user }) {
        state.user = user;
    },
    [types.FETCH_USER_FAILURE](state) {
        state.token = null;
        Cookies.remove("token");
    },
    [types.UPDATE_USER](state, value) {
        state.user = value;
    },
    [types.SET_LOADING_OVERLAY](state, value) {
        state.loadingOverlay = value;
    },
};

export const actions = {
    login({ commit }, token) {
        commit(types.SET_TOKEN, token);
    },
    logout({ commit }) {
        commit(types.CLEAR_TOKEN);
    },

    setLoadingOverlay({ commit }, value) {
        commit(types.SET_LOADING_OVERLAY, value);
    },

    async fetchUser({ commit, dispatch }) {
        try {
            const result = await axios.get("/api/user/user");
            if (result.data) {
                dispatch('updateUser', result.data);
                commit(types.FETCH_USER_SUCCESS, { user: result.data });
            } else {
                commit(types.FETCH_USER_FAILURE);
            }
        } catch (error) {
            commit(types.FETCH_USER_FAILURE);
        }
    },

    updateUser({ commit }, value) {
        commit(types.UPDATE_USER, value);
    },
};

export const getters = {
    directAccess: (state) => state.directAccess,
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    isLoadingOverlay: (state) => state.loadingOverlay,
};
