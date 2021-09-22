<template >
  <div class="secodary-header row">
    <div class="col-md-3 pe-0">
      <h4 class="c-blue d-flex align-items-baseline">
       <span>Hello,</span> 
        <h6 style="margin-left:9px">Welcome Back {{getUser.agent ? getUser.agent.first_name : getUser.consumer.first_name}}!</h6>
      </h4>
    </div>
    <div class="col-md-6 p-0 d-flex justify-content-evenly">
      <router-link to="licence" tag="button"  v-if="getUser.user_type=='agent'"  class="box-shadow sh-btn"> check membership status</router-link>
      <router-link to="forum" tag="button"   v-if="getUser.user_type=='agent'" class="box-shadow sh-btn">Join forum</router-link>
      <router-link to="#"  tag="button"  @click.native="redirectUrl('https://learn.nagia.com.gh')"  v-if="getUser.user_type=='agent'" class="box-shadow sh-btn">learn at NAGIA</router-link>
    </div>
    <div class="col-md-3 ps-0 last-col">
      <h5 class="breadcrumb">
        Home <span class="router-name ms-2"> - {{ $route.name }} </span>
      </h5>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
computed:{
  ...mapGetters(['getUser'])
},
methods:{
  redirectUrl(url){
    // this.$router.push({ name: 'AccountSecurity' });
    window.location.href =url
  }
}

};
</script>
<style lang="scss">
.secodary-header {
  height: 90px;
  align-items: center;
  padding: 15px;
  h5 {
    margin-bottom: 0;
  }
  h4 {
    margin-bottom: 0;
  }
  h5.breadcrumb {
    font-weight: 700;
    color: var(--grey);
    span.router-name {
      color: var(--blue);
    }
  }

  button.sh-btn {
    border: 1px solid var(--blue);
    padding: 7px;
    border-radius: 10px;
    width: 30%;
    color: var(--blue);
    text-transform: capitalize;
    font-weight: 500;
    transition: 0.2s all ease;
    &:hover, &.router-link-active {
      border-color: #fff;
      background: var(--yellow);
    }
  }

  .last-col {
    display: flex;
    place-content: flex-end;
  }
}
</style>