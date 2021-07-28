<template>
  <div class="forum">
    <BRow class="row">
      <div
        class="col-md-3 position-relative"
        style="height: calc(100vh - 220px); min-height: 650px;"
      >
        <div class="forum-tabs">
          <router-link
            to="/forum/explore-topics"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">Explore Topics</h5>
              <p class="c-grey">Details about your personal infromation</p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
          <router-link
            to="/forum/my-topics"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">My Topics</h5>
              <p class="c-grey">Details about your forum posts</p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
          <router-link
            to="/forum/start-new-topic"
            tag="button"
            class="d-flex align-items-center tab"
          >
            <div class="text-start f-title">
              <h5 class="c-blue">Start a New Topic</h5>
              <p class="c-grey">Details about your forum answers</p>
            </div>
            <div class="f-icon">
              <b-icon icon="chevron-right"></b-icon>
            </div>
          </router-link>
        </div>
        <div class="gotoOnlineStore">
          <div class="ad box-shadow">
            <img src="@/assets/images/online-shopping.png" />
            <button class="btn-yellow gotostorebtn">Go To Online Store</button>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <RouterView class="forum-view" name="forum" />
      </div>
    </BRow>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.forum {
  .forum-tabs {
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

  .gotoOnlineStore {
    position: absolute;
    bottom: 50px;
    .ad {
      border-radius: 5px;
      position: relative;
      z-index: 8;
      img {
        border-radius: 5px;
        width: 100%;
      }
      .gotostorebtn {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 200px;
        border-radius: 5px;
        transform: translate(-50%, 50%);
        z-index: 9;
        &:hover {
          background: var(--yellow);
          color: #fff;
        }
      }
    }
  }
}
</style>