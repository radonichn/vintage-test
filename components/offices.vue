<template>
  <div class="outer">
    <section class="offices wrapper container">
      <div class="offices-content">
        <h2>Our offices</h2>

        <tabs>
          <tab v-for="(tab, index) in tabs" :key="index" :title="tab.title">
            <h2>{{ tab.content.heading }}</h2>

            <p>{{ tab.content.address }}</p>
            <p>{{ tab.content.zip }}</p>
            <p>{{ tab.content.country }}</p>
          </tab>
        </tabs>
      </div>
      <div class="offices-map"></div>
    </section>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs';
import Tab from '@/components/Tab';

export default {
  components: {
    Tabs,
    Tab,
  },
  data() {
    return {
      tabs: [
        {
          title: 'Kyiv',
          content: {
            heading: 'Global Message Services Ukraine LLC',
            address: 'Kuiv, Stepan Bandera, 33',
            zip: '02000',
            country: 'Ukraine',
          },
        },
        {
          title: 'New York',
          content: {
            heading: 'Global Message Services USA LLC',
            address: 'Kuiv, Long Avenue, 128',
            zip: '07000',
            country: 'USA',
          },
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.outer {
  width: 100%;
  background-color: $dark-grey;
}

.offices {
  color: $white;
  padding: $spacer * 2;

  h2 {
    font-size: 2em;
  }

  &-content,
  &-map {
    overflow: hidden;
    width: 50%;
  }

  &-content {
    h2 {
      text-transform: capitalize;
    }
  }

  &-map {
    min-height: 400px;
  }
}
</style>
