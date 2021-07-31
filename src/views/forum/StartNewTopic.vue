<template >
  <div class="start-new-topic">
    <div class="create-new-topic">
      <h1 class="heading">Create New Topic</h1>
      <form>
        <h6 class="feild-label topic-title">Topic Title</h6>
        <input
          type="text"
          placeholder="Subject of your topic"
          class="title-field"
        />
        <p class="feild-helper-text">
          Describe your topic well, while keeping the subject as short as
          possible.
        </p>
        <h6 class="feild-label topic-body">Topic Body</h6>
        <VueEditor />
        <div class="row">
          <div class="col-md-3">
            <h6 class="feild-label topic-body">Category</h6>
            <b-form-select
              :options="['option', 'option2', 'option3']"
              value="option"
              class="field-category"
            ></b-form-select>
          </div>
          <div class="col-md-9">
            <h6 class="feild-label topic-body">Sub Category</h6>
            <b-form-tags input-id="tags-basic" class="field-tags"></b-form-tags>
          </div>
        </div>
        <div class="cpd mt-4">
          <button class="create-post-btn">
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