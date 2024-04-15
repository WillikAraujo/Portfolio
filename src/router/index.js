import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../router/HomePage.vue";
import HabilidadesPage from "./HabilidadesPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/habilidades",
    name: "habilidades",
    component: HabilidadesPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
