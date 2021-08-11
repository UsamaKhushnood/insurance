<template >
  <div class="verify-an-agent">
    <div
      class="
        container
        bg-white
        box-shadow
        position-relative
        mt-7
        main-container
      "
    >
      <div class="yellow-banner-offset bg-yellow br-5">
        <h1>Type Agent's I.D/Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          commodi?
        </p>
      </div>
      <div>
        <div class="ac-body">
          <div class="agents mt-4">
            <b-avatar
              src="https://placekitten.com/300/300"
              size="6rem"
            ></b-avatar>
            <b-avatar
              src="https://placekitten.com/300/300"
              size="10rem"
            ></b-avatar>
            <b-avatar
              src="https://placekitten.com/300/300"
              size="6rem"
            ></b-avatar>
          </div>
          <div class="agent-details">
            <div class="agent-name">
              <div class="tooltip-label">Agent's Name</div>
              <h4 class="agent-detail name">Kwame Asensu</h4>
            </div>
            <div class="agent-id">
              <div class="tooltip-label">Agent's I.D</div>
              <h4 class="agent-detail id">NGA 454/00001</h4>
            </div>
          </div>

          <div class="verify-button mt-5 mb-5 text-center">
            <button class="btn-blue btn-hover-yellow br-5 w-25" v-b-modal.verify-agent>
              <svg class="card-icon">
                <use xlink:href="@/assets/svg/verify-card.svg#card"></use>
              </svg>
              Verify Agent
            </button>
            <VerifyModal />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VerifyModal from '@/components/verify-agent/VerifyModal'
export default {
  components:{VerifyModal}
};
</script>
<style lang="scss">
.verify-an-agent {
  .main-container {
    min-height: 500px;
    padding-top: 100px;
    padding-bottom: 20px;
  }
  .yellow-banner-offset {
    text-align: center;
    width: 50%;
    position: absolute;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -60px;
    left: 50%;
    transform: translate(-50%);
    padding: 10px;
  }

  .agents {
    display: flex;
    align-items: center;
    justify-content: center;
    span.b-avatar.badge-secondary.rounded-circle {
      margin-left: -30px;
      border: 1px solid #fff;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      &:nth-child(2) {
        z-index: 999;
      }
    }
  }

  .agent-details {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    .agent-detail {
      background: var(--light-grey);
      border: 1px solid var(--blue);
      padding: 15px 50px;
      border-radius: 5px;
      width: 350px;
      text-align: center;
    }
  }

  .tooltip-label {
    background: #fff;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    width: 150px;
    padding: 10px;
    text-align: center;
    margin: 0 auto;
    position: relative;
    margin-bottom: 25px;
    font-weight: 700;
    &:after {
      content: "\f0dd";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      width: 25px;
      height: 25px;
      color: #fff;
      text-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      position: absolute;
      left: 50%;
      bottom: 0;
      z-index: 1;
      transform: translate(-50%);
      font-size: 30px;
    }
  }

  .btn-hover-yellow {
    svg.card-icon {
      width: 30px;
      height: 30px;
      fill: var(--yellow);
      transition: 0.3s all ease
    }
    &:hover {
      svg.card-icon {
        fill: var(--blue);
      }
    }
  }
}
</style>