import Vue from "vue";
import VueRouter from "vue-router";
import TheContainer from "@/components/main/TheContainer";
import Authentication from "@/views/Authentication";
import PageNotFound from "@/views/PageNotFound";
import Login from "@/views/authentication/Login";
import AgentSignup from "@/views/authentication/AgentSignup";
import CustomerSignup from "@/views/authentication/CustomerSignup";
import Confirmation from "@/views/authentication/Confirmation";
import AgentVerification from "@/views/authentication/AgentVerification";
import Dashboard from "@/Dashboard";

import AccountDetails from "@/views/account-details/AccountDetails";
import EditProfile from "@/views/account-details/EditProfile";
import Notification from "@/views/account-details/Notification";
import Billing from "@/views/account-details/Billing";
import Security from "@/views/account-details/Security";


import Licence from "@/views/Licence";
import Support from "@/views/Support";
import Faq from "@/views/Faq";
import VerifyAnAgent from "@/views/VerifyAnAgent";
import Complaints from "@/views/Complaints";
import Forum from "@/views/forum/Forum";
import ExploreTopic from "@/views/forum/ExploreTopic";
import MyTopics from "@/views/forum/MyTopics";
import StartNewTopic from "@/views/forum/StartNewTopic";
import Events from "@/views/events/Events";
import AllEvents from "@/views/events/AllEvents";
import EventDetails from "@/views/events/EventDetails";
import MyEvents from "@/views/events/MyEvents";
import Meetings from "@/views/events/Meetings";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Page Not Found",
    component: PageNotFound,
  },
  {
    path: "/dashboard",
    component: TheContainer,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/account-details",
        name: "Account Details",
        component: AccountDetails,
        redirect: '/account-details/edit-profile',
        children: [
          {
            path: 'edit-profile',
            name: 'Edit Profile',
            components: {
              accountdetails: EditProfile
            }
          },
          {
            path: 'notification',
            name: 'Notification',
            components: {
              accountdetails: Notification
            }
          },
          {
            path: 'billing',
            name: 'Billing',
            components: {
              accountdetails: Billing
            }
          },
          {
            path: 'security',
            name: 'Security',
            components: {
              accountdetails: Security
            }
          },
        ]
      },
      {
        path: "/licence",
        name: "Licence",
        component: Licence,
      },
      {
        path: "/support",
        name: "Support",
        component: Support,
      },
      {
        path: "/faqs",
        name: "FAQ's",
        component: Faq,
      },
      {
        path: "/verify-an-angent",
        name: "Verify An Agent",
        component: VerifyAnAgent,
      },
      {
        path: "/complaints",
        name: "Complaints",
        component: Complaints,
      },
      {
        path: "/forum",
        name: "Forum",
        component: Forum,
        redirect: '/forum/explore-topics',
        children: [
          {
            path: "explore-topics",
            name: "Explore Topic",
            components: {
              forum: ExploreTopic,
            },
          },
          {
            path: "my-topics",
            name: "My Topics",
            components: {
              forum: MyTopics,
            },
          },
          {
            path: "start-new-topic",
            name: "Start New Topic",
            components: {
              forum: StartNewTopic,
            },
          },
        ],
      },
      {
        path: "/event-management",
        name: "Event Management",
        component: Events,
        redirect: '/event-management/all-events',
        children: [
          {
            path: "all-events",
            name: "All Events",
            components: {
              events: AllEvents,
            },
          },
          {
            path: "event-details/:id",
            name: "Event Details",
            components: {events: EventDetails}
          },
          {
            path: "my-events",
            name: "My Events",
            components: {
              events: MyEvents,
            },
          },
          {
            path: "meetings",
            name: "Meetings",
            components: {
              events: Meetings,
            },
          },
        ],
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
