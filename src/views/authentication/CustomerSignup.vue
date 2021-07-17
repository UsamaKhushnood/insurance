<template>
  <div class="customer-area">
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
      <div class="customer-body">
      <h1 class="c-blue fw-6 mt-10">Sign up to NAGIA.</h1>
      <div class="below-dash"></div>
        <b-form class="mt-5 customer-signup-form">
          <BRow>
            <BCol md="6">
              <b-form-group label="First Name" label-for="FirstName">
                <b-form-input
                  id="FirstName"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Middle Name" label-for="MiddleName">
                <b-form-input
                  id="MiddleName"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Last Nameu" label-for="LastName">
                <b-form-input id="LastName" type="text" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Gender" label-for="Gender">
                <b-form-input id="Gender" type="text" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="PhoneNo" label-for="PhoneNo">
                <b-form-input
                  id="PhoneNo"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Location" label-for="Location">
                <b-form-input id="Location" type="text" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Region" label-for="Region">
                <b-form-input id="Region" type="text" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="District" label-for="District">
                <b-form-input id="District" type="text" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Email" label-for="Email">
                <b-form-input
                  id="Email"
                  type="email"
                  placeholder="dummy@example.com"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Password" label-for="password">
                <b-form-input
                  id="password"
                  type="password"
                  placeholder="7+ characters"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="12 mt-4">
              <b-form-checkbox
                id="confrimation"
                name="confrimation"
                value="accepted"
                unchecked-value="not_accepted"
                class="d-flex align-items-baseline"
              >
                Creating an account means you’re okay with our <span class="c-red">Terms of Service</span>, <br>
                <span class="c-red">Privacy Policy</span>, and our default <span class="c-red">Notification Settings</span>.
              </b-form-checkbox>
            </BCol>
            <BCol md="12 mt-4 ">
                <router-link to="/confirmation" tag="button" class="btn-gradient w-50" >Create Account</router-link>
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
};
</script>
<style lang="scss">
.customer-area {
  .customer-signup-form {
    .row {
      .col-md-6 {
        margin-top: 20px;
        &:nth-child(1),
        &:nth-child(2) {
          margin-top: 0;
        }
      }
    }
  }
}
</style>