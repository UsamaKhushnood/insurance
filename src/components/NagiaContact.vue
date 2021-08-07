<template >
  <div class="nagia-contact box-shadow">
    <h3 class="bg-yellow c-blue text-center fw-6 p-3 m-0">NAGIA Contact</h3>
    <div class="bg-white p-2 pt-4 pb-4">
      <div class="row align-items-center">
        <div class="col-md-3">
          <b-icon icon="geo-alt" class="svg-icon"></b-icon>
        </div>
        <div class="col-md-9 p-3">
          <h5 class="c-blue fw-9">Visit Us</h5>
          <p class="fw-7">Accra, Greater Accra, Ghana</p>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-3">
          <b-icon icon="at" class="svg-icon"></b-icon>
        </div>
        <div class="col-md-9 p-3">
          <h5 class="c-blue fw-9">Email</h5>
          <p class="fw-7">info@nagia.com.gh</p>
          <p class="fw-7">learn@nagia.com.gh</p>
          <p class="fw-7">support@nagia.com.gh</p>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-3">
          <b-icon icon="at" class="svg-icon"></b-icon>
        </div>
        <div class="col-md-9  p-3">
          <h5 class="c-blue fw-9">Call Us</h5>
          <p class="fw-7">0242745438 / 0209198138</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.nagia-contact {
  .svg-icon {
    color: var(--yellow);
    height: 60px;
    width: 60px;
    background: #fff;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  }
}
</style>