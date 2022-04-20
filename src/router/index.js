import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Landing from "../views/Landing.vue";
import Questionnaire from "../views/Questionnaire.vue";
import Recommendations from "../views/Recommendations.vue";
import Garden from "../views/Garden.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/questions/set:setId/:questionId",
    name: "Questionnaire",
    component: Questionnaire,
  },
  {
    path: "/recommendations",
    name: "Recommendations",
    component: Recommendations,
  },
  {
    path: "/garden",
    name: "Garden",
    component: Garden,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
