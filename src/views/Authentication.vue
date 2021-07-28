<template>
  <div class="authenticaiton" id="authentication">
    <div class="row">
      <div
        class="col-md-5 left-side p-5 position-relative"
        :class="{ 'customer-background': $route.name == 'Customer Area' }"
      >
        <div class="site-logo">
          <img src="@/assets/logo.png" alt="logo" />
        </div>
        <div class="helper-text mt-5">
          <h1 v-show="$route.name == 'Login'">
            Let’s get you signed-in <br />
            to your dashboard
          </h1>
          <h1 v-show="$route.name == 'Agent Area'">
            Agent? Let's <br />
            get you registered <br />
            on the platform
          </h1>
          <h1 v-show="$route.name == 'Customer Area'">
            Client? Let's <br />
            get you registered <br />
            on the platform
          </h1>
          <h1 v-show="$route.name == 'Confirmation'">
            Let's Create <br />
            Something <br />
            amaizing Work <br> with Us.
          </h1>
          <h1 v-show="$route.name == 'Agent Verification'">
            Let's get <br> you verifiede <br> in one click
          </h1>
        </div>
        <div class="footer-text copy-right-text mb-4">
          <p>© 2021 NAGIA. Powered by Kwadisi. All Rights Reserved</p>
        </div>
      </div>
      <div class="col-md-7 right-side">
        <RouterView class="authentication-view" name="authentication"></RouterView>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.authenticaiton {
  .left-side {
    min-height: 100vh;
    background-image: url("../assets/images/auth-background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #fff;
  }

  .customer-background {
    background-image: url("../assets/images/customer-signup.png");
  }

  .site-logo img {
    width: 100px;
    height: auto;
  }

  .helper-text h1 {
    // width: 350px;
    font-size: 60px !important;
  }

  .footer-text.copy-right-text {
    position: absolute;
    bottom: 0;
  }

  .right-side {
    max-height: 100vh;
    overflow: auto;
    padding-bottom: 100px;
  }
}
</style>