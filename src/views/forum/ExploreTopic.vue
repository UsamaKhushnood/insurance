<template >
  <div class="explore-topic">
    <BRow>
      <BCol cols="9">
        <div class="forum-posts">
          <div
            class="single-forum-post"
            v-for="(post, pIndex) in formPost"
            :key="pIndex"
          >
            <div class="fp-votes">
              <b-icon icon="arrow-up" variant="dark"></b-icon>
              <p class="fp-count fw-7 f-18 text-danger">75</p>
              <b-icon icon="arrow-down" variant="danger"></b-icon>
            </div>
            <div>
              <div class="fp-body">
                <h4 class="fp-title">What does the lion say all the time???</h4>
                <h6 class="fp-post-desc mt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Distinctio autem nesciunt aspernatur, ducimus temporibus
                  corrupti! Recusandae deleniti veritatis vitae consequatur,
                  aperiam distinctio iusto minima eaque cupiditate amet! Odio,
                  reiciendis incidunt. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Distinctio autem nesciunt aspernatur,
                  ducimus temporibus corrupti! Recusandae deleniti veritatis
                  vitae consequatur, aperiam distinctio iusto minima eaque
                  cupiditate amet! Odio, reiciendis incidunt.
                </h6>
              </div>
              <div class="fp-footer mt-4">
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <div class="d-flex align-items-center">
                      <b-avatar
                        variant="info"
                        src="https://placekitten.com/300/300"
                        class="mr-3"
                      ></b-avatar>
                      <span class="ms-3 fw-7">
                        Posted By:
                        <span class="text-primary"> Super Kitty</span>
                      </span>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <span class="fw-7">16 hrs ago</span>
                  </div>
                  <div class="col-md-3 d-flex align-items-center">
                    <b-icon
                      icon="chat-left-text-fill"
                      class="f-20 ms-auto c-blue"
                    ></b-icon>
                    <span class="fw-7 ms-3">87+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BCol>
      <BCol cols="3"> right sidebar working </BCol>
    </BRow>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formPost: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
};
</script>
<style lang="scss">
.explore-topic {
  .forum-posts {
    max-height: calc(100vh - 220px);
    overflow: auto;
    padding: 15px;
    padding-top: 5px;
    .single-forum-post {
      display: flex;
      background-color: #fff;
      border-radius: 10px;
      padding: 30px 40px 25px 0;
      color: var(--grey);
      margin-bottom: 25px;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      .fp-votes {
        align-items: center;
        display: flex;
        min-width: 100px;
        flex-direction: column;
        svg.bi-arrow-up,
        svg.bi-arrow-down {
          font-size: 30px;
        }
      }
      .fp-body {
        border-bottom: 1px solid #d1d1d1;
        text-align: justify;
        padding-bottom: 25px;
      }
    }
  }
}
</style>