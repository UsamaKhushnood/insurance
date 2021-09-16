<template >
  <div class="faqs">
    <div class="row">
      <div class="col-md-8">
        <div class="faq-banner mb-5" v-if="getUser.user_type == 'agent'">
          <h1 class="fw-9">Frequently asked questions</h1>
          <div class="border"></div>
          <p class="fw-7">
            Sed quis magna nec augue suscipit venenatis. Pellentesque eu felis
            nisl. Sed diam velit, venenatis sed molestie sit amet, consequat ac
            diam. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Donec lacinia ante eu feugiat
            semper.
          </p>
        </div>
        <div class="faq-banner consumer-banner mb-5" v-else>
          <h1 class="fw-9">Frequently asked questions</h1>
          <div class="border"></div>
          <p class="fw-7">
            Sed quis magna nec augue suscipit venenatis. Pellentesque eu felis
            nisl. Sed diam velit, venenatis sed molestie sit amet, consequat ac
            diam. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Donec lacinia ante eu feugiat
            semper.
          </p>
        </div>
        <div class="faq-section">
          <h4 class="mb-4">Genral Enquiries</h4>

          <div
            class="collapse-container"
            v-for="(faq, fIndex) in faqs"
            :key="fIndex"
          >
            <div class="collapse-btn" v-b-toggle="'collapse' + fIndex">
              {{ faq.question }}
              <b-icon icon="chevron-down"></b-icon>
            </div>
            <b-collapse :id="'collapse' + fIndex" accordion="my-accordion">
              <p class="p-3 pt-0">
                {{ faq.answer }}
              </p>
            </b-collapse>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <HowCanWeHelp class="mb-4" />
        <NagiaContact />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import HowCanWeHelp from "@/components/HowCanWeHelp";
import NagiaContact from "@/components/NagiaContact";
export default {
  components: {
    HowCanWeHelp,
    NagiaContact,
    ...mapGetters(["getToken"]),
  },
  data() {
    return {
      faqs: [
        // {
        //   question: "In conguet condimentum tincidunt?",
        //   answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Lorem ipsum dolor sit amet, ",
        // },
      ],
    };
  },
   computed:{
    ...mapGetters(['getUser'])
  },
  methods: {
    async getFaqs() {
      const vm = this;
      vm.$store
        .dispatch(
          "HTTP_GET_REQUEST",
          this.$store.state.user.user_type + `/faqs`
        )
        .then((response) => {
          console.log("re", response);
          vm.faqs = response.data.data;
        })
        .catch((error) => {
          let errors = error.response.data.errors;
          vm.$toast.error(errors.response.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        });
    },
  },
  mounted() {
    this.getFaqs();
  },
};
</script>
<style lang="scss">
.faqs {
  .faq-banner {
    background: url("../assets/images/faq-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: right;
    padding: 30px;
    min-height: 260px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.consumer-banner {
      background: url("../assets/images/consumer.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
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

  .faq-section {
    background: var(--blue);
    color: #fff;
    padding: 30px;

    .collapse-container {
      margin-bottom: 10px;
      .collapse-btn.collapsed {
        background: #fff;
        color: #000;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-transform: capitalize;
        cursor: pointer;
        transition: 0.5s all ease 0.3s;
        .bi-chevron-down {
          transition: 0.3s all ease;
        }
      }
      .collapse-btn.not-collapsed {
        background: var(--yellow);
        padding: 10px;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-transform: capitalize;
        cursor: pointer;
        transition: 0.3s all ease;
        .bi-chevron-down {
          transform: rotate(180deg);
          transition: 0.3s all ease;
        }
      }

      .collapse {
        background: var(--yellow);
        color: #000 !important;
        display: block !important;
        overflow: hidden;
        max-height: 0px;
        transition: all 0.3s ease-out;
        &.show {
          max-height: 5000px;
          transition: all 0.3s ease-out, color 0s, background-color 0s;
        }
      }
    }
  }
}
</style>