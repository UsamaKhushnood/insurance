<template>
  <div class="upcoming-meeting box-shadow">
    <h3 class="c-blue text-center mb-4">All Upcoming Meetings</h3>
    <div class="meeting" v-for="(meeting, mIndex) in meetings" :key="mIndex">
      <div class="smeeting" :class="meeting.bg">
        <div class="meeting-details">
           <p class="f-10">
            {{meeting.description}}
          </p>
        </div>
        <div class="meeting-timing mt-2">
          <span class="fw-7 f-12">{{meeting.start_time}} - {{meeting.end_time}}</span>
        </div>
        <div class="members mt-2">
          <!-- <b-avatar-group size="30px">
            <b-avatar
              src="https://placekitten.com/300/300"
              variant="info"
            ></b-avatar>
            <b-avatar
              src="https://placekitten.com/300/300"
              variant="info"
            ></b-avatar>
            <b-avatar
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
            ></b-avatar>
          </b-avatar-group> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name:'Meeting',
    data() {
      return {
        meetings: [
          // { background: "m-yellow" },
          // { background: "m-purple" },
          // { background: "m-green" },
          // { background: "m-yellow" },
          // { background: "m-green" },
          // { background: "m-red" },
          // { background: "m-red" },
          // { background: "m-purple" },
        ],
      };
    },
    methods: {
      move(to,data) {
        this.$router.push({ path: to });

      },
    async getMeetings(){
        const vm = this;
        // vm.$store.commit("SET_SPINNER", true);
        // alert(this.$router.id);
        await axios
          .get(process.env.VUE_APP_API_URL+vm.$store.state.user.user_type+"/meetings/")
          .then((response) => {
            console.log('data::',response.data.data);
          // vm.$store.commit("SET_SPINNER", false);
            vm.meetings = response.data.data       
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
      },


    },
    mounted(){
    this.getMeetings()
    }
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