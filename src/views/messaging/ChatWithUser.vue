<template >
  <div class="chat">
    <div class="chat-chat-box">
      <div class="header">
        <h3 class="heading">{{getReceiver.name}}</h3>
      </div>
      <div class="chatbox-body bg-white">

 <!--  new design -->
 <!-- <div class="messages-container">
          <div class="messages-box">
            <div class="my-messages">
              <div class="my-avatar">
                <b-avatar
                  variant="info"
                  src="https://placekitten.com/300/300"
                  class="mr-3"
                ></b-avatar>
              </div>
              <div class="messages">
                <p class="message">What's up Franky!</p>
                <p class="message">What's up Franky!</p>
                <p class="message">What's up Franky!</p>
              </div>
              <div class="time f-10">9:27 A.M</div>
            </div>
            <div class="user-messages">
              <div class="user-avatar">
                <b-avatar
                  variant="info"
                  src="https://placekitten.com/300/300"
                  class="mr-3"
                ></b-avatar>
              </div>
              <div class="messages">
                <p class="message">Hi George! Nice to hear you again!</p>
                <p class="message">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis obcaecati architecto suscipit velit iure ipsa dolor
                  totam repudiandae cumque dolore!
                </p>
                <p class="message">Hi George! Nice to hear you again!</p>
              </div>
              <div class="time f-10">9:27 A.M</div>
            </div>
            <div class="my-messages">
              <div class="my-avatar">
                <b-avatar
                  variant="info"
                  src="https://placekitten.com/300/300"
                  class="mr-3"
                ></b-avatar>
              </div>
              <div class="messages">
                <p class="message">What's up Franky!</p>
                <p class="message">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Alias debitis vero inventore possimus quaerat odit iure, hic
                  dicta repellendus incidunt nam reprehenderit eum dolorem
                  officia autem, earum ex quod explicabo!
                </p>
                <p class="message">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Alias debitis vero inventore possimus quaerat odit iure, hic
                  dicta repellendus incidunt nam reprehenderit eum dolorem
                  officia autem, earum ex quod explicabo!
                </p>
                <p class="message latest-message">What's up Franky!</p>
              </div>
              <div class="time f-10">9:27 A.M</div>
            </div>
            <div class="user-messages">
              <div class="user-avatar">
                <b-avatar
                  variant="info"
                  src="https://placekitten.com/300/300"
                  class="mr-3"
                ></b-avatar>
              </div>
              <div class="messages">
                <p class="message typing-message">Franky is typing...</p>
              </div>
              <div class="time f-10">9:27 A.M</div>
            </div> -->
