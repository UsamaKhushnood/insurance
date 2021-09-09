<template>
  <div class="licence">
    <div class="row">
      <div class="col-md-8">
        <div class="licence-renewal">
          <div class="heading">
            <h1 class="licence-renewal-title c-blue">
              One-Click Licence Renewal
            </h1>
            <p class="licence-renewal-desc c-grey fw-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              magnam, provident, voluptates tempora expedita voluptate, nemo
              laborum voluptatibus minus molestias libero eius odio aut pariatur
              quam facere enim nostrum sit?
            </p>
          </div>
        </div>
        <div class="invoice-list mt-4">
          <h4 class="c-blue fw-6">Invoices</h4>
          <div class="invoices" v-for="(x, xIndex) in invoices" :key="xIndex">
            <div class="invoice">
              <div class="pdf-icon">
                <img src="@/assets/icons/pdf.png" width="30px" />
              </div>
              <a href="#" @click="getFile(x.id)" class="invoice-number ms-4 c-blue"

                >NAG00{{ xIndex + 1 }}</a
              >
              <div class="download-invocie ms-auto">
                <b-icon icon="download"></b-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-6">
            <div class="status-info pointer" v-b-modal.check-status>
              <div class="check-status status">
                <div class="status-icon">
                  <svg>
                    <use xlink:href="@/assets/svg/card.svg#card"></use>
                  </svg>
                </div>
                <div class="status-desc">
                  <h6 class="c-yellow text-center" @click="checkLicence">Check status</h6>
                </div>
              </div>
            </div>
            <CheckStatus :status='status' />
          </div>
          <div class="col-md-6">
            <div class="status-info pointer" v-b-modal.renew-licence>
              <div class="check-status status">
                <div class="status-icon">
                  <svg>
                    <use xlink:href="@/assets/svg/renew.svg#renew"></use>
                  </svg>
                </div>
                <div class="status-desc">
                  <h6 class="c-yellow text-center">renew now!</h6>
                </div>
              </div>
            </div>
            <RenewLicence />
          </div>
        </div>
        <div class="banners mt-5">
          <div class="active-licence-banner">
            <div class="row align-items-center">
              <div class="col col-md-4">
                <svg class="card-icon">
                  <use xlink:href="@/assets/svg/card.svg#card"></use>
                </svg>
              </div>
              <div class="col col-md-8 text-center">
                <h2>Active Licence</h2>
                <p>you have an active verified licence</p>
              </div>
            </div>
          </div>

          <div class="nagia-membership-banner mt-5">
            <div class="row align-items-center banner-header">
              <div class="col col-md-4">
                <img src="@/assets/logo.png" class="logo" width="100px" />
              </div>
              <div class="col col-md-8 text-center">
                <h2>Nagia Membership</h2>
                <p>you have an active verified licence</p>
              </div>
            </div>
            <div class="membership-desc mt-2 p-3">
              <p>
                Aenean arcu tortor, porttitor vitae sollicitudin quis, suscipit
                ut est. Duis in nulla vitae nisl pulvinar dignissim eu quis
                ante. Integer eget justo id eros condimentum accumsan id non
                diam. Duis ut ante nec ipsum lobortis posuere at ac quam. Fusce
                convallis, metus sagittis ornare ornare, nibh sapien elementum
                velit, ut rhoncus augue justo sed tortor. Nullam in massa
                semper, bibendum felis in, porta felis. In neque dui, ultrices
                sed consectetur id, luctus id erat. Nunc vitae ex at orci
                elementum feugiat vitae in arcu.
              </p>
              <p>
                Fusce ut mi ullamcorper, dictum quam sit amet, gravida nunc.
                Aliquam efficitur eu magna eget fringilla. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Duis hendrerit
                sollicitudin lectus eget sollicitudin. Proin pretium enim vitae
                turpis consectetur pharetra. Morbi vel lorem libero. Curabitur
                dapibus ante ac eros hendrerit, vitae commodo quam tristique.
                Mauris sit amet ante interdum est porttitor aliquet eu et diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckStatus from "@/components/licence/CheckStatus";
