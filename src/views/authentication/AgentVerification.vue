<template>
  <div class="agent-verification">
    <div class="mt-5 w-75 mx-auto">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <p class="c-blue tdn fw-6 ms-auto me-3">Already Registered?</p>
            <router-link to="/login" tag="button" class="btn-yellow w-25 br-50"
              >Sign In</router-link
            >
            <Dropdown class="ms-4">
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
        </div>
      </div>
      <div class="customer-body w-75 mx-auto">
        <h1 class="c-blue fw-6 mt-10">Sign up to NAGIA.</h1>
        <div class="below-dash"></div>
        <b-form class="mt-5 customer-signup-form">
          <BRow>
            <BCol md="12">
              <b-form-group label="NIC Agent Code" label-for="verificationCode">
                <b-form-input
                  id="verificationCode"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <button class="btn-blue btn-block mt-4" @click="verify">Verify Now!</button>
            </BCol>

            <div class="verification-status">
              <div class="isVerified status-badge" v-if="isVerified == 'true'">
                <img src="@/assets/images/check.png" alt="verified" />
                <h2 class="c-blue">Verified</h2>
              </div>
              <div class="notVerified status-badge" v-if="!isVerified == 'false'">
                <img src="@/assets/images/cancel.png" alt="not verified" />
                <h2 class="c-blue">Not Verified</h2>
              </div>
            </div>

            <BCol md="12 mt-4">
              <b-form-checkbox
                id="confrimation"
                name="confrimation"
                value="accepted"
                unchecked-value="not_accepted"
                class="d-flex align-items-baseline"
              >
                Creating an account means you’re okay with our
                <span class="c-red">Terms of Service</span>, <br />
                <span class="c-red">Privacy Policy</span>, and our default
                <span class="c-red">Notification Settings</span>.
              </b-form-checkbox>
            </BCol>
            <BCol md="12 mt-4 ">
              <router-link
                to="/confirmation"
                tag="button"
                class="btn-gradient w-100"
                >Create Account</router-link
              >
            </BCol>
          </BRow>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown";
export default {
  components: { Dropdown },
  data() {
      return {
          isVerified: 'pending'
      }
  },
  methods: {
      verify() {
          this.isVerified = 'true'
      }
  }
};
</script>
<style lang="scss">
.agent-verification {
  .verification-status {
    display: flex;
    justify-content: center;
    min-height: 300px;
    align-items: center;
    .status-badge {
      background: var(--light-grey);
      width: 250px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 25px;
      margin-top: 10px;
      img {
        width: 100px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>