<!-- end new design -->


        <div class="messages-box" v-for="(chat ,index) in getReceiverMsg" :key="index">
           
          <div class="my-messages" v-if="chat.sender === getReceiver.firebase_uid || chat.receiver === getReceiver.firebase_uid " >
            <div class="my-avatar">
              <b-avatar
                variant="info"
              :src="ImageUrl+'agent/'+getReceiver.image"
                class="mr-3"
              ></b-avatar>
            </div>
            <div class="messages">
              <p class="message">{{chat.message}}</p>
            </div>
            <div class="time f-10">{{chat.time}}</div>
          </div>
          <div class="user-messages" v-if="chat.sender === getUser.agent.firebase_uid  ||  chat.receiver === getUser.agent.firebase_uid">
            <div class="user-avatar">
              <b-avatar
                variant="info"
              :src="ImageUrl+'agent/'+getUser.agent.image"
                class="mr-3"
              ></b-avatar>
            </div>
            <div class="messages">
              <p class="message">{{chat.message}}</p>
            </div>
            <div class="time f-10">{{chat.time}}</div>
          </div>
      
        </div>

        <div class="chatbox-footer">
          <div class="chatbox-input">
            <input
              type="text"
              placeholder="Enter you message here"
              class="chatbox-input-feild"
              v-model="message"
              @keyup.enter="trigger" 
            />
            <div class="message-box-input-group">
              <button class="chat-options-btn smily">
                <i class="far fa-smile"></i>
              </button>
              <label class="chat-options-btn attach">
                <input type="file" />
                <i class="fas fa-paperclip"></i>
              </label>
            </div>
            <button class="chat-options-btn send-msg-btn" ref="sendMsg"   @click="sendMessage">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from "../../../db";
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  name:"ChatWithUser",
  computed:{
    ...mapGetters(['getUser','getReceiver','getReceiverMsg']),
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
      IsConversion:[],
      users:[],
      searchQuery:'',
      moment:moment,
      reciever:'',
      message:'',
      timestamp:moment().format("MM-d-YYYY HH:mm:ss"),
      time:moment().format("HH:mm a"),
      date:moment().format("d/MM/YYYY"),
    };
  },
  methods: {
    move(to) {
      this.$router.push({ path: to });
    },
    trigger() {
      this.$refs.sendMsg.click()
    },
    setConversion(){    
      const rec_msg2 = db.database().ref("/Conversation/").child(this.getUser.agent.firebase_uid).child(this.getReceiver.firebase_uid).set({
        id:this.getReceiver.firebase_uid,
        image:this.getReceiver.image,        
        last_message_time:this.time,        
        name:this.getReceiver.name,        
        timestamp:this.timestamp
      }).then(
        db.database().ref("/Conversation/").child(this.getReceiver.firebase_uid).child(this.getUser.agent.firebase_uid).set({
        id:this.getUser.agent.firebase_uid,
        image:this.getUser.agent.image,        
        last_message_time:this.time,        
        name:this.getUser.agent.first_name,        
        timestamp:this.timestamp
      }))
      
    },
    
    sendMessage() {
      if(this.message == ''){
        return;
      }
      let my_msg=
       { date:this.date,
        message:this.message,
        sender:this.getUser.agent.firebase_uid,
        reciever:this.getReceiver.firebase_uid,
        itemType:'text',
        time:this.time,
        timestamp:this.timestamp
       }
      let  new_Msg = JSON.parse(JSON.stringify(my_msg))
      this.setConversion()
      
      db.database().ref("/Chat").push(new_Msg)
      this.message ='';
      this.GetAllMsg()
    },
    //get all msg

    GetAllMsg() {
      console.log('reciever',rec)
      let rec = this.getReceiver
       let vm = this 
      let allConversion=[]
   
      let user =  JSON.parse(JSON.stringify(vm.getUser.agent.firebase_uid))
      let reciever =  JSON.parse(JSON.stringify(rec.firebase_uid))

      const rec_msg =  db.database().ref("/Chat").once('value')
      .then(data => {
        const values = data.val()
        for(let key in values){
          // let va =  JSON.parse(JSON.stringify(values[key]))
          // console.log(va)
          allConversion.push(values[key])
        }
      }); 
      console.log('test',allConversion)
      setTimeout(function(){
        let mtArr = []
        allConversion.filter((item) => { 
        console.log('item',item.reciever)    
        // item.sender == vm.getUser.agent.firebase_uid && item.reciever==rec.firebase_uid  ||
            if( item.reciever === reciever || item.sender === user && item.reciever === user ||  item.sender===reciever)
               {
                 mtArr.push(item)
              }
  
        })
        console.log('totaarrrrrl',mtArr)    
        vm.$store.commit('SET_RECEIVER_MSG',{}) 
        vm.$store.commit('SET_RECEIVER_MSG',mtArr) 
        console.log('total',allConversion)
      },1000)
    },


  },
  mounted(){
    // alert(moment().format("MM-d-YYYY HH:mm:ss"));
    // alert(moment().format("MM-d-YYYY HH:mm:ss a"));
  }
};
</script>
<style lang="scss">
.chat {
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  .chat-chat-box {
    .header {
      display: flex;
      align-items: center;
      background: #fff;
      padding: 20px;
      padding-bottom: 10px;
      color: var(--dark-grey);
      .heading {
        margin-left: 20px;
      }
    }
    .chatbox-body {
      min-height: calc(100vh - 310px);
      max-height: calc(100vh - 310px);
      overflow: auto;
      padding: 20px;
      position: relative;
      .messages-container {
        height: calc(100vh - 430px);
        max-height: calc(100vh - 430px);
        overflow: auto;
      }
      .my-messages {
        position: relative;
        .my-avatar {
          position: absolute;
          right: 5px;
          top: 0;
        }
        .messages {
          margin-right: 50px;
          .message {
            background: var(--grey);
            color: #fff;
            padding: 10px;
            width: fit-content;
            max-width: 70%;
            margin-left: auto;
            border-radius: 10px 0px 0 10px;
            margin-bottom: 5px;
            &:nth-child(1) {
              border-radius: 10px 10px 0 10px;
            }
          }
          p.message.latest-message {
            background: var(--yellow) !important;
            color: #000 !important;
          }
        }
        .time {
          position: absolute;
          right: 50px;
        }
      }
      .user-messages {
        position: relative;
        .user-avatar {
          position: absolute;
          left: 0;
          top: 0;
        }
        .messages {
          margin-left: 50px;
          .message {
            background: var(--light-grey);
            color: #000;
            padding: 10px;
            width: fit-content;
            max-width: 70%;
            border-radius: 0px 10px 10px 0px;
            margin-bottom: 5px;
            &:nth-child(1) {
              border-radius: 10px 10px 10px 0px;
            }
          }
          p.message.typing-message {
            border-radius: 10px 10px 10px 0px !important;
            font-size: 10px;
            background: #d5dff1 !important;
            padding: 5px 15px !important;
          }
        }
        .time {
          position: absolute;
          left: 50px;
        }
      }
      // footer css
      .chatbox-footer {
        position: absolute;
        width: calc(100% - 40px);
        bottom: 20px;
        .chatbox-input {
          input.chatbox-input-feild {
            position: relative;
            width: 100%;
          }
          .message-box-input-group {
            position: absolute;
            right: 50px;
            top: 10px;
            input[type="file"] {
              display: none;
            }
            label {
              margin: 0;
            }
            .chat-options-btn {
              background: no-repeat;
              border: none;
              width: 30px;
              height: 30px;
              cursor: pointer;
              text-align: center;
              transition: 0.3s all ease;
              &:hover {
                color: var(--yellow);
              }
            }
          }
          .send-msg-btn {
            background: var(--yellow) !important;
            border-radius: 50%;
            border: 0;
            width: 30px;
            height: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 10px;
            right: 15px;
            transition: 0.3s all ease;
            &:hover {
              color: var(--blue);
            }
          }
        }
      }
    }
  }
}
</style>