<template>
  <div class="TheContainer" id="app">
      <Circle10  v-if="getSpinner" />
    <div class="row" >
      <div class="theme-sidebar" :class='{minimize : minimize}'>
        <TheSidebar ref="sidebar" />
      </div>
      <div class="theme-body" :class='{minimize : minimize}'>
        <TheHeader v-on:minimize-sidebar="doSomething" />
        <HeaderSecondary />
        <div class="dashboard-router-view">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Circle10 from '@/components/Circle10.vue'
import TheHeader from "./TheHeader.vue";
import TheSidebar from "./TheSidebar.vue";
import HeaderSecondary from "./HeaderSecondary.vue";
import { mapGetters } from 'vuex';
export default {
  components: { TheHeader, TheSidebar, HeaderSecondary,Circle10 },
  methods: {
    doSomething() {
      console.log(this.$refs.sidebar, "sfklsdjl");
      this.$refs.sidebar.minimizeSidebar(!this.$refs.sidebar.minimizeSidebar);
    },
  },
  computed: {
    ...mapGetters(['getSpinner']),
    minimize() {
      return this.$store.state.sidebarMinimize;
    },
  },
};
</script>
<style lang="scss">
.theme-sidebar {
  padding: 0;
  width: 350px;
  transition: 0.3s all ease;
  &.minimize {
    width: 100px;
  }
}
.theme-body {
  width: calc(100% - 350px);
  padding: 0;
  background: var(--light-grey);
  box-shadow: inset 0 3px 10px rgb(0 0 0 / 20%);
    &.minimize {
    width: calc(100% - 100px);;
  }
  .dashboard-router-view {
    padding: 30px;
    max-height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>