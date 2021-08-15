<template>
  <div class="messaging">
    <BRow class="row">
      <div class="col-md-4 p-0 box-shadow">
        <div class="online-users">
          <div class="header row">
            <div class="col-md-3 p-0">
              <b-avatar
                src="https://placekitten.com/300/300"
                size="4rem"
              ></b-avatar>
            </div>
            <div class="col-md-8 p-0">
              <h5 class="c-dark-grey m-0">Janet Owusu</h5>
              <p class="c-dark-grey">Insurance Agent</p>
              <p class="c-online">
                Online <b-icon class="c-dark-grey" icon="chevron-down"></b-icon>
              </p>
            </div>
            <div class="col-md-1 p-0">
              <b-icon icon="gear"></b-icon>
            </div>
            <div class="col-md-12 mt-4 p-0 position-relative">
              <input
                type="search"
                name="searchuser"
                placeholder="Search for people"
                id="searchChatInput"
              />
              <i class="fas fa-search search-icon"></i>
            </div>
          </div>
          <div class="chatbox-body">
            <div
              class="user row"
              v-for="(x, xIndex) in users"
              :key="xIndex"
              :class="{ active: $route.params.id == xIndex }"
              @click="move('/messaging/chat/' + xIndex)"
            >
              <div class="col-md-2 align-self-center">
                <b-avatar
                  src="https://placekitten.com/300/300"
                  size="40px"
                ></b-avatar>
              </div>
              <div class="col-md-7">
                <h5 class="c-dark-grey">{{ x }}</h5>
                <p class="c-grey f-12">How is work going?</p>
              </div>
              <div class="col-md-3">
                <p class="c-grey f-10">2 hours</p>
              </div>
            </div>
          </div>
          <button class="btn-block btn-blue br-10 new-message-btn">
            <b-icon icon="plus-circle" class="me-2 f-18"></b-icon>
            New Message
          </button>
        </div>
      </div>
      <div class="col-md-8 p-0">
        <RouterView class="messaging-view" name="messaging" />
      </div>
    </BRow>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: ["Dan Agyemang", "Dan", "Agyemang","Dan Agyemang", "Dan", "Agyemang","Dan Agyemang", "Dan", "Agyemang","Dan Agyemang", "Dan", "Agyemang",],
    };
  },
  methods: {
    move(to) {
      this.$router.push({ path: to });
    },
  },
};
</script>
<style lang="scss">
.messaging {
  background: #f3f3f3;
  .online-users {
    position: relative;
    min-height: calc(100vh - 250px);
    #searchChatInput {
      background: #fff !important;
      width: 100%;
      border-radius: 50px !important;
      border: 1px solid var(--blue) !important;
      padding-left: 50px !important;
      &:focus-visible {
        outline: none !important;
      }
    }
    i.fas.fa-search.search-icon {
      position: absolute;
      left: 15px;
      top: 15px;
      font-size: 20px;
    }
    .header {
      padding: 20px 10px;
    }

    .chatbox-body {
      max-height: calc(100vh - 500px);
      overflow: auto;

      .user.row {
        padding: 10px 0;
        cursor: pointer;
        transition: 0.3s all ease;
        &:hover {
          background: #fff;
        }
        &.active {
          background: #fff;
        }
      }
    }
    .new-message-btn {
      position: absolute;
      bottom: 0;
      width: 94%;
      margin-left: 3%;
      margin-top: 17px;
    }
  }
}
.c-online {
  color: #76c00d;
}
</style>