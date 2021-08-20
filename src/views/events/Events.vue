<template>
  <div class="events">
    <BRow class="row">
      <div
        class="col-md-3 position-relative"
        style="height: calc(100vh - 220px); min-height: 650px"
      >
        <div class="events-tabs">
          <router-link
            to="/event-management/all-events"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">All Events</h5>
              <p class="c-grey">Details about your personal infromation</p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
          <router-link
            to="/event-management/my-events"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">My Events</h5>
              <p class="c-grey">Details about your events posts</p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
          <router-link
            to="/event-management/meetings"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">Meetings</h5>
              <p class="c-grey">Details about your events answers</p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
        </div>
        <div class="Calender" v-show="this.$router.currentRoute.path !='/event-management/meetings'">
           <DatePicker v-model="range" :model-config="modelConfig" @input="eventOnDate" is-range is-expanded />
        </div>
      </div>
      <div class="col-md-9">
        <RouterView class="events-view" name="events" />
      </div>
    </BRow>
  </div>
</template>
<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import moment from 'moment';
export default {
  components: { DatePicker },

  data() {
    return {
      moment: moment,
      value: "",
      context: null,
        modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD', // Uses 'iso' if missing
      },
       range: {
        start: '',
        end: '',
      },
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
      async eventOnDate() {
      let vm = this;
      let payload = {
        start_date: vm.range.start,
        end_date: vm.range.end,
      };

      vm.$store
        .dispatch("HTTP_POST_REQUEST", {
          url: vm.$store.state.user.user_type + `/event-on-date`,
          payload,
        })
        .then((response) => {
          console.log("re", response.data);
          if (response.data.status == false) {
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          } else {
            vm.$toast.success(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
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
  },
};
</script>
<style lang="scss">
.events {
  .events-tabs {
    .tab {
      width: 100%;
      justify-content: space-between;
      padding: 5px 2px 5px 15px;
      border: 3px solid #fff;
      border-radius: 10px;
      background: #fff;
      margin-bottom: 20px;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      transition: 0.3s all ease;
      &.router-link-active {
        border: 3px solid var(--blue);
      }
      .f-title {
        p {
          font-size: 12px;
        }
        h5 {
          margin-bottom: 2px;
        }
      }

      .f-icon svg {
        font-size: 30px;
      }
    }
  }

  .Calender {
    position: absolute;
    bottom: 50px;
    display: flex;
    width: 100%;
    .vc-header {
      background: var(--blue);
      padding: 10px !important;
      .vc-title {
        color: var(--yellow) !important;
      }
      svg.vc-svg-icon {
        color: var(--yellow);
      }
    }
  }
}
</style>