<template>
  <div class="explore-topic">
    <BRow>
      <BCol cols="12">
        <div class="forum-posts">
          <div class="single-forum-post">
            <div class="fp-votes">
              <b-icon icon="arrow-up" variant="dark" @click="likedTopic(post.id)"></b-icon>
              <p class="fp-count fw-7 f-18  votes-count">{{post.like}}</p>
              <b-icon icon="arrow-down" variant="danger" @click="dislikedTopic(post.id)"></b-icon>
            </div>
            <div>
              <div class="fp-body">
                <h4 class="fp-title">{{ post.title }}</h4>
                <h6 class="fp-post-desc mt-3" v-html="post.description"></h6>
              </div>
              <div class="fp-footer mt-4">
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <div class="d-flex align-items-center">
                      <b-avatar
                        variant="info"
                          :src="ImageUrl+'/agent/'+post.user.agent.image"
                        class="mr-3"
                      ></b-avatar>
                      <span class="ms-3 fw-7">
                        Posted By:
                        <span class="text-primary">{{
                          post.user.agent.first_name
                        }}</span>
                      </span>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <span class="fw-7">{{
                      moment(post.created_at).fromNow()
                    }}</span>
                  </div>
                  <div class="col-md-3 d-flex align-items-center">
                    <b-icon
                      icon="chat-left-text-fill"
                      class="f-20 ms-auto c-blue"
                    ></b-icon>
                    <span class="fw-7 ms-3">{{ post.comments.length }}</span>
                  </div>
                </div>
              </div>
              <div class="reply-section mt-4">
                <h6 class="c-black">Post your reply</h6>
                <VueEditor v-model="comment" />
                <div class="text-end mt-1">
                  <button
                    class="btn-blue br-10 w-25"
                    @click="commentReply(post.id)"
                  >
                    Reply
                  </button>
                </div>
                <div class="recent-replies">
                  <div class="replies-h mt-5">
                    <h5 class="replies-h5">
                      you've reached to begining of replies
                    </h5>
                    <div class="back-border"></div>
                  </div>
                  <div
                    class="reply row"
                    v-for="(reply, xIndex) in replies"
                    :key="xIndex"
                  >
                    <div class="col-md-2">
                      <!-- src="https://placekitten.com/300/300" -->
                      <b-avatar
                        :src="ImageUrl + '/agent/' + reply.user.agent.image"
                        size="4rem"
                      ></b-avatar>
                    </div>
                    <div class="col-md-10 reply-box">
                      <h5 class="reply-user-name">
                        {{ reply.user.agent.first_name  }}
                      </h5>
                      <p class="f-12" v-html="reply.comment"></p>
                      <div class="icons mt-3">
                        <i :class=" reply.comment_user_liked.liked == '1' ?'fa fa-thumbs-up ms-3 like' :'fa fa-thumbs-up ms-3'" @click="likedComment(reply.id)"></i>
                        <span>{{ reply.like }}</span>
                        <i :class=" reply.comment_user_liked.liked == '0' ?'fa fa-thumbs-down ms-3 dislike' :'fa fa-thumbs-down ms-3'" @click="dislikeComment(reply.id)"></i>
                        {{ reply.dislike }}
                      </div>
                    </div>
                  </div>
                  <div class="replies-h mt-5">
                    <h5 class="replies-h5">you've reached to end of replies</h5>
                    <div class="back-border"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BCol>
      <!-- <BCol cols="4">
        <TopContributers />
      </BCol> -->
    </BRow>
  </div>
