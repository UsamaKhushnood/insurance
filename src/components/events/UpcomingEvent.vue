<template >
  <div class="upcoming-events">
    <div class="event">
      <div class="event-img">
        <img src="@/assets/images/event1.png" />
      </div>
      <div class="event-body">
        <h6 class="c-blue f-18 fw-9">Football Match NAGIA vs NIC</h6>
        <div class="event-time fw-6">
          <b-icon icon="clock" class="me-2 c-yellow"></b-icon>
          03-09-2021
        </div>
        <div class="event-location fw-6">
          <b-icon icon="geo-alt-fill" class="me-2 c-yellow"></b-icon>
          Afua Sutherland Park
        </div>
        <button class="view-event-btn btn-yellow btn-block mt-3">
          View Details
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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