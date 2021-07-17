<template>
  <div class="login-page" id="login-page">
    <div class="pt-5 w-60">
      <div class="d-flex justify-content-between">
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo" />
        </div>
        <Dropdown>
          <li class="c-dropdown-item">
            <i class="fa fa-user c-icon"></i> Complaints
          </li>
          <li class="c-dropdown-item">
            <i class="fa fa-user c-icon"></i> Privacy Policy
          </li>
          <li class="c-dropdown-item">
            <i class="fa fa-user c-icon"></i> Terms of Services
          </li>
        </Dropdown>
      </div>
      <div class="login-area">
        <h1 class="login-title c-blue mt-5">Sign in to NAGIA.</h1>
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
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="Password:"
            label-for="input-2"
            class="mt-4"
          >
            <b-form-input
              id="input-2"
              type="password"
              placeholder="Password"
              required
            ></b-form-input>
          </b-form-group>
          <div class="d-flex justify-content-between mt-4">
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
              class="c-grey pointer"
            >
              Remember Me
            </b-form-checkbox>
            <p class="c-red fw-6 pointer">Forget Password?</p>
          </div>
          <b-button class="btn-gradient mt-4" block>Sign in</b-button>
        </b-form>
        <div class="below-dash mt-6"></div>
        <p class="c-blue fw-6 mt-4 mb-4 f-18">
          New Member ? <span class="c-yellow">Create an Account</span>
        </p>
        <div class="new-account-types d-flex justify-content-between">
          <router-link to="/agent" tag="button" class="btn-blue w-50 me-3">Agent Area</router-link>
          <router-link to="/customer" tag="button" class="btn-yellow w-50">Customer Area</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown";
export default {
  components: { Dropdown },
};
</script>
<style lang="scss">
.login-page {
  .logo img {
    width: 150px;
  }
}
</style>