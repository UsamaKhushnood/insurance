<template>
  <div class="TheContainer" id="app">
      <TheHeader />
    <div class="row">
        <div class="col-md-3">
            <TheSidebar />
        </div>
        <div class="col-md-9">
            <RouterView />
        </div>
    </div>
    
  </div>
</template>
<script>
import TheHeader from './TheHeader.vue'
import TheSidebar from './TheSidebar.vue'
export default {
    components: {TheHeader, TheSidebar}
};
</script>
<style>
</style>