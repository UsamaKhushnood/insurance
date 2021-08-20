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
            src="https://placekitten.com/300/300"
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
          id="input-group-1"
          label="Digital Address"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="digital_address"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Region"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="region"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Agent Existance (Months)"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="agent_existence"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
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
          label="Landmark"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="landmark"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Current Life Company"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="current_life_company"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Previous Non Life Company"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="previous_non_life_company"
            type="text"
            required
          ></b-form-input>
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
            required
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
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="district"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Current Non-Life Company"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="current_non_life_company"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Previous Life Company"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="previous_life_company"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <button
          class="btn-blue btn-hover-yellow mt-4 btn-block"
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
  name: "Edit Profile Consumer",
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
      digital_address: "",
      region: "",
      district: "",
      landmark: "",
      agent_existance: "",
      current_life_company: "",
      current_non_life_company: "",
      previous_life_company: "",
      previous_non_life_company: "",
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
        digital_address: vm.digital_address,
        region: vm.region,
        district: vm.district,
        landmark: vm.landmark,
        agent_existence: vm.agent_existence,
        current_life_company: vm.current_life_company,
        current_non_life_company: vm.current_non_life_company,
        previous_life_company: vm.previous_life_company,
        previous_non_life_company: vm.previous_non_life_company,
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
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    uploadImage(event) {
      let vm = this
    let data = new FormData();
    data.append('name', 'my-picture');
    data.append('file', event.target.files[0]); 
    console.log('asdas',data)
    console.log('asdas',event.target.files[0])
    let config = {
      header : {
        'Content-Type' : 'image/png'
      }
    }
    axios
        .post(process.env.VUE_APP_API_URL+vm.$store.state.user.user_type+'/update-profile',
     { 
        first_name: vm.first_name,
        middle_name: vm.middle_name,
        last_name: vm.last_name,
        image: event.target.files[0],
        gender: vm.gender,
        phone: vm.phone,
        email: vm.email,
        location: vm.location,
        digital_address: vm.digital_address,
        region: vm.region,
        district: vm.district,
        landmark: vm.landmark,
        agent_existence: vm.agent_existence,
        current_life_company: vm.current_life_company,
        current_non_life_company: vm.current_non_life_company,
        previous_life_company: vm.previous_life_company,
        previous_non_life_company: vm.previous_non_life_company}
        ,
      config
    ).then(
      response => {
        console.log('image upload response > ', response)
      }
    )
  },
    getUpdateData() {
      (this.first_name = this.$store.state.user.agent.first_name),
        (this.middle_name = this.$store.state.user.agent.middle_name),
        (this.last_name = this.$store.state.user.agent.last_name),
        (this.image = this.$store.state.user.agent.image),
        (this.gender = this.$store.state.user.agent.gender),
        (this.phone = this.$store.state.user.agent.phone),
        (this.email = this.$store.state.user.email),
        (this.location = this.$store.state.user.agent.location),
        (this.digital_address = this.$store.state.user.agent.digital_address),
        (this.region = this.$store.state.user.agent.region),
        (this.district = this.$store.state.user.agent.district),
        (this.landmark = this.$store.state.user.agent.landmark),
        (this.agent_existence = this.$store.state.user.agent.agent_existence),
        (this.current_life_company = this.$store.state.user.agent.current_life_company),
        (this.current_non_life_company = this.$store.state.user.agent.current_non_life_company),
        (this.previous_life_company = this.$store.state.user.agent.previous_life_company),
        (this.previous_non_life_company = this.$store.state.user.agent.previous_non_life_company);
    },
  },
  mounted() {
    this.getUpdateData();
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
</style>
