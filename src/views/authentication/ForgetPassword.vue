<template>
  <div class="login-page" id="login-page">
    <div class="pt-5 w-60">
      <div class="d-flex justify-content-between">
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo" />
        </div>
        <Dropdown>
          <router-link to="/complain">
            <li class="c-dropdown-item">
              <i class="fa fa-user c-icon"></i> Complaints
            </li>
          </router-link>

          <router-link
            to=""
            @click.native="sendTo('https://nagia.com.gh/privacy-policy/')"
          >
            <li class="c-dropdown-item">
              <i class="fa fa-user c-icon"></i> Privacy Policy
            </li>
          </router-link>
          <router-link
            to=""
            @click.native="sendTo('https://nagia.com.gh/terms-of-service/')"
          >
            <li class="c-dropdown-item">
              <i class="fa fa-user c-icon"></i> Terms of Services
            </li>
          </router-link>
        </Dropdown>
      </div>
      <div class="login-area">
        <h1 class="login-title c-blue mt-5">Forget Password.</h1>
        <div class="below-dash"></div>
        <b-form class="mt-5">
          <b-form-group
            id="input-group-1"
            label="Your Email:"
            label-for="input-1"
          >
            <b-form-input 
              id="input-1"
              type="email"
              v-model="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>
          <b-button
            class="btn-gradient mt-4"
            :disabled="isDisabled"
            @click="forgetPassword"
            block
            >Forget Password</b-button
          >
        </b-form>

        <div class="new-account-types d-flex justify-content-between mt-10">
          <router-link to="/login" tag="button" class="btn-blue w-50 me-3"
            >Sign</router-link
          >

          <!-- <router-link to="/dashboard" tag="button" class="btn-yellow w-50">Goto Dashboard</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown";
import axios from "axios";
export default {
  name: "ForgetPassword",
  components: { Dropdown },
  data() {
    return {
      password: "",
      email: "",
    };
  },
  methods: {
    sendTo(url) {
      window.open(url,'_blank');
      // window.location.href = url;
    },
    async forgetPassword() {
      const vm = this;
      vm.$store.commit("SET_SPINNER", true);
      await axios
        .post(process.env.VUE_APP_API_URL + "password/email", {
          email: this.email,
        })
        .then((response) => {
          vm.$store.commit("SET_SPINNER", false);
          if (response.data.status == false) {
            vm.$toast.error(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          } else {
            vm.$store.commit("SET_SPINNER", false);
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          }
        })
        .catch((errors) => {
          console.log(errors);
          vm.$store.commit("SET_SPINNER", false);
          if (errors.response)
            this.$toast.error(errors.response.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
        });
    },
  },
  computed: {
    isDisabled: function() {
      return !this.email;
    },
  },
};
</script>
<style lang="scss">
.login-page {
  .logo img {
    width: 150px;
  }
}
</style>
