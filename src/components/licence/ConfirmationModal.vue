<template >
  <div>
    <b-modal
      id="payment-successful"
      size="lg"
      class="box-shadow"
      hide-footer
      centered
    >
      <template #modal-header="{ close }">
        <b-icon
          icon="x-circle"
          variant="dark"
          scale="1.5"
          class="close-icon-floating pointer"
          @click="close()"
        ></b-icon>
      </template>
      <div class="payment-successful-modal-body">
        <div class="payment-send-successful box-shadow">
          <svg>
            <use xlink:href="@/assets/svg/active.svg#active"></use>
          </svg>
          <h1>Payment Sent Successful!</h1>
        </div>
        <div class="payment-desc box-shadow mt-4">
          <p>
            llus vulputate eu. Integer tincidunt nisi a quam mattis sodales.
            Quisque dignissim nec neque sed vulputate. Donec id dolor quis nisi
            accumsan venenatis a a ipsum. Phasellus velit turpis, suscipit at
            elementum et, consequat imperdiet magna. Sed accumsan augue odio,
            quis luctus magna in
          </p>
          <h6 class="mt-5">
            lorem ipsum ieet drem uiyen sjdkf sdknfldfnajfdalaadkjbsjdn
          </h6>
        </div>
        <div class="pay-button mt-5">
          <div class="payment-btn-group">
            <button class="back-btn">
              <svg>
                <use xlink:href="@/assets/svg/arrow-back.svg#back"></use>
              </svg>
              <span>Back</span>
            </button>
            <button class="pay-now-btn">Check Status</button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: true,
      card: {
        number: "4567 6565 3456 1456",
        name: "Ohemaa Yeboah",
        issue: "09/19",
        expire: "09/22",
      },
    };
  },
};
</script>
<style lang="scss">
.payment-successful-modal-body {
  margin-top: 50px;
  padding-bottom: 50px;
  padding-top: 30px;
  width: 420px;
  margin: 0 auto;

  .payment-send-successful {
    color: #4bd12f;
    padding: 20px;
    height: 250px;
    margin-top: 50px;
    padding-top: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
    border-radius: 5px;
    margin-bottom: 30px;
    svg {
      position: absolute;
      width: 100px;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      height: 100px;
      padding: 20px;
      border-radius: 10px;
    }
    h1 {
      font-weight: 300;
    }
  }

  .payment-desc.box-shadow {
    padding: 30px;
    border-radius: 5px;
    text-align: center;
  }

  .payment-btn-group {
    position: relative;
    display: flex;
    background: var(--yellow);
    border-radius: 5px;
    width: 380px;
    margin: 0 auto;
    button {
      border: none;
      border-radius: 5px;
      display: flex;
      align-items: center;
      background: none;
      font-weight: 900;
      padding: 12px 20px;
      &.back-btn {
        background: var(--blue) !important;
        color: var(--yellow);
        width: 250px;
      }
      &.pay-now-btn {
        width: 100%;
        justify-content: center;
        color: var(--blue);
      }
      svg {
        width: 25px;
        height: 25px;
        margin-right: 15px;
      }
    }
  }
}

.close-icon-floating {
  position: absolute;
  z-index: 999;
  right: 15px;
  top: 13px;
}
</style>