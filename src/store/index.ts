import { createStore } from "vuex";
import { Vue } from "vue-class-component";
import { auth } from "./AuthModule";

export default createStore({
    // state: {},
    // mutations: {},
    // actions: {},
    modules: { auth },
});
