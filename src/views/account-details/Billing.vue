<template >
  <div class="notificaiton">
    <div class="row">
      <div class="col-md-12 mb-3 mt-0 mb-5">
        <h4 class="text-center c-grey">Membership Plan &amp; Billing</h4>
      </div>
      <div class="row membership-plans justify-content-evenly">
        <div class="anual-plan plan" v-for="(plan,index) in billingPlans" :key="index">
          <h1 class="c-blue mt-4">{{plan.name}}</h1>
          <h6 class="c-grey">NGN {{plan.amount}} </h6>
          <button class="btn-blue btn-block" v-if=" userPlan.id == plan.id && userPlan.user.plan_status == 1 " @click="assignPlans(plan)">Active</button>
          <button class="btn-blue btn-block" v-else  @click="assignPlans(plan)">Downgrade</button>
        </div>
    
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-md-12 mt-5 mb-2">
        <h5 class="c-blue">My Cards</h5>
      </div>
      <div class="col-md-5">
        <p class="c-grey">Card</p>
      </div>
      <div class="col-md-4">
        <p class="c-grey">Name on Card</p>
      </div>
      <div class="col-md-2">
        <p class="c-grey">Expiry</p>
      </div>
    </div>
    <div class="row pcard" v-for="(x, xIndex) in cards" :key="xIndex">
      <div class="col-md-5">
        <p class="c-grey fw-6">
          <b-form-radio v-model="selected" name="cards" value="visa">
            <img src="@/assets/images/master.png" width="35px" />
            Master
          </b-form-radio>
        </p>
      </div>
      <div class="col-md-4">
        <p class="c-grey fw-6">Janet Owusu</p>
      </div>
      <div class="col-md-2">
        <p class="c-grey fw-6">02/12</p>
      </div>
      <div class="col-md-1">
        <button class="close-btn" @click="deleteCard(xIndex)">
          <b-icon icon="x"></b-icon>
        </button>
      </div>
    </div> -->
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
</style>