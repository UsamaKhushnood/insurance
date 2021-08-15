<template >
  <div class="edit-profile">
    <div class="row">
      <div class="col-md-12 mb-3 mt-0">
          <h4 class="text-center c-grey">Edit Profile - Change User information from here</h4>
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
            <input
              class="upload-pic-btn d-none"
              id="upload-pic-btn"
              type="file"
            />
          </label>
          <label for="upload-photo-link" class="mt-3 pointer">
            Upload New Photo
            <input
              variant="link"
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
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Digital Address"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Region"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Agent Existance (Months)"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-4 mt-4">
        <b-form-group
          id="input-group-1"
          label="First Name"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Last Name"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Email Address"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Landmark"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Current Life Company"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Previous Non Life Company"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
      </div>

      <div class="col-md-4 mt-4">
        <b-form-group
          id="input-group-1"
          label="Middle Name"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Gender"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Location"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="District"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Current Non-Life Company"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Previous Life Company"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
        <button class="btn-blue btn-hover-yellow mt-4 btn-block">Save</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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