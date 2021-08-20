<template >
  <div class="support">
    <div class="row">
      <div class="col-md-8">
        <div class="support-chat-box">
          <div class="header">
            <div class="naigia-logo">
              <img src="@/assets/logo.png" width="100px" />
            </div>
            <h1 class="heading">NAGIA Support Team</h1>
          </div>
          <div class="chatbox-body bg-white">
            <div class="messages-box">
              <div class="user-messages" v-for="(adminmsg ,index) in adminMessages" :key="index">
                <div class="user-avatar">
                  <b-avatar
                    variant="info"
                    src="https://placekitten.com/300/300"
                    class="mr-3"
                  ></b-avatar>
                </div>
                <div class="messages">
                  
                  <p class="message">{{adminmsg.body}}</p>
                </div>
                <div class="time f-10">9:27 A.M</div>
              </div>
              <div class="my-messages"  v-for="(agentmsg ,index) in agentMessages" :key="index">
                <div class="my-avatar">
                  <b-avatar
                    variant="info"
                    src="https://placekitten.com/300/300"
                    class="mr-3"
                  ></b-avatar>
                </div>
                <div class="messages">
                  <p class="message">
                      {{agentmsg.body}}                    
                  </p>
                 
          
                </div>
                <div class="time f-10">9:27 A.M</div>
              </div>
            </div>
            <div class="chatbox-footer">
              <div class="chatbox-input">
                <input
                  type="text"
                  v-model="message"
                  placeholder="Enter you message here"
                  class="chatbox-input-feild"
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
                <button class="chat-options-btn send-msg-btn" @click="sendMessage">
                  <i class="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <nagia-contact></nagia-contact>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
import NagiaContact from "../components/NagiaContact.vue";
export default {
  name:'Support',
  components: { NagiaContact },
   data() {
    return {
      moment:moment,
      message:'',
      adminMessages:[],
      agentMessages:[],
      consumerMessage:[],
      allMessages: [

      ],
    };
  },
  methods:{
          
    async getAllMessage(){
      let vm = this;
        vm.$store
        .dispatch("HTTP_GET_REQUEST", this.$store.state.user.user_type+`/get-messages`)
        .then((response) => {
          console.log("re", response.data.data);
             if (response.data.status == false) {
            vm.$toast.error(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          } else {
              vm.allmessages = response.data.data;
                 response.data.data.filter(function(item) {
                   if(item.type =='agent' ||item.type =='consumer'){
                     vm.agentMessages.push(item)
                   }else{
                     vm.adminMessages.push(item)
                   }
              });
          }
        })
        .catch((error) => {
          let errors = error.response.data.errors;
          vm.$toast.error(errors.response.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        });
    },
      async sendMessage() {
      const vm = this;
      vm.$store.commit("SET_SPINNER", true);
      await axios
        .post(
          process.env.VUE_APP_API_URL +
            vm.$store.state.user.user_type +
            "/send-message/" ,{message:this.message}
        )
        .then((response) => {
          console.log("data::", response.data.data);
          vm.$store.commit("SET_SPINNER", false);

          if (response.data.status == false) {
            vm.$toast.error(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          } else {
            vm.message='';
            vm.getAllMessage();
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
        
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
    mounted() {
    this.getAllMessage();
  },
};
</script>
<style lang="scss">
.support {
  .support-chat-box {
    .header {
      display: flex;
      align-items: center;
      background: linear-gradient(
        202deg,
        rgba(19, 174, 255, 1) 0%,
        rgba(0, 46, 98, 1) 100%
      );
      padding: 20px;
      border-radius: 30px 30px 0 0;
      color: #fff;
      .heading {
        margin-left: 20px;
      }
    }
    .chatbox-body {
      min-height: calc(100vh - 400px);
      max-height: calc(100vh - 400px);
      overflow: auto;
      padding: 20px;
      position: relative;
      .messages-box {
        max-height: calc(100vh - 550px);
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