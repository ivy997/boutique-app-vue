import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import("../views/Products/Products.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () =>
      import("../views/Contacts.vue"),
  }
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () =>
  //   import("../views/Login/index.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
