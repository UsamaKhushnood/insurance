<template>
  <div class="messaging">
    <BRow class="row">
      <div class="col-md-4 p-0 box-shadow">
        <div class="online-users">
          <div class="header row">
            <div class="col-md-3 p-0">
              <b-avatar
                :src="ImageUrl + 'agent/' + getUser.agent.image"
                size="4rem"
              ></b-avatar>
            </div>
            <div class="col-md-8 p-0">
              <h5 class="c-dark-grey m-0">{{ getUser.agent.first_name }}</h5>
              <p class="c-dark-grey">Insurance Agent</p>
              <p class="c-online">
                Online <b-icon class="c-dark-grey" icon="chevron-down"></b-icon>
              </p>
            </div>
            <div class="col-md-1 p-0">
              <b-icon icon="gear"></b-icon>
            </div>
            <div class="col-md-12 mt-4 p-0 position-relative">
              <input
                type="search"
                name="searchuser"
                placeholder="Search for people"
                v-model="searchQuery"
                id="searchChatInput"
              />
              <i class="fas fa-search search-icon"></i>
            </div>
          </div>
          <div class="chatbox-body">
            <div
              class="user row"
              v-for="(data, xIndex) in resultQuery"
              :key="xIndex"
              :class="{ active: $route.params.id == xIndex }"
              @click="move(data, '/messaging/chat/' + xIndex)"
            >
              <div class="col-md-2 align-self-center">
                <b-avatar
                  :src="ImageUrl + 'agent/' + data.image"
                  size="40px"
                ></b-avatar>
              </div>
              <div class="col-md-7">
                <h5 class="c-dark-grey">{{ data.name }}</h5>
                <p class="c-grey f-12">How is work going?</p>
              </div>
              <div class="col-md-3">
                <p class="c-grey f-10">2 hours</p>
              </div>
            </div>
          </div>
          <button class="btn-block btn-blue br-10 new-message-btn">
            <b-icon icon="plus-circle" class="me-2 f-18"></b-icon>
            New Message
          </button>
        </div>
      </div>
      <div class="col-md-8 p-0">
        <RouterView class="messaging-view" name="messaging" />
      </div>
    </BRow>
  </div>
</template>
<script>
import db from "../../../db";
import moment from "moment";
import { mapGetters } from "vuex";
import _ from "lodash";

