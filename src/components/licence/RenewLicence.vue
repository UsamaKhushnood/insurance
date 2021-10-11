<template >
  <div>
    <b-modal
      id="renew-licence"
      ref="renew_licence"
      size="lg"
      class="box-shadow"
      hide-footer
      centered
    >
      <template #modal-header="{ close }">
        <b-icon
          icon="x-circle"
          variant="dark"
          scale="1.5"
          class="close-icon-floating pointer"
          @click="close()"
        ></b-icon>
      </template>
      <div class="renew-licence-modal-body">
        <div class="payment-card">
          <svg class="card-icon">
            <use xlink:href="@/assets/svg/master-card-icon.svg#card-icon"></use>
          </svg>
          <div class="card-number">
            <h6 class="card-info-label">Card Number</h6>
            <h5 class="card-info-value">{{ card.number }}</h5>
          </div>
          <div class="card-info">
            <div class="row">
              <div class="p-0 col-md-8">
                <h6 class="card-info-label">Card Owner</h6>
                <h5 class="card-info-value text-capitalize">{{ card.name }}</h5>
              </div>
              <div class="p-0 col-md-2">
                <h6 class="card-info-label">Issued</h6>
                <h5 class="card-info-value">{{ card.issue }}</h5>
              </div>
              <div class="p-0 col-md-2">
                <h6 class="card-info-label">Expire</h6>
                <h5 class="card-info-value">{{ card.expire }}</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="add-new-card mt-4 c-grey text-center">
          <h4>Add New Card</h4>
          <form class="mt-5">
            <h6 class="card-info-label">Credit Card Number</h6>
            <input type="text" v-model="card.number" />
            <h6 class="card-info-label">Credit Card Owner</h6>
            <input type="text" v-model="card.name" /> 
               <h6 class="card-info-label">CVC</h6>
            <input type="text" v-model="card.cvc" />
            <div class="row">
              <div class="p-0 pe-2 col-md-6">
                <h6 class="card-info-label">Issue On</h6>
                <input type="text" v-model="card.issue" />
              </div>
              <div class="p-0 ps-2 col-md-6">
                <h6 class="card-info-label">Expire On</h6>
                <input type="text" v-model="card.expire" />
              </div>
            </div>
          </form>

          <div class="serial-number c-blue fw-9 mt-5">
            <h2>GHS 120</h2>
          </div>
          <div class="pay-button mt-4">
            <div class="payment-btn-group">
              <button class="back-btn">
                <svg>
                  <use xlink:href="@/assets/svg/arrow-back.svg#back"></use>
                </svg>
                <span  @click="close()">Back</span>
              </button>
              <button class="pay-now-btn"  @click="renewPlan">Pay Now</button>
              <ConfirmationModal />
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios"
import $ from "jquery"
import ConfirmationModal from './ConfirmationModal.vue'
export default {
  name:'RenewLicence',
  components: {ConfirmationModal},
  data() {
    return {
      status: true,
      card: {
        number: "4242424242424242",
        name: "Ohemaa Yeboah",
        issue: "09",
        expire: "22",
        cvc: "093",
      },
    };
  },

  methods:{

    redirectUrl(url){
      window.open(url);

    },
     async renewPlan() {
      const vm = this;
      // vm.$store.commit("SET_SPINNER", true);
      vm.$toast.success('please wait your request is in Processs', {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
      await axios
        .post(
          process.env.VUE_APP_API_URL +
            vm.$store.state.user.user_type +
            "/payment",{ 
              card_number: this.card.number,
              card_owner: this.card.name,
              expiry_month: this.card.issue,
              expiry_year: this.card.expire,
              cvc: this.card.cvc
              }
        )
        .then((response) => {
          console.log("data::", response.data.data);
          vm.$store.commit("SET_SPINNER", false);
          // this.events = response.data.data;
           if(response.data.status == false){
            vm.$toast.error(response.data.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
          vm.status =false
          }else{
            vm.$toast.success(response.data.message, {
                position: "top-right",
                closeButton: "button",
                icon: true,
                rtl: false,
              });
              // v-b-modal.payment-successful
              vm.status =true
              window.open(response.data.data.redirect,'_self');
            //  window.open(response.data.data.redirect,'_blank');
              if(window.close){
                console.log()
              }
              // window.open(response.data.data.redirect,response.data.data.redirect , 'toolbar=0,location=0,menubar=0');
              // vm.redirectUrl( response.data.data.redirect)
              // window.location = response.data.data.redirect
              // window.location.href = response.data.data.redirect;
              // window.location.redirect(process.env.VUE_APP_URL)
          }
        })
        .catch((errors) => {
          console.log(errors);
          if (errors.response)
            this.$toast.error(errors.response.message, {
              position: "top-right",
              closeButton: "button",
              icon: true,
              rtl: false,
            });
        });
    },
    close(){
      this.$refs.renew_licence.hide();
    },
    confirmExit() {
        if (isAnyTaskInProgress) {
           return "Some task is in progress. Are you sure, you want to close?";
        }
    }
  }

};
</script>
<style lang="scss">
.renew-licence-modal-body {
  margin-top: 50px;
  padding-bottom: 50px;
  padding-top: 30px;
  width: 420px;
  margin: 0 auto;
  .payment-card {
    background: linear-gradient(153deg, red 0%, #003571 100%);
    height: 220px;
    width: 420px;
    border-radius: 5px;
    position: relative;
    color: #fff;
    .card-icon {
      width: 60px;
      height: 45px;
      position: absolute;
      right: 20px;
      top: 15px;
    }
    .card-number {
      position: absolute;
      top: 30px;
      left: 20px;
    }
    .card-info {
      position: absolute;
      bottom: 15px;
      left: 20px;
      width: calc(100% - 40px);
    }
    h6.card-info-label {
      font-size: 12px;
    }
  }

  .add-new-card {
    input {
      background: none !important;
      border-bottom: 2px solid #d8d8d8 !important;
      border-radius: 0 !important;
      width: 100%;
      text-align: center;
      padding: 5px !important;
      &:focus-visible {
        outline: none;
      }
    }

    h6.card-info-label {
      margin-top: 20px;
      font-size: 12px;
      color: #000;
    }
  }

  .serial-number {
    width: 150px;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 auto;
    h2 {
      margin: 0;
    }
  }

  .payment-btn-group {
    position: relative;
    display: flex;
    background: var(--yellow);
    border-radius: 5px;
    width: 380px;
    margin: 0 auto;
    button {
      border: none;
      border-radius: 5px;
      display: flex;
      align-items: center;
      background: none;
      font-weight: 900;
      padding: 12px 20px;
      &.back-btn {
        background: var(--blue) !important;
        color: var(--yellow);
        width: 250px;
      }
      &.pay-now-btn {
        width: 100%;
        justify-content: center;
        color: var(--blue)
      }
      svg {
        width: 25px;
        height: 25px;
        margin-right: 15px;
      }
    }
  }
}

.close-icon-floating {
  position: absolute;
  z-index: 999;
  right: 15px;
  top: 13px;
}
</style>