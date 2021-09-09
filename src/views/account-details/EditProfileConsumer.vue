<template>
  <div class="edit-profile">
    <div class="row">
      <div class="col-md-12 mb-3 mt-0">
        <h4 class="text-center c-grey">
          Edit Profile - Change User information from here
        </h4>
      </div>
      <div class="col-md-4">
        <div
          class="user-profile-pic text-center mb-4 position-relative mx-auto"
          style="width: 200px"
        >
          <b-avatar
            :src="ImageUrl+'consumer/'+this.$store.state.user.consumer.image"
            size="10rem"
          ></b-avatar>
          <label for="upload-pic-btn">
            <b-icon icon="camera"></b-icon>
             <!-- @change="onFileChange" -->
            <input
              class="upload-pic-btn d-none"
              @change="uploadImage($event)"
             
              id="upload-pic-btn"
              type="file"
            />
          </label>
          <label for="upload-photo-link" class="mt-3 pointer">
            Upload New Photo
            <input
              variant="link"
                @change="uploadImage($event)"
              id="upload-photo-link"
              type="file"
              class="d-none"
            />
          </label>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <b-form-group
          id="input-group-1"
          label="First Name"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="first_name"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Last Name"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="last_name"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Email Address"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            required
          ></b-form-input>
        </b-form-group>
      <b-form-group
          id="input-group-1"
          label="Phone Number"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="phone"
            type="tel"
            required
          ></b-form-input>
        </b-form-group>
       
         <b-form-group 
         label="Region"
          class="mt-3"
          label-for="Region">
          <v-select
            label="region"
            v-model="region"
            :options="region_options"
          ></v-select>
        </b-form-group>
      
      </div>

      <div class="col-md-4 mt-4">
        <b-form-group
          id="input-group-1"
          label="Middle Name"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="middle_name"
            type="text"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Gender"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="gender"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Location"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="location"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group 
         id="input-group-1" 
         label="District"
          label-for="District">
          <v-select
            label="countryName"
            v-model="district"
            :options="district_options"
          ></v-select>
        </b-form-group>
     
       
        <button
          class="btn-blue btn-hover-yellow mt-10 btn-block"
          @click="updateDetail"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "EditProfileConsumer",
     computed: {
    ImageUrl() {
      return process.env.VUE_APP_IMAGE_URL;
    },
  },
  data() {
    return {
      first_name: "",
      middle_name: "",
      last_name: "",
      image: "",
      gender: "",
      phone: "",
      email: "",
      location: "",
      region: "",
      district: "",
      region_options: [],
      district_options: [],
    };
  },
  methods: {
    move(to, data) {
      this.$router.push({ path: to });
      // this.$store.commit("SET_SELECTED_EVENT", data);
    },
    async updateDetail() {
      let vm = this;

      let payload = {
        first_name: vm.first_name,
        middle_name: vm.middle_name,
        last_name: vm.last_name,
        image: vm.image,
        gender: vm.gender,
        phone: vm.phone,
        email: vm.email,
        location: vm.location,
        region: vm.region,
        district: vm.district
      };

      vm.$store
        .dispatch("HTTP_POST_REQUEST", {
          url: vm.$store.state.user.user_type + `/update-profile`,
          payload,
        })
        .then((response) => {
          console.log("re", response.data);
          if (response.data.status == false) {
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          } else {
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
            console.log()
            this.$store.commit('SET_USER',response.data.userDetail)
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
    uploadImage(event) {
        let vm = this
        var file_data = event.target.files[0];
        const form_data = new FormData();
        form_data.append('image', file_data);
        console.log(form_data)
        axios
            .post(process.env.VUE_APP_API_URL+vm.$store.state.user.user_type+'/save-image', 
              form_data
        ).then(
          response => {
            console.log('image upload response > ', response.data.userDetail)
            vm.$store.state.user.consumer = response.data.userDetail.consumer;
            vm.getUpdateData()
          }
        )
      },
    getUpdateData() {
      (this.first_name = this.$store.state.user.consumer.first_name),
        (this.middle_name = this.$store.state.user.consumer.middle_name),
        (this.last_name = this.$store.state.user.consumer.last_name),
        (this.image = this.$store.state.user.consumer.image),
        (this.gender = this.$store.state.user.consumer.gender),
        (this.phone = this.$store.state.user.consumer.phone),
        (this.email = this.$store.state.user.email),
        (this.location = this.$store.state.user.consumer.location),
        (this.region = this.$store.state.user.consumer.region),
        (this.district = this.$store.state.user.consumer.district)
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
  },
  mounted() {
    this.getUpdateData();
    this.getDistrict();
    this.getRegions();
  },
};
</script>
<style lang="scss">
.edit-profile input {
  background: #fff !important;
}

label[for="upload-pic-btn"] {
  background: var(--yellow);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: absolute;
  top: 100px;
  right: 12px;
  cursor: pointer;
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
