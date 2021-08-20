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
    name:"Security",
    data(){
        return {
            current_password:'',
            password:'',
            password_confirmation:'',
        }
    },
    methods:{
        resetPassword(){
            let vm =this;
            let payload ={
                current_password:vm.current_password,
                password:vm.password,
                confirm_password:vm.password_confirmation,
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
    mounted:{
        
    }

}
</script>
<style lang="scss">
.Security input {
  background: #fff !important;
}

label[for="upload-pic-btn"] {
  background: var(--yellow);
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
</style>
