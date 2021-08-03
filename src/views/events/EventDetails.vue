<template >
  <div class="event-details">
    <div class="row">
      <div class="col-md-8">
        <div class="event">
          <h3 class="c-blue fw-9 event-title text-center mb-4">
            Football Match NAGIA vs NIC
          </h3>
          <div class="event-description">
            <div class="event-img"></div>
            <p class="f-12 event-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              ducimus iusto repellat voluptatem doloribus natus tempore facere
              quidem, eos pariatur cupiditate. Voluptatem ducimus aperiam cumque
              earum facere fugit, voluptas tempora? ducimus iusto repellat
              voluptatem doloribus natus tempore facere quidem, eos pariatur
              cupiditate. Voluptatem ducimus aperiam cumque earum facere fugit,
              voluptas tempora?
            </p>
          </div>
          <div class="more-info mt-4">
            <div class="row align-items-center">
              <div class="col-md-4">
                <div class="date-n-location">
                  <div class="📅 fw-6">
                    <b-icon icon="clock" class="me-2 c-yellow"></b-icon>
                    <span>03-09-2021</span>
                  </div>
                  <div class="📍 fw-6">
                    <b-icon icon="geo-alt-fill" class="me-2 c-yellow"></b-icon>
                    <span>Afua Sutherland Park</span>
                  </div>
                </div>
              </div>
              <div class="col-md-2 ♥ f-20">
                <b-icon
                  icon="heart-fill"
                  variant="danger"
                  class="me-2"
                ></b-icon>
                <span>1,545</span>
              </div>
              <div class="col-md-6">
                <div class="event-call-to-action">
                  <button class="btn-yellow download-btn me-2">
                    Download Event iCal
                  </button>
                  <button class="btn-yellow download-btn">Accept Event</button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 organizer-details box-shadow">
            <div class="row align-items-center">
              <div class="col-md-8">
                <h4 class="c-blue fw-6 organizer">Organizer</h4>
                <p class="f-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore architecto illo quod inventore, sed nobis explicabo aut
                  ratione dicta asperiores, nostrum aliquam repellendus. Beatae
                  natus iure amet numquam nostrum voluptas?
                </p>
              </div>
              <div class="col-md-4">
                <div class="organizer-img"></div>
              </div>
            </div>
          </div>
          <div class="mt-4 venu-details box-shadow">
            <div class="row align-items-center">
              <div class="col-md-8">
                <h4 class="c-blue fw-6 venu">Venue</h4>
                <p class="f-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore architecto illo quod inventore, sed nobis explicabo aut
                  ratione dicta asperiores, nostrum aliquam repellendus. Beatae
                  natus iure amet numquam nostrum voluptas?
                </p>
              </div>
              <div class="col-md-4">
                <div class="venu-img"></div>
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
export default {
  components: { UpcomingMeetings },
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