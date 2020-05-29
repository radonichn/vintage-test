<template>
  <div class="tabs">
    <nav>
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['tabs-tab', { 'tabs-tab__active': tab.isActive }]"
          @click="selectTab(tab, index)"
        >
          {{ tab.title }}
        </li>
      </ul>
    </nav>
    <article
      :class="['tabs-details', { 'tabs-details__switched': switchedTab }]"
    >
      <slot></slot>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    defaultSelected: { required: false, type: Number, default: 0 },
  },
  data() {
    return {
      tabs: [],
      selectedIndex: 0,
      switchedTab: true,
    };
  },
  mounted() {
    this.tabs = this.$children;

    this.selectTab(this.tabs[this.defaultSelected], this.defaultSelected);
  },
  methods: {
    selectTab(tabItem, tabIndex) {
      this.$store.dispatch('map/setCoords', tabItem.coords).then(() => {
        setTimeout(() => {
          this.tabs.forEach((tab, index) => {
            tab.isActive = index === tabIndex;
          });

          this.switchedTab = true;
        }, 350);
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.tabs {
  ul {
    display: flex;
    margin: $spacer + 10px 0;
  }

  &-details {
    opacity: 0;
    transition: 0.3s ease opacity;

    &__switched {
      opacity: 1;
    }
  }

  &-tab {
    font-size: 1em;
    text-transform: uppercase;
    font-family: 'Suisse';
    transition: 0.3s ease color;
    cursor: pointer;

    &__active {
      color: $green;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:hover {
      color: darken($green, 20);
    }
  }
}
</style>
