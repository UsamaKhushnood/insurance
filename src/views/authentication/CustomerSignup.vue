<template>
  <div class="">
    <!-- <Circle10  v-if="spinner"/>  -->
    <div class="customer-area">
      <div class="mt-5 w-75 mx-auto">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-items-center">
              <p class="c-blue tdn fw-6 ms-auto me-3">Already Registered?</p>
              <router-link
                to="/login"
                tag="button"
                class="btn-yellow w-25 br-50"
                >Sign In</router-link
              >
              <Dropdown class="ms-4">
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
          </div>
        </div>
        <div class="customer-body">
          <h1 class="c-blue fw-6 mt-10">Sign up to NAGIA.</h1>
          <div class="below-dash"></div>
          <b-form class="mt-5 customer-signup-form" @submit.prevent="register">
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
                   <b-form-select
                    id="Gender"
                    required
                   v-model="gender"
                    :options="genderOptions"
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
                <b-form-group label="Phone Number" label-for="Phone Number">
                  <b-form-input
                    id="Phone Number"
                    v-model="phone"
                    type="number"
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
                <b-form-group label="Region" label-for="Region">
                  <v-select
                    label="countryName"
                    v-model="region"
                    :options="region_options"
                  ></v-select>
                </b-form-group>
              </BCol>
              <BCol md="6">
                <b-form-group label="District" label-for="District">
                  <v-select
                    label="countryName"
                    v-model="district"
                    :options="district_options"
                  ></v-select>
                </b-form-group>
              </BCol>
              <BCol md="6">
                <b-form-group label="Email" label-for="Email">
                  <b-form-input
                    id="Email"
                    type="email"
                    v-model="email"
                    placeholder="dummy@example.com"
                    required
                  ></b-form-input>
                </b-form-group>
              </BCol>
              <BCol md="6">
                <b-form-group label="Password" label-for="password">
                  <b-form-input
                    id="password"
                    v-model="password"
                    type="password"
                    placeholder="7+ characters"
                    required
                  ></b-form-input>
                </b-form-group>
              </BCol>
              <BCol md="6">
                <b-form-group
                  label="Password Confrimation"
                  label-for="password"
                >
                  <b-form-input
                    id="Password Confirmation"
                    v-model="password_confirmation"
                    type="password"
                    placeholder="7+ characters"
                    required
                  ></b-form-input>
                </b-form-group>
              </BCol>
              <BCol md="12 mt-4">
                <b-form-checkbox
                  id="confrimation"
                  v-model="confrimation"
                  name="confrimation"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="d-flex align-items-baseline"
                >
                  Creating an account means you’re okay with our
                  <router-link to="" @click.native="sendTo('https://nagia.com.gh/terms-of-service/')"><span class="c-red">Terms of Service</span></router-link>, <br />
                  <router-link to="" @click.native="sendTo('https://nagia.com.gh/privacy-policy/')">`<span class="c-red">Privacy Policy</span></router-link>, and our default
                  <span class="c-red">Notification Settings</span>.
                </b-form-checkbox>
              </BCol>
              <BCol md="12 mt-4 ">
                <button class="btn-gradient w-50"
                  :disabled='isDisabled'
                 type="submit">
                  Create Account
                </button>
                <!-- <router-link to="/confirmation" tag="button" class="btn-gradient w-50" >Create Account</router-link> -->
              </BCol>
            </BRow>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Circle10 from '@/components/Circle10.vue'
import Dropdown from "@/components/Dropdown";
import $ from "jquery";
export default {
  components: { Dropdown },
  data() {
    return {
      spinner: false,
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
      region: "",
      region_options: [],
      district_options: [],
      district: "",
      confrimation: "not_accepted",
      options: [
        { value: "Mr", text: "Mr" },
        { value: "Mrs", text: "Mrs" },
        { value: "Miss", text: "Miss" },
        { value: "Rev", text: "Rev" },
        { value: "Dr", text: "Dr" },
        { value: "Prof", text: "Prof" },
      ],
      genderOptions:[
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
        
      ]
    };
  },
  methods: {
    async register() {
      const vm = this;
      vm.spinner = true;
   
      if (vm.confrimation == "") {
        $(".btn-gradient").attr("disabled", true);
        return;
      } else {
        $(".btn-gradient").removeAttr("disabled");
      }
         vm.$store.commit("SET_SPINNER", true);
      vm.$store
        .dispatch("HTTP_POST_REQUEST", {
          url: `/register`,
          payload: {
            device_token: "121215",
            first_name: vm.first_name,
            title: vm.title,
            middle_name: this.middle_name,
            last_name: this.last_name,
            password: this.password,
            password_confirmation: this.password_confirmation,
            gender: this.gender,
            phone: this.phone,
            email: this.email,
            location: this.location,
            region: this.region,
            district: this.district,
            landmark: this.landmark,
            user_type: "consumer",
          },
        })
        .then((response) => {
          if (response.data.status == false) {
            vm.$toast.error(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
            vm.spinner = false;
            vm.$store.commit("SET_SPINNER", false);
          } else {
            //  vm.spinner = false;
            vm.$store.commit("SET_SPINNER", false);
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });

            vm.$router.push({ path: "login" });
          }
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
    async getDistrict() {
      const vm = this;

      await axios
        .get(`/districs`)
        .then((response) => {
          $.each(response.data.data, function(index, value) {
            vm.district_options.push(value.name);
          });
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
          $.each(response.data.data, function(index, value) {
            vm.region_options.push(value.name);
          });
        })
        .catch((error) => {
          let errors = error.response.data.errors;
        });
    },
    sendTo(url){
        window.open(url,'_blank');
      // window.location.href =url
    }
  },
  computed:{
      isDisabled: function() {
        return this.confrimation =="not_accepted";
      },
  },
  watch:{
    confrimation(){
      
    }
  },
  mounted() {
    this.getDistrict();
    this.getRegions();
  },
};
</script>
<style lang="scss" scoped>
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
a{
  text-decoration: none;
}
</style>
