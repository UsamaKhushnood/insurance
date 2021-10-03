<template >
  <div class="upcoming-events" v-if="event.lenght >0">
    <div class="event">
      <div class="event-img">
             <img class="event-img" :src="ImageUrl+'event/'+event.image" />
      </div>
      <div class="event-body">
        <h6 class="c-blue f-18 fw-9">{{event.name}}</h6>
        <div class="event-time fw-6">
          <b-icon icon="clock" class="me-2 c-yellow"></b-icon>
             {{ moment(event.created_at).fromNow() }}
        </div>
        <div class="event-location fw-6">
          <b-icon icon="geo-alt-fill" class="me-2 c-yellow"></b-icon>
          {{event.title}}
        </div>
        <button class="view-event-btn btn-yellow btn-block mt-3"  @click="move('event-details/' + event.id,event)">
          View Details
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name:'UpcommingEvent',
   data() {
    return {
      moment: moment,
      event: [],
    };
  },
  computed: {
    ImageUrl() {
      return process.env.VUE_APP_IMAGE_URL;
    },
  },
  methods: {
    del(x) {
      this.notifications.splice(x, 1);
    },
    move(to) {
      this.$router.push({ path: to });
    },
   async getLatestEvent(){
      const vm = this;
    //   vm.$store.commit("SET_SPINNER", true);
      await axios
        .get(process.env.VUE_APP_API_URL+vm.$store.state.user.user_type+"/latest-event")
        .then((response) => {
          console.log('data::',response.data.data);
          vm.$store.commit("SET_SPINNER", false);
      
          vm.notifications= response.data.data;      
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
    this.getLatestEvent();
  } 
};
</script>
<style lang="scss">
.event {
  background: #fff;
  border-radius: 0;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  .event-img img {
    width: 100%;
  }
  .event-body {
    padding: 10px;
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
</style>