import RenewLicence from "@/components/licence/RenewLicence";
import axios from 'axios';
export default {
  components: { CheckStatus, RenewLicence },
  data() {
    return {
      invoices: [],
      status: '',
    };
  },
    methods: {
    deleteCard(xIndex) {
      this.cards.splice(xIndex, 1);
    },
    async checkLicence(){
      let vm = this;
        vm.$store
        .dispatch("HTTP_GET_REQUEST", this.$store.state.user.user_type+`/check-license`)
        .then((response) => {
          console.log("re", response);
         
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
          vm.status =true
              // vm.$router.push({ path: "login" });
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
    async getAllInvocies(){
      let vm = this;
        vm.$store
        .dispatch("HTTP_GET_REQUEST", this.$store.state.user.user_type+`/all-invoices`)
        .then((response) => {
          console.log("re", response);
         
          if(response.data.status == false){
          vm.$toast.error(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          vm.status =false
          }else{
          
          vm.invoices =response.data.data
              // vm.$router.push({ path: "login" });
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
   
   async getFile(id){
      let vm = this;
        vm.$store
        .dispatch("HTTP_GET_REQUEST", this.$store.state.user.user_type+`/invoice/${id}`)
        // axios.get('https://insurance.jawadmobiles.com/api/'+this.$store.state.user.user_type+`/invoice/${id}`)
        .then((response) => {
          console.log("re", response);
         
          if(response.data.status == false){
          vm.$toast.error(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          vm.status =false
          }else{
            console.log(response.data.data)
            console.log(response.data)
           window.open(response.data.data,'_blank');
          // vm.invoices =response.data
              // vm.$router.push({ path: "login" });
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
   mounted() {
    this.getAllInvocies();
  },
};
</script>
<style lang="scss">
.licence-renewal {
  text-align: right;
  background-image: url("../assets/images/mobile.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 250px;
  display: flex;
  align-items: center;
  .heading {
    width: 600px;
    margin-left: 260px;
    text-align: left;
  }
}
.invoice-list {
  background: #fff;
  padding: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  .invoice {
    display: flex;
    padding: 10px;
    background: #fff;
    margin-bottom: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    align-items: center;
    border-radius: 5px;
  }
}

.status-info {
  background: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  border-radius: 10px;
  .status-icon {
    display: flex;
    justify-content: center;
    height: 110px;
    svg {
      fill: var(--yellow);
      width: 70px;
    }
  }
  .status-desc {
    h6 {
      background: var(--blue);
      border-radius: 0 0 10px 10px;
      padding: 10px;
      text-transform: capitalize;
    }
  }
}

.active-licence-banner {
  background: linear-gradient(
    153deg,
    rgba(13, 188, 48, 1) 0%,
    rgba(255, 187, 19, 1) 100%
  );
  color: #fff !important;
  border-radius: 10px;

  svg.card-icon {
    width: 100px;
    fill: #fff;
  }
  h1 {
    text-transform: capitalize;
  }
  p {
    text-transform: capitalize;
    font-weight: 900;
  }
}

.nagia-membership-banner {
  background: linear-gradient(
    153deg,
    rgba(176, 13, 188, 1) 0%,
    rgba(19, 98, 255, 1) 100%
  );
  color: #fff !important;
  border-radius: 10px;
  padding: 10px;
  p {
    text-transform: capitalize;
    font-weight: 900;
  }
}

@media only screen and (max-width: 1360px) {
  .active-licence-banner {
    .row {
      flex-direction: column;
      padding-bottom: 20px;
      .col {
        width: 100%;
        text-align: center;
      }
    }
  }

  .nagia-membership-banner {
    .banner-header {
      flex-direction: column;
      .col {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>