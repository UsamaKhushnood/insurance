<template >
    <div class="Security">
    <div class="row">
      <div class="col-md-12 mb-3 mt-0">
        <h4 class="text-center c-grey">
           Change User Password from here
        </h4>
      </div>
    <div class="col-md-8">
    
        <b-form class="mt-5 customer-signup-form" @submit.prevent="resetPassword">
        <b-form-group
          id="input-group-1"
          label="Current Password"
          label-for="input-1"
          class="mt-3 ml-2"
        >
          <b-form-input
            id="input-1"
            v-model="current_password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Password"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Password Confirmation"
          label-for="input-1"
          class="mt-3"
        >
          <b-form-input
            id="input-1"
            v-model="password_confirmation"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
       
      <button
          class="btn-blue btn-hover-yellow mt-4 btn-block"
        
        >
          Save
        </button>
       </b-form>
    </div>
        
      </div>
    </div>
</template>



<script>
export default {
  data() {
    return {
      selected: null,
      billingPlans: [],
      userPlan: '',
      cards: [1, 2, 3, 4, 1, 2, 3, 4],
    };
  },
  methods: {
    deleteCard(xIndex) {
      this.cards.splice(xIndex, 1);
    },
    async getMyPlans(){
      let vm = this;
        vm.$store
        .dispatch("HTTP_GET_REQUEST", this.$store.state.user.user_type+`/billing-plans`)
        .then((response) => {
          console.log("re", response.data.data.plans);
          vm.billingPlans = response.data.data.plans;
          vm.userPlan =  response.data.data.userPlan.lenght ? response.data.data.userPlan[0] : '';
          // vm.userPlan ={...response.data.data.userPlan};
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
      async assignPlans(plan){
      let vm = this;
        vm.$store
        .dispatch("HTTP_GET_REQUEST", this.$store.state.user.user_type+`/select-plan/`+plan.id)
        .then((response) => {
          console.log("re", response);
          vm.billingPlans = response.data.data;
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
   mounted() {
    this.getMyPlans();
  },
};
</script>
<style lang="scss">
.membership-plans {

  .plan {
    background: #fff;
    padding: 20px;
    min-height: 250px;
    text-align: center;
    position: relative;
    width: 300px;

    button {
      position: absolute;
      background: var(--light-grey);
      color: var(--blue);
      width: 250px;
      left: 50%;
      transform: translate(-50%);
      bottom: 19px;
      border-radius: 5px;
      &:hover {
        background: var(--blue);
        color: var(--light-grey);
      }
    }
  }
}

.pcard {
  margin-top: 10px !important;
  button.close-btn {
    border: 1px solid grey;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: grey;
    color: #fff;
    font-size: 21px;
    cursor: pointer;
  }
}

label {
  margin-left: 10px;
  cursor: pointer;
}  

.Security input#input-1{
    background: #fff !important;
  }
</style>