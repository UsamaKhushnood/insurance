<template>
  <div class="messaging">
    <BRow class="row">
      <div class="col-md-4 p-0 box-shadow">
        <div class="online-users">
          <div class="header row">
            <div class="col-md-3 p-0">
              <b-avatar
                :src="ImageUrl+'agent/'+getUser.agent.image"
                size="4rem"
              ></b-avatar>
            </div>
            <div class="col-md-8 p-0">
              <h5 class="c-dark-grey m-0">{{getUser.agent.first_name}}</h5>
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
              @click="move('/messaging/chat/' + xIndex)"
            >
              <div class="col-md-2 align-self-center">
                <b-avatar
                 :src="ImageUrl+'agent/'+data.image"
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
import db from '../../../db';
import moment from 'moment';
import { mapGetters } from 'vuex';

export default {
    computed:{
    ...mapGetters(['getEvent','getUser']),
    ImageUrl(){
      return process.env.VUE_APP_IMAGE_URL
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
      users:[],
      searchQuery:'',
      moment:moment,
      reciever:''
};
  },
  methods: {
    move(to) {
      this.$router.push({ path: to });
    },
    
    SendMessage() {
    const messagesRef = db.database().ref("Conversation");

    if (inputMessage.value === "" || inputMessage.value === null) {
      return;
    }

    const message = {
      username: state.username,
      content: inputMessage.value
    }

    messagesRef.push(message);
    inputMessage.value = "";
    },
    
    getAllUser() {
       let vm = this 
       let allUsers=[]
      const users = db.database().ref("/Users").once('value')
      .then(data => {
        const values = data.val()
        for(let key in values){
          console.log(vm.getUser)
          if(values[key].firebase_uid != vm.getUser.agent.firebase_uid)
          allUsers.push(values[key])
        }
      });
      vm.users = allUsers;
      console.log('users',allUsers)
    }

  },
  mounted(){
    this.getAllUser();
  }
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