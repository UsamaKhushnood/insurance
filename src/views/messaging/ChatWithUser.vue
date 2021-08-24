<template >
  <div class="chat">
    <div class="chat-chat-box">
      <div class="header">
        <h3 class="heading">Dan Agyemang</h3>
      </div>
      <div class="chatbox-body bg-white">
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                debitis vero inventore possimus quaerat odit iure, hic dicta
                repellendus incidunt nam reprehenderit eum dolorem officia
                autem, earum ex quod explicabo!
              </p>
              <p class="message">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                debitis vero inventore possimus quaerat odit iure, hic dicta
                repellendus incidunt nam reprehenderit eum dolorem officia
                autem, earum ex quod explicabo!
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
          </div>
        </div>
        <div class="chatbox-footer">
          <div class="chatbox-input">
            <input
              type="text"
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
            <button class="chat-options-btn send-msg-btn">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from '../../../db';
import moment from 'moment';
import { mapGetters } from 'vuex';
export default {
  name:"ChatWithUser",
  computed:{
    ...mapGetters(['getUser']),
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
    
    getUserChat() {
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
    this.getUserChat();
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
      .messages-box {
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