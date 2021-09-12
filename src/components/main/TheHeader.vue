<template>
  <div class="box-shadow dashboard-header">
    <div class="row dashboard-row">
      <div class="col-md-2">
        <svg
          class="ms-4 pointer"
          style="width: 30px; height: 30px"
          @click="$store.commit('set', ['sidebarMinimize', !minimize])"
        >
          <use xlink:href="@/assets/svg/minimize.svg#minimize"></use>
        </svg>
        <svg class="ms-4 pointer" style="width: 30px; height: 30px">
          <use xlink:href="@/assets/svg/maximize.svg#max"></use>
        </svg>
      </div>
      <div class="col-md-6">
        <div class="dash-serach">
          <input type="search" class="dashbooard-search" />
          <b-icon icon="search"></b-icon>
        </div>
      </div>
      <div class="col-md-4 d-flex align-items-center third-col">
        <b-icon icon="bell-fill" class="me-4"> </b-icon>
        <b-icon icon="chat-left-fill" class="me-4"></b-icon>
        <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
          <template #button-content>
            <div class="d-flex align-items-center">
              <b-avatar
                variant="info"
                v-if="getUser.user_type =='agent'"
                :src="ImageUrl+'agent/'+getUser.agent.image" 
                class="me-3"
              ></b-avatar>
                <b-avatar
                variant="info"
                v-else
                :src="ImageUrl+'customer/'+getUser.consumer.image" 
                class="me-3"
              ></b-avatar>

              <h5 class="username" v-if="getUser.user_type =='agent'" >{{getUser.agent.first_name}}</h5>
              <h5 class="username" v-else>{{getUser.consumer.first_name}}</h5>
              <b-icon
                icon="caret-down-fill"
                variant="dark"
                class="ms-2"
              ></b-icon>
            </div>
          </template>
          <router-link class="dropdown-link" to="/account-details/edit-profile">
            <b-icon icon="person" class="me-2 icon"></b-icon>
            <span class="route-link">My Profile</span>
          </router-link>
          <router-link class="dropdown-link" to="/verify-an-angent">
            <b-icon icon="credit-card" class="me-2 icon"></b-icon>
            <span class="route-link">I.D Card</span>
          </router-link>
          <router-link class="dropdown-link" v-if="getUser.user_type =='agent'"  to="/messaging">
            <b-icon icon="envelope" class="me-2 icon"></b-icon>
            <span class="route-link">Inbox</span>
          </router-link>
          <router-link class="dropdown-link" to="/account-details/security">
            <b-icon icon="gear" class="me-2 icon"></b-icon>
            <span class="route-link">Setting</span>
          </router-link>
          <router-link class="dropdown-link" to="/dashboard">
            <b-icon icon="lock" class="me-2 icon"></b-icon>
            <span class="route-link">Legal Terms</span>
          </router-link>
          <router-link class="dropdown-link" @click="logout" to="" @click.native="logout" >
            <img src="@/assets/icons/logout.png" class="me-2" />
            <span class="route-link">Logout</span>
          </router-link>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  methods: {
    minSidebar() {
      this.$emit("minimize-sidebar");
    },
   
     async logout(value) {
      let vm = this;
      await axios
        .post(`/logout`, this.getToken)
        .then((response) => {
          if (response.data.status == false) {
            vm.$toast.error(response.data.message, {
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
            localStorage.removeItem("token");
            localStorage.clear();
            window.location.href = process.env.VUE_APP_URL
          }
        })
        .catch((error) => {
          let errors = error.response.data.errors;
        });
    },
  },
  computed: {
    ...mapGetters(['getUser']),
    minimize() {
      return this.$store.state.sidebarMinimize;
    },
      ImageUrl(){
      return process.env.VUE_APP_IMAGE_URL
    }
  },
};
</script>
<style lang="scss">
.dashboard-header {
  height: 75px;
  background: #fff;
  .dashboard-row {
    align-items: center;
    height: 75px;
    .dash-serach {
      position: relative;
      svg.bi-search {
        position: absolute;
        top: 12px;
        right: 20px;
      }
    }
    input.dashbooard-search {
      width: 100%;
      padding: 6px 45px 6px 20px !important;
      border: 2px solid #fff !important;
      transition: all 0.3s ease-in;
      &:focus-visible {
        outline: none;
        border: 2px solid var(--blue) !important;
      }
    }
  }

  h5.username {
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 700;
    color: #000;
  }

  .third-col {
    place-content: flex-end;
  }

  ul.dropdown-menu {
    padding: 0;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    border: none;
    width: 200px;
  }

  .dropdown-link {
    padding: 13px 10px;
    color: var(--grey);
    display: flex;
    text-decoration: none;
    transition: all 0.3s ease;
    svg {
      font-size: 20px;
    }
    img {
      height: 20px;
    }
    .route-link {
      font-size: 17px;
      font-weight: 700;
      color: var(--grey);
    }
    &.router-link-active {
      background: var(--yellow);
      svg {
        fill: #000;
      }
      .route-link {
        color: #000;
      }
      &:hover {
        background: var(--yellow);
      }
    }
    &:hover {
      background: #e9ecef;
    }
  }
}
</style>