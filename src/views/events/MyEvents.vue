<template >
  <div class="my-events">
    <div class="row">
      <div class="col-md-8">
        <div class="my-events-list box-shadow   ">
          <h3 class="c-blue text-center mb-4">My Accepted Events</h3>
          <div
            class="row event align-items-center"
            v-for="(event, xIndex) in events"
            :key="xIndex"
          >
            <div class="col-md-3 event-img">
              <img src="@/assets/images/player2.png" />
            </div>
            <div class="col-md-6 d-flex flex-column">
              <h6 class="event-title f-18 fw-9 c-blue">
                Football Match NAGIA vs NIC
              </h6>
              <div class="time fw-7">
                <b-icon icon="clock" class="me-2 c-yellow"></b-icon>
                <span>03-10-2021</span>
              </div>
              <div class="location fw-7">
                <b-icon icon="geo-alt-fill" class="me-2 c-yellow"></b-icon>
                <span>Afua Sutherland Park</span>
              </div>
            </div>
            <div class="col-md-3">
              <button class="view-event-btn btn-yellow btn-block mt-3">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
          <UpcomingMeetings />
      </div>
    </div>
  </div>
</template>
<script>
import UpcomingMeetings from '@/components/events/UpcomingMeetings'
export default {
    components: {UpcomingMeetings},
  data() {
    return {
      events: [
        12, 2, 21, 5, 54, 12, 2, 21, 5, 54, 12, 2, 21, 5, 54, 12, 2, 21, 5, 54,
      ],
    };
  },
};
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