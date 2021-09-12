<template>
  <div class="account-details">
    <BRow class="row">
      <div
        class="col-md-3 position-relative"
        style="height: calc(100vh - 220px); min-height: 650px"
      >
        <div class="account-details-tabs">
          <router-link v-if="getUser.user_type == 'agent'"
            to="/account-details/edit-profile"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">Edit Profile</h5>
              <p class="c-grey">Details about your personal infromation</p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
          <router-link v-if="getUser.user_type == 'consumer'"
            to="/account-details/edit-profile-consumer"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">Edit Profile</h5>
              <p class="c-grey">Details about your personal infromation</p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
          <router-link
            to="/account-details/notification"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">Notification</h5>
              <p class="c-grey">Details about your account-details posts</p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
          <router-link
          v-if="getUser.user_type=='agent'"
            to="/account-details/billing"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">Membership Plans &amp; Billing</h5>
              <p class="c-grey">Details about your account-details posts</p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
          <router-link
            to=''
            @click.native="redirectUrl('/account-details/security')"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">Password &amp; Security</h5>
              <p class="c-grey">Details about your account-details posts</p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-9" v-if="getUser.user_type == 'agent'">
        <RouterView class="account-details-view" name="accountdetails" />
      </div>
      <div class="col-md-9" v-if="getUser.user_type == 'consumer'">
        <RouterView class="account-details-view" name="accountdetailsConsumer" />
      </div>
    </BRow>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name:'AccountDetails',
   computed:{
    ...mapGetters(['getUser'])
  },
  methods:{
      redirectUrl(url){
        this.$router.push({ name: 'AccountSecurity' });
        // window.location.href =url
      }
  }
};
</script>
<style lang="scss">
.account-details {
  .account-details-tabs {
    .tab {
      width: 100%;
      justify-content: space-between;
      padding: 5px 2px 5px 15px;
      border: 3px solid #fff;
      border-radius: 10px;
      background: #fff;
      margin-bottom: 20px;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      transition: 0.3s all ease;
      &.router-link-active {
        border: 3px solid var(--blue);
      }
      .f-title {
        p {
          font-size: 12px;
        }
        h5 {
          margin-bottom: 2px;
        }
      }

      .f-icon svg {
        font-size: 30px;
      }
    }
  }
}
</style>