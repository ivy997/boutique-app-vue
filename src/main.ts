import "reflect-metadata";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";    
import axios from "axios";
import VueAxios from "vue-axios";
import Header from "@/components/Header/index.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import buildDependencyContainer from "./app.container";

library.add(faPhone);
library.add(faEnvelope);
library.add(faSearch);
library.add(faHeart);
library.add(faShoppingCart);
require("@/assets/styles/style.css");

createApp(App)
.use(store)
.use(router)
.use(VueAxios, axios)
.component("my-header", Header)
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app");

buildDependencyContainer();
