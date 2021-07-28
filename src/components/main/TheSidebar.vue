<template>
  <div class="main-sidebar box-shadow">
    <div class="sidebar-head">
      <div class="sidebar-logo">
        <img src="@/assets/logo.png" />
      </div>
      <div class="sidebar-brand-name">
        National Association of <br />
        Ghana Insurance Agents
      </div>
    </div>
    <div class="sidebar-body">
      <div class="sidebar-nav">
        <ul>
          <router-link to="/dashboard" tag="li">
            <b-icon icon="grid"></b-icon>
            <h5 class="route-name">Dashboard</h5>
          </router-link>
          <router-link to="/account-detials" tag="li">
            <img class="route-icon" src="@/assets/icons/account.png" />
            <h5 class="route-name">Account Details</h5>
          </router-link>
          <router-link to="/licence" tag="li">
            <img class="route-icon" src="@/assets/icons/licence.png" />
            <h5 class="route-name">Licence</h5>
          </router-link>
          <router-link to="/event-management" tag="li">
            <img class="route-icon" src="@/assets/icons/events.png" />
            <h5 class="route-name">Events Management</h5>
          </router-link>
          <router-link to="/messaging" tag="li">
            <img class="route-icon" src="@/assets/icons/chat.png" />
            <h5 class="route-name">messaging</h5>
          </router-link>
          <router-link to="/forum" tag="li">
            <img class="route-icon" src="@/assets/icons/forum.png" />
            <h5 class="route-name">forum</h5>
          </router-link>
          <router-link to="/learn-at-nagia" tag="li">
            <img class="route-icon" src="@/assets/icons/learn.png" />
            <h5 class="route-name">learn at nagia</h5>
          </router-link>
          <router-link to="/verify-an-angent" tag="li">
            <img class="route-icon" src="@/assets/icons/verify.png" />
            <h5 class="route-name">verify an angent</h5>
          </router-link>
          <router-link to="/complaints" tag="li">
            <img class="route-icon" src="@/assets/icons/complaints.png" />
            <h5 class="route-name">complaints</h5>
          </router-link>
          <router-link to="/faq" tag="li">
            <img class="route-icon" src="@/assets/icons/faq.png" />
            <h5 class="route-name">faq's</h5>
          </router-link>
          <router-link to="/support" tag="li">
            <img class="route-icon" src="@/assets/icons/support.png" />
            <h5 class="route-name">support</h5>
          </router-link>
          <router-link to="/logout" tag="li">
            <img class="route-icon" src="@/assets/icons/logout.png" />
            <h5 class="route-name">logout</h5>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.main-sidebar {
  height: 100vh;
  overflow: auto;

  .sidebar-head {
    display: flex;
    align-items: center;
    column-gap: 10px;
    justify-content: center;
    padding-top: 10px;
    .sidebar-logo img {
      width: 90px;
    }
    .sidebar-brand-name {
      color: var(--blue);
      font-size: 20px;
      font-weight: 900;
    }
  }
  .sidebar-body {
    margin-top: 20px;

    .sidebar-nav {
      ul {
        padding: 0;
        li {
          display: flex;
          cursor: pointer;
          padding: 10px 20px;
          column-gap: 15px;
          align-items: center;
          height: 65px;
          padding-left: 30px;
          text-transform: capitalize;
          transition: all 0.3s ease-in;
          .route-icon {
            height: 20px;
          }
          svg {
            font-size: 21px;
            fill: var(--grey);
          }
          h5.route-name {
            font-size: 16px;
            font-weight: 600;
            color: var(--grey);
            margin-bottom: 0;
          }
          &.router-link-active {
            background: var(--yellow);
            border-left: 5px solid var(--blue);
            h5.route-name {
              color: var(--blue);
            }
            svg {
              fill: var(--blue);
            }
          }
        }
      }
    }
  }
}
</style>