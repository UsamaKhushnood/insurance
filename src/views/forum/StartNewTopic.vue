<template >
  <div class="start-new-topic">
    <div class="create-new-topic">
      <h1 class="heading">Create New Topic</h1>
      <form>
        <h6 class="feild-label topic-title">Topic Title</h6>
        <input
          type="text"
          placeholder="Subject of your topic"
          v-model="title"
          class="title-field"
        />
        <p class="feild-helper-text">
          Describe your topic well, while keeping the subject as short as
          possible.
        </p>
        <h6 class="feild-label topic-body">Topic Body</h6>
        <VueEditor v-model="description" />
        <div class="row">
          <div class="col-md-3">
            <h6 class="feild-label topic-body">Category</h6>
            <!-- <b-form-select
              :options="[]"
              value="option"
             
            ></b-form-select> -->
            <b-form-group >
          <v-select
          v-model="category"
          item-text="name"
          placeholder="Select Category"
          :getOptionLabel="data => data.name"
          :clearable="false"
          :options="doptions"
        ></v-select>
            </b-form-group>
          </div>
          <div class="col-md-9">
            <h6 class="feild-label topic-body">Sub Category</h6>
            <b-form-tags input-id="tags-basic" v-model="tags" class="field-tags"></b-form-tags>
          </div>
        </div>
        <div class="cpd mt-4">
          <button class="create-post-btn" @click.prevent="addTopic()">
            <i class="fa fa-paper-plane me-2"></i>
            Create Post
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
export default {
  components: { VueEditor },
   data() {
    return {
      category: '',
      title: '',
      description: '',
      tags: '',
      doptions: [],
    };
  },
  methods: {
    del(x) {
      this.messages.splice(x, 1);
    },
    async getOptions(){
      const vm = this;
    //   vm.$store.commit("SET_SPINNER", true);
      await axios
        .get(process.env.VUE_APP_API_URL+vm.$store.state.user.user_type+"/topic-categories")
        .then((response) => {
          console.log('data::',response.data.data);
          vm.$store.commit("SET_SPINNER", false);
      
          vm.doptions= response.data.data;      
        })
        .catch((errors) => {
          console.log(errors)
           if(errors.response)
          this.$toast.error(errors.response.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        });
    },
      async addTopic(){
        alert()
      const vm = this;
    //   vm.$store.commit("SET_SPINNER", true);
    var data ={
      title:this.title,
      category:this.tags.toString(),
      description:this.description,
      topic_category_id:this.category.id,
    }
      await axios
        .post(process.env.VUE_APP_API_URL+vm.$store.state.user.user_type+"/topics",data)
        .then((response) => {
          console.log('data::',response.data.data);
          vm.$store.commit("SET_SPINNER", false);
         if(response.data.status == false){
          vm.$toast.error(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          vm.title ='';
          vm.tags ='';
          vm.description ='';
          vm.topic_category_id ='';
              vm.$store.commit('SET_SPINNER',false);
          }else{
              vm.$store.commit('SET_SPINNER',false);
            vm.$toast.success(response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          }
          // vm.doptions= response.data.data;      
        })
        .catch((errors) => {
          console.log(errors)
           if(errors.response)
          this.$toast.error(errors.response.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        });
    }
  },
  mounted(){
    this.getOptions();
  } 
};
</script>
<style lang="scss">
@import "~vue2-editor/dist/vue2-editor.css";
@import "~quill/dist/quill.snow.css";

.start-new-topic {
  .create-new-topic {
    background: #fff;
    padding: 30px;
    border-radius: 7px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    h1.heading {
      font-size: 30px;
      color: var(--blue);
      border-bottom: 1px solid #d1d1d1;
      width: 350px;
      display: flex;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
      padding-bottom: 15px;
      margin-bottom: 25px;
    }
    h6.feild-label {
      color: var(--blue2);
      margin-top: 30px;
    }
    input.title-field {
      width: 100%;
      border-radius: 5px !important;
      //   box-shadow: inset 0 3px 10px rgb(0 0 0 / 20%);
      font-weight: 700;
    }
    p.feild-helper-text {
      color: var(--grey);
      font-size: 14px;
      font-weight: 700;
    }

    select.field-category.custom-select {
      width: 100% !important;
      border: none;
      background: var(--light-grey);
      padding: 10px;
      border-radius: 5px;
      height: 50px;
    }

    div.field-tags {
      background: var(--light-grey);
      border: none;
      padding: 10px;
      min-height: 50px !important;
    }

    button.create-post-btn {
      display: flex;
      border: none;
      background: var(--blue);
      color: var(--yellow);
      align-items: center;
      margin-left: auto;
      padding: 10px;
      border-radius: 5px;
      width: 200px;
      justify-content: center;
      font-size: 18px;
    }

    .b-form-tags .b-form-tags-list .b-from-tags-field,
    .b-form-tags .b-form-tags-list .b-form-tag.badge-secondary {
      color: var(--blue);
      font-size: 12px;
      font-weight: 700;
      background: var(--yellow);
    }

    button.close.b-form-tag-remove {
      border: none;
      background: var(--blue);
      color: #fff;
      border-radius: 5px;
    }

    li.b-from-tags-field.flex-grow-1 {
      background: none !important;
    }
  }

  // editor styling

  .ql-toolbar.ql-snow {
    border: none;
    filter: contrast(0.5);
  }
  div#quill-container {
    border: 0;
    .ql-editor {
      box-shadow: inset 0 3px 10px rgb(0 0 0 / 20%);
      background: var(--light-grey);
      border-radius: 5px;
    }
  }
}
</style>