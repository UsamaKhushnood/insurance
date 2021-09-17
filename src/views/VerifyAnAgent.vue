<template >
  <div class="verify-an-agent">
    <div
      class="
        container
        bg-white
        box-shadow
        position-relative
        mt-7
        main-container
      "
    >
      <div class="yellow-banner-offset bg-yellow br-5">
        <h1>Type Agent's I.D/Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          commodi?
        </p>
      </div>
      <div>
        <div class="ac-body">
          <div class="agents mt-4">
             <!-- src="https://placekitten.com/300/300" -->
            <b-avatar
              :src="myImage"
              size="6rem"
            ></b-avatar>
            <b-avatar
              :src="myImage"
              size="10rem"
            ></b-avatar>
            <b-avatar
              :src="myImage"
              size="6rem"
            ></b-avatar>
          </div>
          <div class="agent-details">
            <div class="agent-name">
              <div class="tooltip-label">Agent's Name</div>
              <!-- <h4 class="agent-detail name">Kwame Asensu</h4> -->
              <input type="text" class="agent-detail name" placeholder="Kwame Asensu" v-model="name" />
            </div>
            <div class="agent-id">
              <div class="tooltip-label">Agent's I.D</div>
              <!-- <h4 class="agent-detail id">NGA 454/00001</h4> -->
              <input type="text" class="agent-detail name" placeholder="NGA 454/00001" v-model="nagia_id" />
            </div>
          </div>

          <div class="verify-button mt-5 mb-5 text-center">
            <button class="btn-blue btn-hover-yellow br-5 w-25" 
           
            @click="getVerify('verify-agent')" 
            >
              <svg class="card-icon">
                <use xlink:href="@/assets/svg/verify-card.svg#card"></use>
              </svg>
              Verify Agent
            </button>
            <VerifyModal :message='message'  />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VerifyModal from '@/components/verify-agent/VerifyModal'
import { mapGetters } from 'vuex';
export default {
  components:{VerifyModal} ,
  data() {
    return {
      name:'',  
      nagia_id:'',  
      status:'',  
      message:'',
      show:false
    };
  },
  methods: {
    async getVerify(id) {
     
      const vm = this;
       if(this.nagia_id ==''&& this.name ==''){
         return
       }
        
      vm.$store
        .dispatch("HTTP_POST_REQUEST", {url:vm.$store.state.user.user_type+`/agent-verify`,payload:{name:vm.name,nagia_id:this.nagia_id}})
        .then((response) => {
          console.log("re", response.data);
          console.log("re", response.data.status);
          
          if(response.data.status == false){
              vm.$store.commit("SET_MODEL_STATUS",false);
              vm.message =response.data.message
                 vm.$bvModal.show(id)
          }else{
              vm.$store.commit("SET_MODEL_STATUS",true);
              vm.message =response.data.message
                  vm.$bvModal.show(id)
          }
        })
        .catch((error) => {
          let errors = error.response.data.errors;
          vm.$toast.error(errors.response.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        });
    },
  },
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
};
</script>
<style lang="scss">
.verify-an-agent {
  .main-container {
    min-height: 500px;
    padding-top: 100px;
    padding-bottom: 20px;
  }
  .yellow-banner-offset {
    text-align: center;
    width: 50%;
    position: absolute;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -60px;
    left: 50%;
    transform: translate(-50%);
    padding: 10px;
  }

  .agents {
    display: flex;
    align-items: center;
    justify-content: center;
    span.b-avatar.badge-secondary.rounded-circle {
      margin-left: -30px;
      border: 1px solid #fff;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      &:nth-child(2) {
        z-index: 999;
      }
    }
  }

  .agent-details {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    .agent-detail {
      background: var(--light-grey);
      border: 1px solid var(--blue);
      padding: 15px 50px;
      border-radius: 5px;
      width: 350px;
      text-align: center;
    }
  }

  .tooltip-label {
    background: #fff;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    width: 150px;
    padding: 10px;
    text-align: center;
    margin: 0 auto;
    position: relative;
    margin-bottom: 25px;
    font-weight: 700;
    &:after {
      content: "\f0dd";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      width: 25px;
      height: 25px;
      color: #fff;
      text-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      position: absolute;
      left: 50%;
      bottom: 0;
      z-index: 1;
      transform: translate(-50%);
      font-size: 30px;
    }
  }

  .btn-hover-yellow {
    svg.card-icon {
      width: 30px;
      height: 30px;
      fill: var(--yellow);
      transition: 0.3s all ease
    }
    &:hover {
      svg.card-icon {
        fill: var(--blue);
      }
    }
  }
}
</style>