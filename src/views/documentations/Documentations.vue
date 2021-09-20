<template>
  <div class="documentations">
    <BRow class="row">
      <div
        class="col-md-3 position-relative"
        style="height: calc(100vh - 220px); min-height: 650px"
      >
        <div class="documentations-tabs">
          <router-link
            to="/documentations/nagia-constitution"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">NAGIA Constitutions</h5>
              <p class="c-grey">
                View &amp; download the Association's Constitutions
              </p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
          <router-link
            to="/documentations/nagia-code-of-conduct"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">Code of Ethics &amp; Conduct</h5>
              <p class="c-grey">
                View &amp; donwload Association's Code of Ethics &amp; Conduct
              </p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-9">
        <RouterView class="documentations-view" name="documentations" />
      </div>
    </BRow>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.documentations {
  .documentations-tabs {
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
}
</style>