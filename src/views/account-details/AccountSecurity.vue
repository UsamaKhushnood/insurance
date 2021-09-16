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
          class="mt-3 ml-2 "
        >
          <b-form-input
            id="input-1"
            class="wt"
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
            class="wt"
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
            class="wt"
            id="input-1"
            v-model="password_confirmation"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
       
      <button
          class="btn-blue btn-hover-yellow mt-4 btn-block"
        @click="resetPassword()"
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
    name:"Security",
   data() {
    return {
            current_password:'',
            password:'',
            password_confirmation:'',
        };
    },
    methods:{
        resetPassword(){
            let vm =this;
            let payload ={
                current_password:vm.current_password,
                password:vm.password,
                confirm_password:vm.password_confirmation,
            }
          if(this.current_password == '' || this.password == '' || this.password_confirmation == '' )
          {
            return;
          }
            vm.$store
                .dispatch("HTTP_POST_REQUEST", {
                url: vm.$store.state.user.user_type + `/password-change`,
                payload,
                })
                .then((response) => {
                console.log("re", response.data);
                if (response.data.status == false) {
                    vm.$toast.error(response.data.message, {
                    position: "top-right",
                    closeButton: "button",
                    icon: true,
                    rtl: false,
                    });
                } else {
                    vm.$toast.success(response.data.message, {
                    position: "top-right",
                    closeButton: "button",
                    icon: true,
                    rtl: false,
                    });
                    vm.current_password = '',
                    vm.password = '',
                    vm.password_confirmation = ''
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
        } 
    },
    mounted(){
      alert(1);
    }

}
</script>
<style lang="scss">
.wt {
  // background: #fff !important;
   background-color: #fff !important;
}

label[for="upload-pic-btn"] {
  // background: var(--yellow);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: absolute;
  top: 100px;
  right: 12px;
  cursor: pointer;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    /* color: #212529; */
   
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

input {
    background: #f8f9fa !important;
    border: 0px !important;
    padding: 12px 15px !important;
    border-radius: 15px !important;
    color: #000 !important;
}
</style>
