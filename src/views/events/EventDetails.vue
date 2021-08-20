<template >
 <div class="event-details">
    <div class="row">
      <div class="col-md-8">
        <div class="event">
          <h3 class="c-blue fw-9 event-title text-center mb-4">
            {{currentEvent.title}}
          </h3>
          <div class="event-description">
            <div class="event-img">
                <img :src="ImageUrl+'event/'+currentEvent.image" />
              </div>
            <p class="f-12 event-desc">
            {{currentEvent.description}}
            </p>
          </div>
          <div class="more-info mt-4">
            <div class="row align-items-center">
              <div class="col-md-4">
                <div class="date-n-location">
                  <div class="♥">
                    <b-icon
                      icon="heart-fill"
                      variant="danger"
                      class="me-2"
                    ></b-icon>
                    <span>{{currentEvent.accept_events !=undefined ? currentEvent.accept_events.length : '' }}</span>
                  </div>
                  <div class="📅 fw-6">
                    <b-icon icon="clock" class="me-2 c-yellow"></b-icon>
                    <span>
                      {{currentEvent.date}}
                    </span>
                  </div>
                  <div class="📍 fw-6">
                    <b-icon icon="geo-alt-fill" class="me-2 c-yellow"></b-icon>
                    <span>{{currentEvent.location}}</span>
                  </div>
                </div>
              </div>

              <div class="col-md-8">
                <div class="event-call-to-action">
                  <button class="btn-yellow download-btn me-2">
                    Download Event iCal
                  </button>
                  <button class="btn-yellow download-btn" @click="acceptEvent(currentEvent.id)">Accept Event</button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 organizer-details box-shadow">
            <div class="row align-items-center">
              <div class="col-md-8">
                <h4 class="c-blue fw-6 organizer">Organizer</h4>
                <p class="f-12">
                  {{currentEvent.event_organizer.description}}
                </p>
              </div>
              <div class="col-md-4">
                <div class="organizer-img">
                    <img class="organizer-img" :src="ImageUrl+'event/organizer/'+currentEvent.event_organizer.image" />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 venu-details box-shadow">
            <div class="row align-items-center">
              <div class="col-md-8">
                <h4 class="c-blue fw-6 venu">Venue</h4>
                <p class="f-12">
                  {{currentEvent.event_venue.description}}
                </p>
              </div>
              <div class="col-md-4">
                <!-- <div class="venu-img"></div> -->
              </div>
            </div>
          </div>
          <div class="mt-4 location-details box-shadow">
            <div class="row align-items-center">
              <div class="col-md-12">
                <h4 class="c-blue fw-6 venu">Event Locaion</h4>
                <div class="location-img"></div>
              </div>
            </div>
          </div>

          <div class="mt-4 share-event">
            <h6 class="fw-6">Share with friends</h6>
            <div class="social-media-icon d-flex align-items-center">
              <b-icon icon="facebook" class="f-24 me-2"></b-icon>
              <b-icon icon="instagram" class="f-24 me-2"></b-icon>
              <b-icon icon="twitter" class="f-24 me-2"></b-icon>
              <b-icon icon="linkedin" class="f-24 me-2"></b-icon>
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

import UpcomingMeetings from "@/components/events/UpcomingMeetings";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  components: { UpcomingMeetings },
  computed: {
    ...mapGetters(["getSelectedEvent"]),
    currentEvent() {
      return this.eventDetail;
    },
    ImageUrl() {
      return process.env.VUE_APP_IMAGE_URL;
    },
  },
  data() {
    return {
      eventDetail: "",
    };
  },
  methods: {
    move(to, data) {
      this.$router.push({ path: to });
      this.$store.commit("SET_SELECTED_EVENT", data);
    },
    async getEventDetail() {
      const vm = this;
      vm.$store.commit("SET_SPINNER", true);
      // alert(this.$router.id);
      await axios
        .get(
          process.env.VUE_APP_API_URL +
            vm.$store.state.user.user_type +
            "/event/" +
            this.$route.params.id
        )
        .then((response) => {
          console.log("data::", response.data.data);
          vm.$store.commit("SET_SPINNER", false);
          vm.eventDetail = response.data.data;
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
    async dislikeEvent() {
      const vm = this;
      vm.$store.commit("SET_SPINNER", true);
      await axios
        .get(
          process.env.VUE_APP_API_URL +
            vm.$store.state.user.user_type +
            "/events"
        )
        .then((response) => {
          console.log("data::", response.data.data);
          vm.$store.commit("SET_SPINNER", false);
          this.events = response.data.data;
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
    async acceptEvent(id) {
      const vm = this;
      vm.$store.commit("SET_SPINNER", true);
      await axios
        .post(
          process.env.VUE_APP_API_URL +
            vm.$store.state.user.user_type +
            "/accept-event/" +
            id
        )
        .then((response) => {
          console.log("data::", response.data.data);
          this.events = response.data.data;
          //  vm.$store.commit("SET_USER", response.data.userDetail.user);
          vm.$store.commit("SET_SPINNER", false);
          vm.getEventDetail();
          vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
  mounted() {
    this.getEventDetail();
  },
};
</script>
<style lang="scss">
.event-details {
  .event {
    background: #fff;
    padding: 20px;
    height: calc(100vh - 220px);
    min-height: 650px;
    overflow: scroll;
    .event-description {
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      .event-img {
        background-image: url(/img/event-img.4b1a46ef.png);
        width: 100%;
        height: 180px;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .event-desc {
        padding: 10px;
      }
    }
    .event-call-to-action {
      text-align: end;
      button {
        font-size: 15px;
        border-radius: 10px;
        &:hover {
          background: var(--blue);
        }
      }
    }

    .organizer-details {
      padding: 20px;
      .organizer-img {
        background-image: url("../../assets/images/organizer.png");
        width: 150px;
        height: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin-left: auto;
      }
    }
    .venu-details {
      padding: 20px;
      .venu-img {
        background-image: url("../../assets/images/location.png");
        width: 150px;
        height: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin-left: auto;
      }
    }
    .location-details {
      padding: 10px;
      .location-img {
        background-image: url("../../assets/images/mapLocation.png");
        width: 100%;
        height: 180px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin-left: auto;
      }
    }
  }
}
</style>