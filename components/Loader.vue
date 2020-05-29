<template>
  <div class="loader-container">
    <slot></slot>

    <div v-show="loading" class="loader-wrapper">
      <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: { required: true, default: true, type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  display: inline-block;
  position: relative;
  left: 0;
  top: 0;
  width: 80px;
  height: 80px;

  &-wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.5);
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }

  &-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
