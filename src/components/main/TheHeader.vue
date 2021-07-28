<template>
  <div class="box-shadow dashboard-header">
    <div class="row dashboard-row">
      <div class="col-md-2">
        <b-icon icon="border-width" class="ms-4"></b-icon>
        <b-icon icon="fullscreen" class="ms-4"></b-icon>
      </div>
      <div class="col-md-6">
        <div class="dash-serach">
          <input type="search" class="dashbooard-search" />
          <b-icon icon="search"></b-icon>
        </div>
      </div>
      <div class="col-md-4 d-flex align-items-center third-col">
        <b-icon icon="bell-fill" class="me-4"> </b-icon>
        <b-icon icon="chat-left-fill" class="me-4"></b-icon>
        <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
          <template #button-content>
            <div class="d-flex align-items-center">
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                class="me-3"
              ></b-avatar>
              <h5 class="username">Janet Owusu</h5>
              <b-icon
                icon="caret-down-fill"
                variant="dark"
                class="ms-2"
              ></b-icon>
            </div>
          </template>
          <router-link class="dropdown-link" to="/dashboard">
            <b-icon icon="person" class="me-2 icon"></b-icon>
            <span class="route-link">My Profile</span>
          </router-link>
          <router-link class="dropdown-link" to="/account">
            <b-icon icon="credit-card" class="me-2 icon"></b-icon>
            <span class="route-link">I.D Card</span>
          </router-link>
          <router-link class="dropdown-link" to="/account">
            <b-icon icon="envelope" class="me-2 icon"></b-icon>
            <span class="route-link">Inbox</span>
          </router-link>
          <router-link class="dropdown-link" to="/account">
            <b-icon icon="gear" class="me-2 icon"></b-icon>
            <span class="route-link">Setting</span>
          </router-link>
          <router-link class="dropdown-link" to="/account">
            <b-icon icon="lock" class="me-2 icon"></b-icon>
            <span class="route-link">Legal Terms</span>
          </router-link>
          <router-link class="dropdown-link" to="/account">
            <img src="@/assets/icons/logout.png" class="me-2">
            <span class="route-link">Logout</span>
          </router-link>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.dashboard-header {
  height: 75px;
  background: #fff;
  .dashboard-row {
    align-items: center;
    height: 75px;
    .dash-serach {
      position: relative;
      svg.bi-search {
        position: absolute;
        top: 12px;
        right: 20px;
      }
    }
    input.dashbooard-search {
      width: 100%;
      padding: 6px 45px 6px 20px !important;
      border: 2px solid #fff !important;
      transition: all 0.3s ease-in;
      &:focus-visible {
        outline: none;
        border: 2px solid var(--blue) !important;
      }
    }
  }

  h5.username {
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 700;
    color: #000;
  }

  .third-col {
    place-content: flex-end;
  }

  ul.dropdown-menu {
    padding: 0;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    border: none;
    width: 200px;
  }

  .dropdown-link {
    padding: 13px 10px;
    color: var(--grey);
    display: flex;
    text-decoration: none;
    transition: all 0.3s ease;
    svg {
      font-size: 20px;
    }
    img {
      height: 20px;
    }
    .route-link {
      font-size: 17px;
      font-weight: 700;
      color: var(--grey);
    }
    &.router-link-active {
      background: var(--yellow);
      svg {
        fill: #000;
      }
      .route-link {
        color: #000;
      }
      &:hover {
        background: var(--yellow);
      }
    }
    &:hover {
      background: #e9ecef;
    }
  }
}
</style>