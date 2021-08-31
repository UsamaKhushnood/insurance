<template>
  <div class="agent-area">
    <div class="mt-5 w-75 mx-auto">
      <div class="row">
        <div class="col-md-5">
          <h1 class="c-blue fw-6">Sign up to NAGIA.</h1>
        </div>
        <div class="col-md-7">
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
      <div class="below-dash"></div>
      <div class="agent-body">
        <b-form class="mt-5 agent-signup-form">
          <BRow>
            <BCol md="6">
              <b-form-group label="Select Title" label-for="SelectTitle">
                <b-form-select
                  id="SelectTitle"
                  required
                  v-model="title"
                  :options="options"
                  class="field-category"
                >
                  <template #first>
                    <b-form-select-option :value="null" selected disabled
                      >-- Please select an option --</b-form-select-option
                    >
                  </template>
                </b-form-select>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="First Name" label-for="FirstName">
                <b-form-input
                  id="FirstName"
                  v-model="first_name"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>

            <BCol md="6">
              <b-form-group label="Middle Name" label-for="MiddleName">
                <b-form-input
                  id="MiddleName"
                  v-model="middle_name"
                  type="text"
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Last Name" label-for="LastName">
                <b-form-input
                  id="LastName"
                  v-model="last_name"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Gender" label-for="Gender">
                <b-form-input
                  id="Gender"
                  type="text"
                  v-model="gender"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="PhoneNo" label-for="PhoneNo">
                <b-form-input
                  id="PhoneNo"
                  v-model="phone"
                  type="tel"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Email" label-for="Email">
                <b-form-input
                  id="Email"
                  v-model="email"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Password" label-for="Password">
                <b-form-input
                  id="Password"
                  v-model="password"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group
                label="Password Confirmation"
                label-for="Password Confirmation"
              >
                <b-form-input
                  id="Password Confirmation"
                  v-model="password_confirmation"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Location" label-for="Location">
                <b-form-input
                  id="Location"
                  v-model="location"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Digital Address" label-for="DigiAddress">
                <b-form-input
                  id="DigiAddress"
                  type="text"
                  v-model="digital_address"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Select Region" label-for="Region">
                   <v-select label="countryName" v-model="region"  :options="region_options"></v-select>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Select District" label-for="District">
                 <v-select label="countryName" v-model="district"  :options="district_options"></v-select>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Landmark" label-for="LandMark">
                <b-form-input
                  id="LandMark"
                  v-model="landmark"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group
                label="Agent Existance (Months)"
                label-for="AgentExistance"
              >
                <b-form-input
                  id="AgentExistance"
                  v-model="agent_existance"
                  type="text"
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
                  v-model="current_life_company"
                  type="text"
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
                  v-model="current_non_life_company"
                  type="text"
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
                  v-model="previous_life_company"
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
                  v-model="previous_non_life_company"
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="12" class="mt-6">
              <button
                @click="register"
                class="btn-gradient d-flex w-50 ms-auto justify-content-center"
              >
                Verify &amp; Register
              </button>
              <!-- <router-link to="/agent-verification" @click="register" class="btn-gradient d-flex w-50 ms-auto justify-content-center">
                Verify &amp; Register
              </router-link> -->
            </BCol>
          </BRow>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import 'vue-select/dist/vue-select.css';
import Dropdown from "@/components/Dropdown";
export default {
  name: "AgentSignup",
  components: { Dropdown },
  data() {
    return {
      title: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      password: "",
      password_confirmation: "",
      gender: "",
      phone: "",
      email: "",
      location: "",
      digital_address: "",
      region_options: [],
      region: "",
      district_options: [],
      district: "",
      landmark: "",
      agent_existance: "",
      current_life_company: "",
      current_non_life_company: "",
      previous_life_company: "",
      previous_non_life_company: "",
      options: [
        { value: "Mr", text: "Mr" },
        { value: "Mrs", text: "Mrs" },
        { value: "Miss", text: "Miss" },
        { value: "Rev", text: "Rev" },
        { value: "Dr", text: "Dr" },
        { value: "Prof", text: "Prof" },
      ],
    };
  },
  methods: {
    async register() {
      if (
        this.first_name == "" ||
        this.title == "" ||
        this.last_name == "" ||
        this.password == "" ||
        this.password_confirmation == "" ||
        this.gender == "" ||
        this.phone == "" ||
        this.email == "" ||
        this.location == "" ||
        this.digital_address == "" ||
        this.region == "" ||
        this.district == "" ||
        this.landmark == "" ||
        this.agent_existance == "" ||
        this.current_life_company == "" ||
        this.current_non_life_company == "" ||
        this.previous_life_company == "" ||
        this.previous_non_life_company == ""
      ) {
        return;
      }

      const vm = this;
      let payload = {
        device_token: "123456",
        title: vm.title,
        first_name: vm.first_name,
        middle_name: this.middle_name,
        last_name: this.last_name,
        password: this.password,
        password_confirmation: this.password_confirmation,
        gender: this.gender,
        phone: this.phone,
        email: this.email,
        location: this.location,
        digital_address: this.digital_address,
        region: this.region,
        district: this.district,
        landmark: this.landmark,
        agent_existence: this.agent_existance,
        current_life_company: this.current_life_company,
        current_non_life_company: this.current_non_life_company,
        previous_life_company: this.previous_life_company,
        previous_non_life_company: this.previous_non_life_company,
        user_type: "agent",
      };
      this.$store.commit("SET_REGISTER_DATA", payload);
      this.$router.push({ path: "/agent-verification" });
    },
    async getDistrict() {
      const vm = this;

      await axios
        .get(`/districs`)
        .then((response) => {
            $.each(response.data.data,function(index,value){
              vm.district_options.push(value.name)
          })
        })
        .catch((error) => {
          let errors = error.response.data.errors;
        });
    },
    async getRegions() {
      const vm = this;

      await axios
        .get(`/regions`)
        .then((response) => {
          // vm.region_options = response.data.data;
          $.each(response.data.data,function(index,value){
              vm.region_options.push(value.name)
          })
        })
        .catch((error) => {
          let errors = error.response.data.errors;
        });
    },
  },
  mounted() {
    this.getDistrict();
    this.getRegions();
  },
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

select.field-category.custom-select {
  width: 100% !important;
  border: none;
  background: var(--light-grey);
  padding: 10px;
  border-radius: 5px;
  height: 50px;
}
</style>
