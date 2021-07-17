<template>
  <div class="agent-area">
    <div class="mt-5 w-75 mx-auto">
      <div class="row">
        <div class="col-md-5">
          <h1 class="c-blue fw-6">Sign up to NAGIA.</h1>
        </div>
        <div class="col-md-7">
          <div class="d-flex align-items-center">
            <p class="c-blue tdn fw-6 ms-auto me-3"
              >Already Registered?</p
            >
            <router-link to="/login" tag="button" class="btn-yellow w-25 br-50">Sign In</router-link>
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
      <div class="below-dash"></div>
      <div class="agent-body">
        <b-form class="mt-5 agent-signup-form">
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
              <b-form-group label="Last Name" label-for="LastName">
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
              <b-form-group label="Email" label-for="Email">
                <b-form-input id="Email" type="email" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Location" label-for="Location">
                <b-form-input id="Location" type="text" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Digital Address" label-for="DigiAddress">
                <b-form-input
                  id="DigiAddress"
                  type="text"
                  required
                ></b-form-input>
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
              <b-form-group label="Landmark" label-for="LandMark">
                <b-form-input id="LandMark" type="text" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group
                label="Agent Existance (Months)"
                label-for="AgentExistance"
              >
                <b-form-input
                  id="AgentExistance"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group
                label="Current Life Company"
                label-for="CurrentLifeCompany"
              >
                <b-form-input
                  id="CurrentLifeCompany"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group
                label="Current Non-Life Company"
                label-for="CurrentNonLifeCompany"
              >
                <b-form-input
                  id="CurrentNonLifeCompany"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group
                label="Previous Life Company"
                label-for="PreviousLifeCompany"
              >
                <b-form-input
                  id="PreviousLifeCompany"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group
                label="Previous Non-Life Company"
                label-for="PreviousNonLifeCompany"
              >
                <b-form-input
                  id="PreviousNonLifeCompany"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="12" class="mt-6">
              <router-link to="/agent-verification" class="btn-gradient d-flex w-50 ms-auto justify-content-center">
                Verify &amp; Register
              </router-link>
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
.agent-area {
  .agent-signup-form {
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