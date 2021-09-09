<template>
<div class="">
    <!-- <Circle10  v-if="spinner"/>  -->
  <div class="customer-area" >
    <div class="mt-5 w-75 mx-auto" >
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex align-items-center">
            <router-link to="/login" tag="button" class="btn-yellow w-25 br-50"
              >Sign In</router-link
            >
            <Dropdown class="ms-4">
             <router-link to="/complain">
                  <li class="c-dropdown-item">
                    <i class="fa fa-user c-icon"></i> Complaints
                  </li>
                </router-link>

                <router-link to="" @click.native="sendTo('https://nagia.com.gh/privacy-policy/')">
                  <li class="c-dropdown-item">
                    <i class="fa fa-user c-icon"></i> Privacy Policy
                  </li>
                </router-link>
               <router-link to="" @click.native="sendTo('https://nagia.com.gh/terms-of-service/')">
                  <li class="c-dropdown-item">
                    <i class="fa fa-user c-icon"></i> Terms of Services
                  </li>
                </router-link>
            </Dropdown>
          </div>
        </div>
      </div>
      <div class="customer-body">
      <h1 class="c-blue fw-6 mt-10">Complaints.</h1>
      <div class="below-dash"></div>
        <b-form class="mt-5 customer-signup-form" @submit.prevent="myComplain">
          <BRow>
      
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
              <b-form-group label="Last Name" label-for="LastName">
                <b-form-input id="LastName"  
                  v-model="last_name"
                 type="text" required></b-form-input>
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
              <b-form-group label="City" label-for="City">
                <b-form-input
                  id="city"
                  v-model="city"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </BCol>
        
            <BCol md="6">
              <b-form-group label="Region" label-for="Region">
                     <v-select label="countryName" v-model="region"  :options="region_options"></v-select>
              </b-form-group>
            </BCol>
            <BCol md="6">
              <b-form-group label="Gender" label-for="Gender">
                <v-select label="Gender" v-model="gender"  :options="['Male','Female']"></v-select>
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
            <BCol md="12 mt-3">
              <b-form-group
                id="input-group-1"
                label="Please type your complaint here"
                label-for="complaints"
              >
                <b-form-textarea
                  id="complaints"
                  v-model="complain"
                  class="br-10"
                  rows="8"  no-resize
                  required
                ></b-form-textarea>
              </b-form-group>
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
</div>
</template>
<script>

// import Circle10 from '@/components/Circle10.vue'
import Dropdown from "@/components/Dropdown";
import $ from 'jquery';
export default {
  name:'Complain',
  components: { Dropdown,},
   data() {
    return {
      spinner:false,  
      first_name:'',   
      city:'',   
      last_name:'',  
      gender:'',  
      phone:'',  
      email:'',    
      region:'',  
      complain:'',  
      region_options:[],     
    
    };
  },
  methods: {
    sendTo(url){
      window.location.href =url
    },
    async myComplain() {
      const vm = this;
       vm.spinner = true;
      vm.$store.commit('SET_SPINNER',true);
      if(this.confrimation == ''){
          $('.btn-gradient').attr('disable');
      }else{
          $('.btn-gradient').removeAttr('disable');
      }
      vm.$store
        .dispatch("HTTP_POST_REQUEST", {url:`/general-complain`,payload:{
            
            first_name:vm.first_name,
            last_name:this.last_name,
            phone:this.phone,
            gender:this.gender,
            email:this.email,
            region:this.region,
            complain:this.complain,
            city:this.city,
          }})
        .then((response) => {
           if(response.data.status == false){
              
          vm.$toast.error(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
           vm.spinner = false;
            vm.$store.commit('SET_SPINNER',false);
          }else{
            //  vm.spinner = false;
            vm.$store.commit('SET_SPINNER',false);
            vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });

              // vm.$router.push({ path: "login" });
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
    this.getRegions();
  }
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