export default {
  computed: {
    ...mapGetters(["getEvent", "getUser", "getReceiver"]),
    ImageUrl() {
      return process.env.VUE_APP_IMAGE_URL;
    },
    resultQuery() {
      if (this.searchQuery) {
        return this.users.filter((data) =>
          data.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        return this.users;
      }
    },
  },
  data() {
    return {
      // users: ["Dan Agyemang", "Dan", "Agyemang","Dan Agyemang", "Dan", "Agyemang","Dan Agyemang", "Dan", "Agyemang","Dan Agyemang", "Dan", "Agyemang",],
      users: [],
      searchQuery: "",
      moment: moment,
      reciever: "",
    };
  },
  methods: {
    move(data, to) {
      this.$router.push({ path: to });
      //  this.GetAllMessages(data)
      this.$store.commit("SET_RECEIVER", {});
      this.$store.commit("SET_RECEIVER", data);
      this.GetMsg2(data);
    },

    GetMsg2(rec) {
      let vm = this;
      let allConversion = [];
      const users = db
        .database()
        .ref("/Chat")
        .once("value")
        .then((data) => {
          const values = data.val();
          console.log("Auth User", vm.getUser.agent.firebase_uid);
          console.log("rec User", rec.firebase_uid);
          console.log("Rec User", vm.getReceiver.firebase_uid);
          console.log(" Msg", values);
          for (let key in values) {
            if (
              (values[key].sender == vm.getUser.agent.firebase_uid &&
                values[key].reciever == rec.firebase_uid) ||
              values[key].sender.toString() == rec.firebase_uid.toString() && rec.firebase_uid
            ) {
              console.log(key, values[key]);
              allConversion.push(values[key]);
            }
          }
        });

      vm.$store.commit("SET_RECEIVER_MSG", {});
      vm.$store.commit("SET_RECEIVER_MSG", allConversion);
    },

    GetMsg(rec) {
      console.log("receiver", rec);
      let vm = this;
      let allConversion = [];

      let values2 = db.database().ref("/Chat");
      values2.once("value").then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          // key will be "ada" the first time and "alan" the second time
          var key = childSnapshot.key;
          // childData will be the actual contents of the child
          var childData = childSnapshot.val();
          // if( childData.sender == vm.getUser.agent.firebase_uid  && childData.receiver ==  rec.firebase_uid )  {

          if (
            childData.sender == vm.getUser.agent.firebase_uid &&
            childData.reciever == rec.firebase_uid
          ) {
            // if(childData.reciever == rec.firebase_uid)
            allConversion.push(childData);

            vm.$store.commit("SET_RECEIVER_MSG", {});
            vm.$store.commit("SET_RECEIVER_MSG", allConversion);
          }
          // if( childData.sender == rec.firebase_uid && childData.reciever ==  vm.getUser.agent.firebase_uid){
          //     // if(childData.reciever == vm.getUser.agent.firebase_uid)
          //     allConversion.push(childData)

          //   vm.$store.commit('SET_RECEIVER_MSG',{})
          //   vm.$store.commit('SET_RECEIVER_MSG',allConversion)
          // }
          //  if( childData.sender == rec.firebase_uid  && childData.receiver == vm.getUser.agent.firebase_uid  ){
          //      allConversion.push(childData)

          //   vm.$store.commit('SET_RECEIVER_MSG',{})
          //   vm.$store.commit('SET_RECEIVER_MSG',allConversion)
          //  }
        });
      });

      // let values = db.database().ref('/Chat').orderByChild('sender').equalTo(vm.getUser.agent.firebase_uid);
      //       values.once("value")
      // .then(function(snapshot) {
      //   snapshot.forEach(function(childSnapshot) {
      //   // key will be "ada" the first time and "alan" the second time
      //   var key = childSnapshot.key;
      //   // childData will be the actual contents of the child
      //   var childData = childSnapshot.val();
      //     if( childData.receiver == rec.firebase_uid || childData.receiver ==vm.getUser.agent.firebase_uid ){
      //       allConversion.push(childData)
      //       vm.$store.commit('SET_RECEIVER_MSG',{})
      //       vm.$store.commit('SET_RECEIVER_MSG',allConversion)
      //     }
      //   });
      // });

      setTimeout(function () {
        console.log("data All", allConversion);
        let mtArr = [];
        //  allConversion.filter((item) => {
        //     if( item.receiver == rec.firebase_uid)
        //         mtArr.push(item)
        //         vm.$store.commit('SET_RECEIVER_MSG',{})
        //         vm.$store.commit('SET_RECEIVER_MSG',mtArr)
        // })
        // console.log('Ar',mtArr)
      }, 1000);
    },

    // GetMsg(rec) {
    //   console.log('reciever',rec)
    //    let vm = this
    //   let allConversion=[]

    //   let user =  JSON.parse(JSON.stringify(vm.getUser.agent.firebase_uid))
    //   let reciever =  JSON.parse(JSON.stringify(rec.firebase_uid))

    //   const rec_msg =  db.database().ref("/Chat").once('value')
    //   .then(data => {
    //     const values = data.val()
    //     for(let key in values){
    //       // let va =  JSON.parse(JSON.stringify(values[key]))
    //       // console.log(va)
    //       allConversion.push(values[key])
    //     }
    //   });
    //   console.log('test',allConversion)
    // setTimeout(function(){
    //     let mtArr = []
    //     allConversion.filter((item) => {
    //     console.log('item',item.reciever)
    //     // item.sender == vm.getUser.agent.firebase_uid && item.reciever==rec.firebase_uid  ||
    //         if( item.reciever === reciever && item.sender === user || item.sender == rec.firebase_uid  && item.reciever==vm.getUser.agent.firebase_uid)
    //            {
    //              mtArr.push(item)
    //           }

    //     })
    //     console.log('totaarrrrrl',mtArr)
    //     vm.$store.commit('SET_RECEIVER_MSG',{})
    //     vm.$store.commit('SET_RECEIVER_MSG',mtArr)
    //     console.log('total',allConversion)
    //   },1000)
    // },

    getAllUser() {
      let vm = this;
      let allUsers = [];
      const users = db
        .database()
        .ref("/Users")
        .once("value")
        .then((data) => {
          const values = data.val();
          for (let key in values) {
            // console.log(vm.getUser)
            if (values[key].firebase_uid != vm.getUser.agent.firebase_uid)
              allUsers.push(values[key]);
          }
        });
      vm.users = allUsers;
    },
  },

  mounted() {
    this.getAllUser();
  },
};
</script>
<style lang="scss">
.messaging {
  background: #f3f3f3;
  .online-users {
    position: relative;
    min-height: calc(100vh - 250px);
    #searchChatInput {
      background: #fff !important;
      width: 100%;
      border-radius: 50px !important;
      border: 1px solid var(--blue) !important;
      padding-left: 50px !important;
      &:focus-visible {
        outline: none !important;
      }
    }
    i.fas.fa-search.search-icon {
      position: absolute;
      left: 15px;
      top: 15px;
      font-size: 20px;
    }
    .header {
      padding: 20px 10px;
    }

    .chatbox-body {
      max-height: calc(100vh - 500px);
      overflow: auto;

      .user.row {
        padding: 10px 0;
        cursor: pointer;
        transition: 0.3s all ease;
        &:hover {
          background: #fff;
        }
        &.active {
          background: #fff;
        }
      }
    }
    .new-message-btn {
      position: absolute;
      bottom: 0;
      width: 94%;
      margin-left: 3%;
      margin-top: 17px;
    }
  }
}
.c-online {
  color: #76c00d;
}
</style>