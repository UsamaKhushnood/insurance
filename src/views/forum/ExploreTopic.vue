<template >
  <div class="explore-topic">
    <BRow>
      <BCol cols="8">
        <div class="forum-posts">
          <div
            class="single-forum-post"
            v-for="(post, pIndex) in formPost"
            :key="pIndex"
          >
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
                        <span class="text-primary">
                        {{
                          post.user.agent.first_name
                        }}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <span class="fw-7">{{
                      moment(post.created_at).fromNow()
                    }}</span> 
                  </div>
                  <div class="col-md-3 d-flex align-items-center pointer" @click="move('topic/' + post.id)">
                    <b-icon
                      icon="chat-left-text-fill"
                      class="f-20 ms-auto c-blue"
                    ></b-icon>
                    <span class="fw-7 ms-3">{{ post.comments.length }}</span>

                  </div>
                </div>
              </div>
               
            </div>
          </div>
        </div>
      </BCol>
      <BCol cols="4">
        <TopContributers />
      </BCol>
    </BRow>
  </div>
</template>
<script>
import moment from "moment";
import axios from "axios";
import TopContributers from "@/components/forum/TopContributers";
// import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";

export default {
  components: { TopContributers },
  data() {
    return {
      formPost: [],
      post: "",
      moment: moment,
      comment: "",
      total: "",
    };
  },
   computed: {
    ImageUrl() {
      return process.env.VUE_APP_IMAGE_URL;
    },
  },
  methods: {
    move(to) {
      this.$router.push({ path: to });
    },
      
    async getExploreTopics(){
      let vm = this;
        vm.$store
        .dispatch("HTTP_GET_REQUEST", this.$store.state.user.user_type+`/topics`)
        .then((response) => {
          console.log("re", response.data);
              if (response.data.status == false) {
            vm.$toast.error(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          } else {
          vm.formPost = response.data.date;
            // vm.$toast.success(response.data.message, {
            //   position: "top-right",
            //   closeButton: "button",
            //   icon: true,
            //   rtl: false,
            // });
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
            vm.getExploreTopics();
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
            vm.getExploreTopics();
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
    this.getExploreTopics();
  },
};
</script>
<style lang="scss">
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
</style>