</template>
<script>
import moment from "moment";
// import TopContributers from "@/components/forum/TopContributers";
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
import axios from "axios";
export default {
  components: { VueEditor },
  computed: {
    ImageUrl() {
      return process.env.VUE_APP_IMAGE_URL;
    },
  },
  data() {
    return {
      replies: [],
      post: "",
      moment: moment,
      comment: "",
      totalVote:''
    };
  },
  methods: {
    async getSelectedTopic() {
      const vm = this;
      vm.$store.commit("SET_SPINNER", true);
      // alert(this.$router.id);
      await axios
        .get(
          process.env.VUE_APP_API_URL +
            vm.$store.state.user.user_type +
            "/topics/" +
            this.$route.params.id
        )
        .then((response) => {
          console.log("data::", response.data.data);

          vm.post = response.data.data;
          vm.replies = response.data.data.comments;
        })
        .catch((errors) => {
          console.log(errors);
          if (errors.response)
            this.$toast.error(errors.response.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
        });
    },
    async commentReply(id) {
      if (this.comment == "") {
        return;
      }
      const vm = this;
      vm.$store.commit("SET_SPINNER", true);
      await axios
        .post(
          process.env.VUE_APP_API_URL +
            vm.$store.state.user.user_type +
            "/comment/" +
            id,
          { comment: this.comment }
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
            vm.getSelectedTopic();
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
            vm.comment = "";
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
      async likedComment(id) {
      
      const vm = this;
      vm.$store.commit("SET_SPINNER", true);
      await axios
        .post(
          process.env.VUE_APP_API_URL +
            vm.$store.state.user.user_type +
            "/like-comment/" +
            id,
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
            vm.getSelectedTopic();
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
      async dislikeComment(id) {
      const vm = this;
      vm.$store.commit("SET_SPINNER", true);
      await axios
        .post(
          process.env.VUE_APP_API_URL +
            vm.$store.state.user.user_type +
            "/dislike-comment/" +
            id,
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
            vm.getSelectedTopic();
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
      async likedTopic(id) {
      
      const vm = this;
      vm.$store.commit("SET_SPINNER", true);
      await axios
        .post(
          process.env.VUE_APP_API_URL +
            vm.$store.state.user.user_type +
            "/like-topic/" +
            id,
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
            vm.totalVote=response.data.data.total;
            vm.getSelectedTopic();
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
      async dislikedTopic(id) {
      const vm = this;
      vm.$store.commit("SET_SPINNER", true);
      await axios
        .post(
          process.env.VUE_APP_API_URL +
            vm.$store.state.user.user_type +
            "/dislike-topic/" +
            id,
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
            vm.totalVote=response.data.data.total;
            vm.getSelectedTopic();
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
    this.getSelectedTopic();
  },
};
</script>
<style lang="scss">
.c-black {
  color: #000;
}
.explore-topic {
  .forum-posts {
    max-height: calc(100vh - 220px);
    min-height: 650px;
    overflow: auto;
    padding: 15px;
    padding-top: 5px;
    .single-forum-post {
      display: flex;
      background-color: #fff;
      border-radius: 10px;
      padding: 30px 40px 25px 0;
      color: var(--grey);
      margin-bottom: 25px;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      .fp-votes {
        align-items: center;
        display: flex;
        min-width: 100px;
        flex-direction: column;
        .votes-count {
          height: 50px;
          display: flex;
          align-items: center;
        }
        svg.bi-arrow-up,
        svg.bi-arrow-down {
          font-size: 30px;
        }
      }
      .fp-body {
        border-bottom: 1px solid #d1d1d1;
        text-align: justify;
        padding-bottom: 25px;
      }

      .replies-h {
        text-align: center;
        margin-bottom: 20px;
        text-transform: capitalize;
        color: #000;
        font-weight: 700;
        position: relative;
        z-index: 9;
        height: 50px;
        .replies-h5 {
          width: fit-content;
          margin: 0 auto;
          background: #fff;
          z-index: 999;
          position: absolute;
          transform: translate(-50%);
          left: 50%;
          top: 0px;
          padding: 0 25px;
        }
        .back-border {
          border: 1px solid var(--grey);
          width: 100%;
          position: absolute;
          left: 0;
          top: 10px;
          z-index: 0;
        }
      }

      .reply {
        background: var(--light-grey);
        padding: 10px;
        border: 1px solid var(--blue);
        color: #000;
        margin-bottom: 10px !important;
      }

      // editor styling

      .ql-toolbar.ql-snow {
        border: none;
        filter: contrast(0.5);
      }
      div#quill-container {
        border: 0;
        .ql-editor {
          box-shadow: inset 0 3px 10px rgb(0 0 0 / 20%);
          background: var(--light-grey);
          border-radius: 5px;
        }
      }
    }
  }
}

.like{
  color: #0000ff;
}

.dislike{
  color: #ff0000;
}
</style>
