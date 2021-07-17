import Vue from "vue";
import VueRouter from "vue-router";
import TheContainer from "@/components/main/TheContainer";
import Dashboard from "@/Dashboard";
import Authentication from "@/views/Authentication";
import Login from "@/views/authentication/Login";
import AgentSignup from "@/views/authentication/AgentSignup";
import CustomerSignup from "@/views/authentication/CustomerSignup";
import Confirmation from "@/views/authentication/Confirmation";
import AgentVerification from "@/views/authentication/AgentVerification";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    component: TheContainer,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "Home",
        component: Dashboard,
      },
    ],
  },
  {
    path: "/",
    name: "Authentication",
    redirect: "/login",
    component: Authentication,
    children: [
      {
        path: "login",
        name: "Login",
        // using named routes
        components: {
          authentication: Login,
        },
      },
      {
        path: "agent",
        name: "Agent Area",
        // using named routes
        components: {
          authentication: AgentSignup,
        },
      },
      {
        path: "customer",
        name: "Customer Area",
        // using named routes
        components: {
          authentication: CustomerSignup,
        },
      },
      {
        path: "confirmation",
        name: "Confirmation",
        components: {
          authentication: Confirmation,
        },
      },
      {
        path: "agent-verification",
        name: "Agent Verification",
        components: {
          authentication: AgentVerification,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
