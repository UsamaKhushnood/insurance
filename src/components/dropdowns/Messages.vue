<template>
  <div class="messages-dropdown">
    <div class="Mheader" @click="$emit('hide-dropdown')">
      <h5>Messages</h5>
      <router-link to="/messaging" tag="h5" >View All</router-link>
    </div>
    <div class="messages">
      <div class="single-message" v-for="(message, x) in messages" :key="x">
        <div class="user-avatar">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            size="50px"
          ></b-avatar>
        </div>
        <div class="center-cotent">
          <h5 class="username">henry nelson {{ message }}</h5>
          <p class="message">Henry sent you a message and files</p>
          <p class="time">02 Hours ago</p>
        </div>
        <div class="delete">
          <b-icon icon="x" @click="del(x)"></b-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from "../../../db";
import { mapGetters } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {
      messages: [],
    };
  },
   computed: {
    ...mapGetters(["getEvent", "getUser", "getReceiver"]),
    ImageUrl() {
      return process.env.VUE_APP_IMAGE_URL;
    }
  },
  methods: {
    del(x) {
      this.messages.splice(x, 1);
    },
    async getMyNotifications(){
      const vm = this;
    //   vm.$store.commit("SET_SPINNER", true);
    alert(1)
    const query = db.database().ref("Conversation/"+this.getUser.agent.firebase_uid).child("/Chat").orderByKey().limitToLast(1);
console.log('query',query)
    query.once("value").then((snapshot) => {
      snapshot.forEach((message) => {
        console.log(message.val().message.msg);
      });
    })
    }
  },
  mounted(){
    this.getMyNotifications();
  } 
};
</script>
<style lang="scss">
.messages-dropdown {
  position: absolute;
  background: #ffff;
  width: 500px;
  right: 0;
  top: 40px;
  z-index: 999;
  .messages {
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
  .single-message {
    display: flex;
    padding: 15px;
    column-gap: 20px;
    margin-bottom: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    .center-cotent {
      width: 100%;
      h5.username {
        color: var(--blue);
        text-transform: capitalize;
      }
      p.message,
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