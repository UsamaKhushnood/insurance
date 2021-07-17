<template>
  <div class="confirmation">
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
      <h1 class="c-blue fw-6 mt-10 heading">Great! Everything is ready</h1>
      <p class="c-grey f-20 fw-6">You will receive an email &amp; phone verification soon <br> with details to your dashboard</p>
      <div class="below-dash"></div>
     <div class="d-flex flex-column align-items-center">
          <img src="@/assets/images/user-verification.png" alt="">
      <router-link to="/login" tag="button" class="btn-blue w-100 mt-5">Sign in</router-link>
     </div>

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
.confirmation {
    h1.heading {
        font-size: 60px;
    }
}
</style>