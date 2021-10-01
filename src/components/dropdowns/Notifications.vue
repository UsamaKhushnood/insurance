<template>
  <div class="notifications-dropdown">
    <div class="notifications">
      <div
        class="single-notification"
        v-for="(notification, x) in notifications"
        :key="x"
      >
        <div class="user-avatar" v-if="x == 1">
          <b-avatar class="av-danger" icon="x" size="50px"></b-avatar>
        </div>
        <div class="user-avatar" v-else>
          <b-avatar class="av-success" icon="check2" size="50px"></b-avatar>
        </div>
        <div class="center-cotent">
          <h5 class="username"> {{ notification .title}}</h5>
          <p class="notification">
            {{notification.message}}
          </p>
          <p class="time">{{notification.time}}}</p>
        </div>
        <div class="delete">
          <b-icon icon="x" @click="del(x)"></b-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    del(x) {
      this.notifications.splice(x, 1);
    },
   async getMyNotifications(){
      const vm = this;
    //   vm.$store.commit("SET_SPINNER", true);
      await axios
        .get(process.env.VUE_APP_API_URL+vm.$store.state.user.user_type+"/all-notification/")
        .then((response) => {
          console.log('data::',response.data.data);
          vm.$store.commit("SET_SPINNER", false);
      
          vm.notifications= response.data.data;      
        })
        .catch((errors) => {
          console.log(errors)
           if(errors.response)
          this.$toast.error(errors.response.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        });
    }
  },
  mounted(){
    this.getMyNotifications();
  } 
};
</script>
<style lang="scss">
.notifications-dropdown {
  position: absolute;
  width: 500px;
  right: 0;
  top: 40px;
  z-index: 999;
  .av-danger {
    background: #ffcbbb;
    color: #ff5722;
  }
  .av-success {
    background: #b5dfb7;
    color: #4caf50;
  }
  .notifications {
    max-height: 447px;
    overflow: auto;
  }
  .Mheader {
    background: var(--blue);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 10px;
    h5 {
      margin: 0;
    }
  }
  .single-notification {
    display: flex;
    padding: 15px;
    column-gap: 20px;
    margin-bottom: 5px;
    background: #fff;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    .center-cotent {
      width: 100%;
      h5.username {
        color: var(--blue);
        text-transform: capitalize;
      }
      p.notification,
      p.time {
        font-weight: 700;
        color: var(--grey);
      }
    }
    .user-avatar {
      align-self: center;
    }
    .delete svg {
      font-size: 30px;
      fill: var(--grey);
    }
  }
}
</style>