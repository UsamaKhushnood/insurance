<template >
    <div class="notificaiton">
        <div class="col-md-8">
        <div class="my-events-list box-shadow">
          <h3 class="c-blue text-center mb-4">All Notification</h3>
          <div
            class="row event align-items-center"
            v-for="(data, id) in notifications"
            :key="id"
          >
            <!-- <div class="col-md-3 event-img"> -->
              <!-- <img src="@/assets/images/player2.png" /> -->
              <!-- <img :src="ImageUrl+'event/'+data.image" /> -->
            <!-- </div> -->
            <div class="col-md-6 d-flex flex-column">
              <h6 class="event-title f-18 fw-9 c-blue">
                {{data.title}}
              </h6>
              <p>{{data.message}}</p>
              <div class="time fw-7">
                <b-icon icon="clock" class="me-2 c-yellow"></b-icon>
                <span>{{data.date}}</span>
              </div>
             
            </div>
            
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
     data() {
    return {
      notifications: [
        // 12
      ],
    };
  },
   methods: {
    move(to,data) {
      this.$router.push({ path: to });
      // this.$store.commit("SET_SELECTED_EVENT", data);
    },
   async getMyNotifications(){
      const vm = this;
    //   vm.$store.commit("SET_SPINNER", true);
      await axios
        .get(process.env.VUE_APP_API_URL+vm.$store.state.user.user_type+"/all-notification/")
        .then((response) => {
          console.log('data::',response.data.data);
          vm.$store.commit("SET_SPINNER", false);
          // this.acceptEvents= response.data.data 
          vm.$store.commit("SET_EVENT_DATA", null);
          vm.$store.commit("SET_EVENT_DATA", response.data.data );      
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
}
</script>
<style lang="scss">
.my-events {
  .my-events-list {
    background: #fff;
    padding: 20px;
    overflow: auto;
    height: calc(100vh - 200px);
    min-height: 650px;
    .event {
      border-bottom: 1px solid #d1d1d1;
      padding: 20px 0;
      .event-img img {
        border-radius: 50%;
        width: 100px;
      }
      button.view-event-btn {
        padding: 5px;
        border-radius: 5px !important;
        border: 1px solid #fff;
        box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
        &:hover {
          background: var(--blue);
        }
      }
    }
  }
}
</style>