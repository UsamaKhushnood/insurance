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
            <b-form-select-option :value="null" selected disabled>-- Please select an option --</b-form-select-option>
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
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Last Name" label-for="LastName">
                <b-form-input id="LastName"  
                  v-model="last_name"
                 type="text" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Gender" label-for="Gender">
                <b-form-input id="Gender"
                 v-model="gender" type="text" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="PhoneNo" label-for="PhoneNo">
                <b-form-input
                  id="PhoneNo"
                    v-model="phone"
                  type="number"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Location" label-for="Location">
                <b-form-input id="Location"  v-model="location" type="text" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Region" label-for="Region">
                <b-form-input id="Region"  v-model="region" type="text" required></b-form-input>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="District" label-for="District">
                <b-form-input id="District"  v-model="district" type="text" required></b-form-input>
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
              <b-form-group label="Password Confrimation" label-for="password">
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
                Creating an account means you’re okay with our <span class="c-red">Terms of Service</span>, <br>
                <span class="c-red">Privacy Policy</span>, and our default <span class="c-red">Notification Settings</span>.
              </b-form-checkbox>
            </BCol>
            <BCol md="12 mt-4 ">
                <button class="btn-gradient w-50" type="submit">
                  Create Account
                </button>
                <!-- <router-link to="/confirmation" tag="button" class="btn-gradient w-50" >Create Account</router-link> -->
            </BCol>
          </BRow>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown";
import $ from 'jquery';
export default {
  components: { Dropdown },
   data() {
    return {
  
      first_name:'',  
      middle_name:'',  
      last_name:'',  
      password:'',  
      password_confirmation:'',  
      gender:'',  
      phone:'',  
      email:'',  
      location:'',  
      region:'',  
      district:'',  
      confrimation:'',  
      options: [
          { value: 'Mr', text: 'Mr' },
          { value: 'Mrs', text: 'Mrs' },
          { value: 'Miss', text: 'Miss' },
          { value: 'Rev', text: 'Rev' },
          { value: 'Dr', text: 'Dr' },
          { value: 'Prof', text: 'Prof' },
      ]
    };
  },
  methods: {
    async register() {
      const vm = this;
      if(this.confrimation == ''){
          $('.btn-gradient').attr('disable');
      }else{
          $('.btn-gradient').removeAttr('disable');
      }
      vm.$store
        .dispatch("HTTP_POST_REQUEST", {url:`/register`,payload:{
            device_token:'121215',
            first_name:vm.first_name,
            middle_name:this.middle_name,
            last_name:this.last_name,
            password:this.password,
            password_confirmation:this.password_confirmation,
            gender:this.gender,
            phone:this.phone,
            email:this.email,
            location:this.location,
            region:this.region,
            district:this.district,
            landmark:this.landmark,
            user_type:'consumer'
          }})
        .then((response) => {
           if(response.data.status == false){
              
          vm.$toast.error(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          }else{
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
    },
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