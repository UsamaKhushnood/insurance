<template >
  <div>
    <b-modal id="check-status" class="box-shadow" hide-footer centered>
      <template #modal-header="{ close }">
        <b-icon
          icon="x-circle"
          variant="dark"
          scale="1.2"
          class="close-icon-floating pointer"
          @click="close()"
        ></b-icon>
      </template>
      <div class="check-status-modal">
        <div class="user-avatar">
          <b-avatar
            :src="myImage"
            size="8rem"
          ></b-avatar>
        </div>
        <div class="status-modal-body">
          <div class="username">
            <h1 class="fw-9">{{this.getUser.agent.first_name}}</h1>
          </div>
          <div class="identification-code">
            <h5 class="c-blue fw-7">
              Agent Unique Identification code: NGA97/00001
            </h5>
          </div>
          <!-- <button class="btn-blue br-5" @click="status = !status">
            change status
          </button> -->
          <div class="status" v-if="status">
            <svg width="100px">
              <use xlink:href="@/assets/svg/active.svg#active"></use>
            </svg>
            <h2 style="color: #4bd12f">Status Active</h2>
          </div>
          <div class="status" v-else>
            <svg width="100px">
              <use xlink:href="@/assets/svg/inactive.svg#inactive"></use>
            </svg>
            <h2 class="text-danger">Status Inavtive</h2>
          </div>
          <div class="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, id
              laborum? Cupiditate laborum error, alias sapiente repudiandae
            </p>
          </div>
        </div>
        <div class="modal-offset-buttons" v-show="!status">
          <button class="btn-yellow btn-hover-blue br-5 w-50" v-b-modal.renew-licence>
            Renew Now
          </button>
          <router-link to="complaints">
          <button class="btn-blue btn-hover-yellow br-5 w-50">
            Complaint
          </button>
          </router-link>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  props:['status'],
    computed:{
     ...mapGetters(['getUser']),
       ImageUrl() {
      return process.env.VUE_APP_IMAGE_URL;
    },
      isDisabled() {
        return this.show == true ? true : false; 
      },
      myImage(){
        // alert(typeof(this.getUser.agent.image))
        let url ='';
        console.log(typeof(this.getUser.agent));
        if(this.getUser.user_type == 'agent'){
         url  =  typeof(this.getUser.agent.image) !== 'undefined' || this.getUser.agent.image !== null ?  this.ImageUrl+'agent/'+this.getUser.agent.image : 'https://placekitten.com/300/300';
        }else{
        return  typeof(this.getUser.consumer.image) !== 'undefined' || this.getUser.consumer.image !== null ?  this.ImageUrl+'consumer/'+this.getUser.consumer.image : 'https://placekitten.com/300/300';

        }
        // return 1;
        return url;
      }
  },
  // data() {
  //   return {
  //     status: true,
  //   };
  // },
};
</script>
<style lang="scss">
.check-status-modal {
  padding-bottom: 35px;
  .user-avatar {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 0;
    border: 1px solid #fff;
    border-radius: 50%;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  }
  .status-modal-body {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    margin-top: 80px;
  }
  .username {
    text-align: center;
  }
  .modal-offset-buttons {
    position: absolute;
    bottom: -15px;
    width: 93%;
  }
}



.modal-header {
  border-bottom: 0;
  padding: 0;
}

.close-icon-floating {
  position: absolute;
  z-index: 999;
  right: 15px;
  top: 13px;
}
</style>