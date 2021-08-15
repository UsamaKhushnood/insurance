<template >
  <div>
    <b-modal id="verify-agent" class="box-shadow" hide-footer centered>
      <template #modal-header="{ close }">
        <b-icon
          icon="x-circle"
          variant="dark"
          scale="1.2"
          class="close-icon-floating pointer"
          @click="close()"
        ></b-icon>
      </template>
      <div class="verify-agent-modal">
        <div class="user-avatar">
          <b-avatar
            src="https://placekitten.com/300/300"
            size="8rem"
          ></b-avatar>
        </div>
        <div class="status-modal-body">
          <div class="username">
            <h1 class="fw-9">Janet Yaa Owsusu</h1>
          </div>
          <div class="identification-code">
            <h5 class="c-blue fw-7">
              Agent Unique Identification code: NGA97/00001
            </h5>
          </div>
          <!-- <button class="btn-blue br-5" @click="status = !status">
            change status
          </button> -->
          <div class="status" v-if="myStatus">
            <svg width="100px">
              <use xlink:href="@/assets/svg/active.svg#active"></use>
            </svg>
            <h2 style="color: #4bd12f"> {{this.message}}</h2>
          </div>
          <div class="status" v-else>
            <svg width="100px">
              <use xlink:href="@/assets/svg/inactive.svg#inactive"></use>
            </svg>
            <h2 class="text-danger"> {{this.message}}</h2>
          </div>
          <div class="desc">
            <p>
               
            </p>
          </div>
        </div>
        <div class="modal-offset-buttons text-center">
          <button class="btn-yellow btn-hover-blue br-5 w-50">
            Report Agent
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props:['message'],
  data() {
    return {
      // status: true,
    };
  },
  computed:{
    ...mapGetters(["getModelStatus"]),
    myStatus(){
      return this.getModelStatus
    }
  }
};
</script>
<style lang="scss">
.verify-agent-modal {
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