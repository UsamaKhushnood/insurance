<template>
  <div class="auth-dropdown">
    <div class="c-dropdown-btn" @click="toggle = !toggle">
      <b-icon icon="three-dots-vertical" aria-hidden="true"></b-icon>
    </div>
    <div class="c-dropdown-body box-shadow" :class="[toggle ? 'show' : 'hide']">
      <div class="close-btn" @click="toggle = !toggle">
        <b-icon icon="x" aria-hidden="true"></b-icon>
      </div>
      <ul>
        <slot></slot>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
};
</script>
<style lang="scss">
.auth-dropdown {
  position: relative;
  width: 30px;
  height: 30px;

  .c-dropdown-btn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    background: var(--light-grey);
    border-radius: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    cursor: pointer;
  }

  .c-dropdown-body {
    background: var(--light-grey);
    padding: 0 15px;
    padding-top: 50px;
    padding-bottom: 15px;
    position: absolute;
    right: -5px;
    top: -5px;
    z-index: 2;
    width: 220px;
    border-radius: 20px;
  }
  .c-dropdown-item {
    padding: 8px 15px;
    color: var(--blue);
    border-radius: 10px;
    cursor: pointer;
    transition: 0.1s all ease-in;
    &:hover {
      color: #fff;
      border-radius: 0;
      background: var(--blue);
    }
    // &:nth-child(1):hover {
    //   border-radius: 10px 10px 0 0 !important;
    // }
    &:nth-child(3):hover {
      border-radius: 0 0 10px 10px !important;
    }
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #000;
    color: #fff;
    font-size: 19px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  .c-icon {
    margin-right: 10px;
  }
}
</style>