<template>
  <div class="licence">
    <div class="row">
      <div class="col-md-8">
        <div class="licence-renewal">
          <div class="heading">
            <h1 class="licence-renewal-title c-blue">
              One-Click Licence Renewal
            </h1>
            <p class="licence-renewal-desc c-grey fw-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              magnam, provident, voluptates tempora expedita voluptate, nemo
              laborum voluptatibus minus molestias libero eius odio aut pariatur
              quam facere enim nostrum sit?
            </p>
          </div>
        </div>
        <div class="invoice-list mt-4">
          <h4 class="c-blue fw-6">Invoices</h4>
          <div class="invoices" v-for="(x, xIndex) in invoices" :key="xIndex">
            <div class="invoice">
              <div class="pdf-icon"></div>
              <div class="invoice-number">NAG00{{ xIndex }}</div>
              <div class="download-invocie">
                <b-icon icon="download"></b-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">status goes here</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      invoices: [12, 21, 21, 2, 21, 221, 1],
    };
  },
};
</script>
<style lang="scss">
.licence-renewal {
  text-align: right;
  background-image: url("../assets/images/mobile.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 250px;
  display: flex;
  align-items: center;
  .heading {
    width: 600px;
    margin-left: 260px;
    text-align: left;
    .invoice-list {
      background: #fff;
      padding: 20px;
    }
  }
}
</style>