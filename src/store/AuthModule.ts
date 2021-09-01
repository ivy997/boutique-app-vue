import { AuthenticationService } from "@/services/AuthenticationService";

const authService = new AuthenticationService();

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            if (authService.login(user)) {
                commit("loginSuccess", user);
            } else {
                commit("loginFailure");
            }
        },
        logout({ commit }) {
            authService.logout();
            commit("logout");
        },
        register({ commit }, user) {
            try {
                authService.register(user);
                commit("registerSuccess");
            } catch (error) {
                console.log(error);
                commit("registerFailure");
            }
        },
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        },
    },
};
