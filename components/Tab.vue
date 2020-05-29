<template>
  <div v-show="isActive" class="tab-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: { required: true, type: String },
    coords: {
      required: false,
      type: Object,
      default() {
        return { lat: 0, lng: 0 };
      },
    },
  },
  data: () => {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.tab {
  &-content {
    h2 {
      margin-bottom: $spacer + 10px;
      font-size: 1.7em;
    }

    p {
      line-height: 25px;
    }
  }
}
</style>
