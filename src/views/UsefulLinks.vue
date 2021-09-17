<template >
  <div class="dashboard">
    <div class="row">
      <div class="col-md-8">
        <div class="dashboard-body box-shadow bg-white p-5">
          <h4 class="text-center c-dark-grey mb-3">Useful Links</h4>
          <div class="links-contaier">
            <div class="link">
              <div class="png">
                <img src="@/assets/images/home.png" class="link-icon" />
              </div>
              <div class="linkTitle">
                <router-link
                  to="#"
                  @click.native="redirectUrl('https://nagia.com.gh/')"
                  >NAGIA Home</router-link
                >
              </div>
            </div>
            <div class="link">
              <div class="png">
                <img src="@/assets/images/learn.png" class="link-icon" />
              </div>
              <div class="linkTitle">
                <router-link
                  to="#"
                  @click.native="redirectUrl('https://learn.nagia.com.gh/')"
                  >Learn At NAGIA</router-link
                >
              </div>
            </div>
            <div class="link">
              <div class="png">
                <img src="@/assets/images/news.png" class="link-icon" />
              </div>
              <div class="linkTitle">
                <router-link
                  to="#"
                  @click.native="redirectUrl('https://nagia.com.gh/news-room/')"
                  >News &amp; Media
                </router-link>
              </div>
            </div>
            <div class="link">
              <div class="png">
                <img src="@/assets/images/whatwedo.png" class="link-icon" />
              </div>
              <div class="linkTitle">
                <router-link
                  to="#"
                  @click.native="
                    redirectUrl('https://nagia.com.gh/our-services/')
                  "
                  >What We Do
                </router-link>
              </div>
            </div>
            <div class="link">
              <div class="png">
                <img src="@/assets/images/onlinestore.png" class="link-icon" />
              </div>
              <div class="linkTitle">
                <router-link
                  to="#"
                  @click.native="redirectUrl('https://nagia.com.gh/shop/')"
                  >Online Store</router-link
                >
              </div>
            </div>
            <div class="link">
              <div class="png">
                <img src="@/assets/images/career.png" class="link-icon" />
              </div>
              <div class="linkTitle">
                <router-link
                  to="#"
                  @click.native="redirectUrl('https://nagia.com.gh/careers/')"
                  >Careers</router-link
                >
              </div>
            </div>
            <div class="link">
              <div class="png">
                <img src="@/assets/images/gallary.png" class="link-icon" />
              </div>
              <div class="linkTitle">
                <router-link
                  to="#"
                  @click.native="
                    redirectUrl('https://nagia.com.gh/portfolio-grid/')
                  "
                  >Gallary</router-link
                >
              </div>
            </div>
            <div class="link">
              <div class="png">
                <img src="@/assets/images/locationicon.png" class="link-icon" />
              </div>
              <div class="linkTitle">
                <router-link
                  to="#"
                  @click.native="
                    redirectUrl('https://nagia.com.gh/portfolio-grid/')
                  "
                  >Location</router-link
                >
              </div>
            </div>
            <div class="link">
              <div class="png">
                <img src="@/assets/images/legal.png" class="link-icon" />
              </div>
              <div class="linkTitle">
                <router-link
                  to="#"
                  @click.native="
                    redirectUrl('https://nagia.com.gh/portfolio-grid/')
                  "
                  >Legal</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <UpcomingEvent class="mb-4" v-if="getUser.user_type == 'agent'" />
        <HowCanWeHelp class="mb-4" v-else />
        <NagiaContact class="mb-4" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import NagiaContact from "@/components/NagiaContact";
import UpcomingEvent from "@/components/events/UpcomingEvent.vue";
import HowCanWeHelp from "@/components/HowCanWeHelp.vue";
export default {
  components: {
    UpcomingEvent,
    NagiaContact,
    HowCanWeHelp,
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  data() {
    return {
      icons: require("../assets/svg/dashboard.svg"),
      selfServe: [
        {
          title: "Blog & Media",
          desc: "Access",
          c1: "rgba(156,86,254,1)",
          c2: "rgba(247,85,235,1)",
          icon: "blog",
          link: "https://nagia.com.gh/news-room/",
        },
        {
          title: "FAQ",
          desc: "Access",
          c1: "rgba(240,245,93,1)",
          c2: "rgba(51,228,139,1)",
          icon: "faq",
          link: "faqs",
        },
        {
          title: "I.D Card",
          desc: "Access",
          c1: "rgba(240,245,93,1)",
          c2: "rgba(249,108,214,1)",
          icon: "id",
          link: "id",
        },
        {
          title: "Terms of Services",
          desc: "Access",
          c1: " rgba(156,86,254,1)",
          c2: "rgba(88,200,242,1)",
          icon: "terms",
          link: "message",
        },
        {
          title: "Refrence Library",
          desc: "Access",
          c1: "rgba(228,107,215,1)",
          c2: "rgba(253,96,175,1)",
          icon: "refrence",
          link: "faqs",
        },
        {
          title: "useful link",
          desc: "Access",
          c1: "rgba(0,24,238,1)",
          c2: "rgba(26,223,254,1)",
          icon: "link",
          link: "faqs",
        },
      ],
      support: [
        {
          title: "Complaints",
          desc: "Access",
          c1: "rgba(156,86,254,1)",
          c2: "rgba(225,108,219,1)",
          icon: "message2",
          link: "/blog",
        },
        {
          title: "verify an agent",
          desc: "Access",
          c1: "rgba(244,135,99,1)",
          c2: "rgba(252,160,64,1)",
          icon: "user",
          link: "/blog",
        },
        {
          title: "support",
          desc: "Access",
          c1: "rgba(36,191,182,1)",
          c2: "rgba(65,229,149,1)",
          icon: "support",
          link: "/blog",
        },
      ],
    };
  },
  methods: {
    redirectUrl(url) {
      // http://localhost:8080/
      let newUrl = url.slice(0, 23);
      if (newUrl) window.location.href = newUrl;
    },
  },
};
</script>