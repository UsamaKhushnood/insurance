<template>
  <div class="TheContainer" id="app">
    <div class="row">
      <div class="theme-sidebar">
        <TheSidebar />
      </div>
      <div class="theme-body">
        <TheHeader />
        <HeaderSecondary />
        <div class="dashboard-router-view">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheHeader from "./TheHeader.vue";
import TheSidebar from "./TheSidebar.vue";
import HeaderSecondary from "./HeaderSecondary.vue";
export default {
  components: { TheHeader, TheSidebar, HeaderSecondary },
};
</script>
<style lang="scss">
.theme-sidebar {
  padding: 0;
  width: 350px;
}
.theme-body {
  width: calc(100% - 350px);
  padding: 0;
  background: var(--light-grey);
  box-shadow: inset 0 3px 10px rgb(0 0 0 / 20%);
  .dashboard-router-view {
    padding: 30px;
    max-height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>