<template>
  <div class="upcoming-meeting box-shadow">
    <h4 class="c-grey">Upcoming Meetings</h4>
    <div class="meeting" v-for="(meeting, Index) in meetings" :key="Index">
      <div class="smeeting" :class="meeting.bg">
        <div class="meeting-details">
          <p class="f-10">
          {{meeting.description}}
          </p>
        </div>
        <div class="meeting-timing mt-2">
          <span class="fw-7 f-12">{{moment(meeting.start_time, ["HH.mm A"]).format("LT")}} - {{moment(meeting.end_time, ["HH.mm A"]).format("LT")}}</span>
        </div>
        <div class="members mt-2">
          <b-avatar-group size="30px">
            <!-- <b-avatar
              src="https://placekitten.com/300/300"
              variant="info"
            ></b-avatar>
            <b-avatar
              src="https://placekitten.com/300/300"
              variant="info"
            ></b-avatar> -->
            <!-- <b-avatar
              src="https://placekitten.com/300/300"
              variant="info"
            ></b-avatar>
            <b-avatar
              src="https://placekitten.com/300/300"
              variant="info"
            ></b-avatar>
            <b-avatar
              src="https://placekitten.com/320/320"
              variant="dark"
            ></b-avatar> -->
          </b-avatar-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      moment:moment,
      meetings: [
        // { background: "m-green" },
        // { background: "m-yellow" },
        // { background: "m-red" },
        // { background: "m-purple" },
      ],
    };
  },
  methods:{
    async getMeeting(){
      let vm = this;
        vm.$store
        .dispatch("HTTP_GET_REQUEST", this.$store.state.user.user_type+`/upcoming-meeting`)
        .then((response) => {
          console.log("re", response.data.data);
              if (response.data.status == false) {
            // vm.$toast.error(response.data.message, {
            vm.$toast.error('No UpComming Meetings Found', {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          } else {
          vm.meetings = response.data.data;
         
          }
        })
        .catch((error) => {
          let errors = error.response.data.errors;
          // vm.$toast.error(errors.response.message, {
          vm.$toast.error('No UpComming Event Found', {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        });
    },
  
  },
    mounted() {
    this.getMeeting();
  },
};
</script>
<style lang="scss">
.upcoming-meeting {
  background: #fff;
  padding: 20px;
  overflow: auto;
  max-height: calc(100vh - 220px);
  min-height: 650px;
  .meeting {
    border-bottom: 1px solid #d1d1d1;
    &:nth-last-child(1) {
      border: 0;
    }
    .smeeting {
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      &.m-green {
        background: #eefeef;
      }
      &.m-red {
        background: #feeef0;
      }
      &.m-yellow {
        background: #fefcee;
      }
      &.m-purple {
        background: #f8eefe;
      }
    }
  }
}
</style>