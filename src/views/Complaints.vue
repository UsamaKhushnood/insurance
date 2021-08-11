<template >
  <div class="complaints">
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
        <h1>General Complaints</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          commodi?
        </p>
      </div>
      <div>
        <div class="ac-body mt-4">
          <div class="row">
            <div class="col-md-5">
              <b-form-group
                id="input-group-1"
                label="Subject"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  required
                  class="br-10"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Department"
                label-for="input-2"
                class="mt-3 br-5"
              >
                <b-form-input
                  id="input-2"
                  type="email"
                  required
                  class="br-10"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-7">
              <b-form-group
                id="input-group-1"
                label="Please type your complaint here"
                label-for="complaints"
              >
                <b-form-textarea
                  id="complaints"
                  type="email"
                  class="br-10"
                  rows="8"  no-resize
                  required
                ></b-form-textarea>
              </b-form-group>
            </div>
            <div class="col-md-12 text-end mt-4 ">
                <button class="btn-blue btn-hover-yellow w-25 br-5">
                    <b-icon icon="cursor"></b-icon>
                    Submit
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.complaints {
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

  textarea#complaints {
    background: var(--light-grey);
    border: none;
    box-shadow: inset 0 3px 10px rgb(0 0 0 / 20%);
}

  //   .btn-hover-yellow {
  //     svg.card-icon {
  //       width: 30px;
  //       height: 30px;
  //       fill: var(--yellow);
  //       transition: 0.3s all ease
  //     }
  //     &:hover {
  //       svg.card-icon {
  //         fill: var(--blue);
  //       }
  //     }
  //   }
}
</style>