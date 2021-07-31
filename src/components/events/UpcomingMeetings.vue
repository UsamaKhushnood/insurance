<template>
  <div class="upcoming-meeting box-shadow">
    <h4 class="c-grey">Upcoming Meetings</h4>
    <div class="meeting" v-for="(meeting, mIndex) in meetings" :key="mIndex">
      <div class="smeeting" :class="meeting.background">
        <div class="meeting-details">
          <p class="f-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            tempore maxime sequi eaque praesentium maxime sequi eaque
            praesentium
          </p>
        </div>
        <div class="meeting-timing mt-2">
          <span class="fw-7 f-12">12:40 PM - 15:40 PM</span>
        </div>
        <div class="members mt-2">
          <b-avatar-group size="30px">
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
          </b-avatar-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      meetings: [
        { background: "m-green" },
        { background: "m-yellow" },
        { background: "m-red" },
        { background: "m-purple" },
      ],
    };
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