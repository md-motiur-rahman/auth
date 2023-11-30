import HomeCom from "./components/HomeCom.vue";
import SignUp from "./components/SignUp.vue";
import LoginCom from "./components/LoginCom.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomeCom,
    name: "HomeCom",
  },
  {
    path: "/signup",
    component: SignUp,
    name: "SignUp",
  },
  {
    path: "/login",
    component: LoginCom,
    name: "LoginCom",
  }
];

const roiuter = createRouter({
  history: createWebHistory(),
  routes,
});

export default roiuter;
