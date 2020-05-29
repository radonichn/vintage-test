<template>
  <div v-show="isActive" class="tab-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: { required: true, type: String },
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
    }

    p {
      line-height: 25px;
    }
  }
}
</style>
