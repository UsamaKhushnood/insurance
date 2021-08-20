<template >
  <div class="top-contributers">
    <router-link
      to="start-new-topic"
      tag="button"
      class="start-new-topic-btn"
    >
      <b-icon icon="plus-circle-fill" class="me-2"></b-icon>
      Start a New Topic
    </router-link>
    <div class="contributers-list">
      <h6 class="c-grey">Top Contributers</h6>
      <div
        class="contributer d-flex align-items-center mt-4"
        v-for="(contributer, xIndex) in contributers"
        :key="xIndex"
      >
        <b-avatar
          variant="info"
           :src="ImageUrl+'/agent/'+contributer.agent.image"
          class="me-2"
        ></b-avatar>
        <span class="ms-1 f-14 c-grey fw-7">{{contributer.agent.first_name}}</span>
        <span class="ms-auto c-grey f-16 fw-7"> {{contributer.topics_count}}+ </span>
        <b-icon icon="arrow-up" class="text-primary f-20 ms-1"></b-icon>
      </div>

      <!-- <div class="me d-flex align-items-center mt-4">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="me-2"
        ></b-avatar>
        <span class="ms-1 f-14 text-primary fw-7 ">Janet Owusu</span>
        <span class="ms-auto c-grey f-16 fw-7"> 51+ </span>
        <b-icon icon="arrow-up" class="text-primary f-20 ms-1"></b-icon>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name:"TopContributers",
  data() {
    return {
      contributers: [],
    };
  },
   computed: {
    ImageUrl() {
      return process.env.VUE_APP_IMAGE_URL;
    },
  },
  methods:{
    async getMyTopics(){
      let vm = this;
        vm.$store
        .dispatch("HTTP_GET_REQUEST", this.$store.state.user.user_type+`/top-contributer`)
        .then((response) => {
          console.log("redasd", response.data.data);
              if (response.data.status == false) {
            vm.$toast.error(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          } else {
          vm.contributers = response.data.data;
           
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
    }
  
  },
   mounted() {
    this.getMyTopics();
  },
  
};
</script>
<style lang="scss">
.top-contributers {
  button.start-new-topic-btn {
    border: 1px solid #fff;
    width: 100%;
    padding: 8px;
    background: var(--blue);
    color: var(--yellow);
    border-radius: 5px;
    font-size: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    transition: 0.3s all ease;
    &:hover {
      background: var(--yellow);
      color: var(--blue);
    }
  }

  .contributers-list {
    margin-top: 20px;
    background: #fff;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    border-radius: 5px;
    padding: 15px;
    .me {
      border-top: 1px solid #d1d1d1;
      padding-top: 15px;
    }
  }
}
</style>