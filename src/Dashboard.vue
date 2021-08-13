<template >
  <div class="dashboard">
    <div class="row">
      <div class="col-md-8">
        <div class="dashboard-banner mb-5">
          <h1 class="fw-9">Welcome, Agent!</h1>
          <div class="border"></div>
          <p class="fw-7">
            Sed quis magna nec augue suscipit venenatis. Pellentesque eu felis
            nisl. Sed diam velit, venenatis sed molestie sit amet, consequat ac
            diam. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Donec lacinia ante eu feugiat
            semper.
          </p>
        </div>
        <div class="dashboard-body box-shadow bg-white p-3">
          <h4 class="c-dark-grey mb-3">General Services &amp; Features</h4>
          <div class="general-links">
            <router-link
              to="/event-management"
              tag="div"
              class="option pointer"
            >
              <div class="option-icon">
                <img src="@/assets/svg/dashboard/events.svg" />
              </div>
              <h6 class="c-dark-grey option-name">Events</h6>
            </router-link>
            <router-link to="/licence" tag="div" class="option pointer">
              <div class="option-icon">
                <img src="@/assets/svg/dashboard/licence.svg" />
              </div>
              <h6 class="c-dark-grey option-name">Licence</h6>
            </router-link>
            <router-link to="/forum" tag="div" class="option pointer">
              <div class="option-icon">
                <img src="@/assets/svg/dashboard/forum.svg" />
              </div>
              <h6 class="c-dark-grey option-name">Forum</h6>
            </router-link>
            <router-link
              to="/event-management/all-events"
              tag="div"
              class="option pointer"
            >
              <div class="option-icon">
                <img src="@/assets/svg/dashboard/learn.svg" />
              </div>
              <h6 class="c-dark-grey option-name">Learn at NAGIA</h6>
            </router-link>
            <router-link to="/messaging" tag="div" class="option pointer">
              <div class="option-icon">
                <img src="@/assets/svg/dashboard/chat.svg" />
              </div>
              <h6 class="c-dark-grey option-name">Chat</h6>
            </router-link>
          </div>

          <!-- self serve resources -->
          <h4 class="c-dark-grey mb-3 mt-5">Self-Serve Resources</h4>
          <div class="general-links self-resources">
            <router-link
              :to="'/' + x.link"
              tag="div"
              class="option pointer"
              v-for="(x, xIndex) in selfServe"
              :key="xIndex"
            >
              <div
                class="option-icon"
                :style="{
                  background:
                    'linear-gradient(202deg, ' +
                    x.c1 +
                    ' 0%, ' +
                    x.c2 +
                    '100%)',
                }"
              >
                <svg>
                  <use :xlink:href="icons + '#' + x.icon"></use>
                </svg>
              </div>
              <div class="titles">
                <h5 class="c-dark-grey option-name">{{ x.title }}</h5>
                <h6 class="c-grey option-name">{{ x.desc }}</h6>
              </div>
            </router-link>
          </div>

          <h4 class="c-dark-grey mb-3 mt-5">Personalized Support</h4>
          <div class="general-links self-resources">
            <router-link
              :to="'/' + x.link"
              tag="div"
              class="option pointer"
              v-for="(x, xIndex) in support"
              :key="xIndex"
            >
              <div
                class="option-icon"
                :style="{
                  background:
                    'linear-gradient(202deg, ' +
                    x.c1 +
                    ' 0%, ' +
                    x.c2 +
                    '100%)',
                }"
              >
                <svg>
                  <use :xlink:href="icons + '#' + x.icon"></use>
                </svg>
              </div>
              <div class="titles">
                <h5 class="c-dark-grey option-name">{{ x.title }}</h5>
                <h6 class="c-grey option-name">{{ x.desc }}</h6>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <UpcomingEvent class="mb-4" />
        <NagiaContact class="mb-4" />
      </div>
    </div>
  </div>
</template>
<script>
import NagiaContact from "@/components/NagiaContact";
import UpcomingEvent from "@/components/events/UpcomingEvent.vue";
export default {
  components: {
    UpcomingEvent,
    NagiaContact,
  },
  data() {
    return {
      icons: require("./assets/svg/dashboard.svg"),
      selfServe: [
        {
          title: "Blog & Media",
          desc: "Access",
          c1: "rgba(156,86,254,1)",
          c2: "rgba(247,85,235,1)",
          icon: "blog",
          link: "/blog",
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
};
</script>
<style lang="scss">
.dashboard {
  .dashboard-banner {
    background: url("./assets/images/faq-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: right;
    padding: 30px;
    min-height: 260px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      color: #fff;
    }
    .border {
      width: 100px;
      border: 2px solid #fff !important;
      margin-bottom: 12px;
    }
    p {
      color: var(--blue);
      max-width: 600px;
    }
  }

  .general-links {
    display: grid;
    padding: 0 20px;
    padding-top: 15px;
    grid-template-columns: repeat(5, 1fr);
    .option {
      display: flex;
      flex-direction: column;
      align-items: center;
      .option-icon {
        background: #fff;
        box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(45deg);
        border-radius: 10px;
        margin-bottom: 20px;
        svg {
          width: 30px;
          height: 30px;
          transform: rotate(315deg);
        }
        img {
          width: 40px;
          height: 40px;
          transform: rotate(315deg);
        }
        .option-name {
          text-transform: capitalize;
        }
      }
    }
  }

  .self-resources {
    display: grid;
    padding: 0 20px;
    padding-top: 15px;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    .option {
      display: flex;
      flex-direction: row;
      align-items: center;
      .option-icon {
        box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
        min-width: 70px;
        min-height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(45deg);
        border-radius: 10px;
        margin-bottom: 20px;
        svg {
          width: 30px;
          height: 30px;
          transform: rotate(315deg);
        }
        img {
          width: 40px;
          height: 40px;
          transform: rotate(315deg);
        }
      }
      .titles {
        margin-left: 30px;
        .option-name {
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>