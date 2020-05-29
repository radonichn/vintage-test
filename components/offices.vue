<template>
  <div class="outer">
    <section class="offices wrapper container">
      <div class="offices-content">
        <h2>Our offices</h2>

        <tabs>
          <tab
            v-for="(tab, index) in tabs"
            :key="index"
            :title="tab.title"
            :coords="tab.coords"
          >
            <h2>{{ tab.content.heading }}</h2>

            <p>{{ tab.content.address }}</p>
            <p>{{ tab.content.zip }}</p>
            <p>{{ tab.content.country }}</p>
          </tab>
        </tabs>
      </div>
      <div class="offices-map">
        <office-map />
      </div>
    </section>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs';
import Tab from '@/components/Tab';
import OfficeMap from '@/components/OfficeMap';

export default {
  components: {
    Tabs,
    Tab,
    OfficeMap,
  },
  data() {
    return {
      tabs: [
        {
          title: 'Kyiv',
          coords: { lat: 50.4107125, lng: 30.5343028 },
          content: {
            heading: 'Global Message Services Ukraine LLC',
            address: 'Kyiv, Mendeleeva Street, 38',
            zip: '02000',
            country: 'Ukraine',
          },
        },
        {
          title: 'New York',
          coords: { lat: 40.783397, lng: -73.9772037 },
          content: {
            heading: 'Global Message Services USA LLC',
            address: 'New York, West Street, 80',
            zip: '10024',
            country: 'USA',
          },
        },
        {
          title: 'Guangzhou',
          coords: { lat: 23.0824799, lng: 113.4943163 },
          content: {
            heading: 'Global Message Services China LLC',
            address:
              'Dian Chang Xi Lu, Huangpu Qu, Guangzhou Shi, Guangdong Sheng',
            zip: '23124',
            country: 'China',
          },
        },
        {
          title: 'Barcelona',
          coords: { lat: 41.3884834, lng: 2.1801815 },
          content: {
            heading: 'Global Message Services Spain LLC',
            address: 'San Pere, La Ribera, Passeig de Picasso 91',
            zip: '08003',
            country: 'Spain',
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
  padding: 0;

  h2 {
    font-size: 2em;
  }

  &-content,
  &-map {
    overflow: hidden;
    width: 50%;
  }

  &-content {
    padding: $spacer * 3 $spacer 0;

    h2 {
      text-transform: capitalize;
    }
  }

  &-map {
    min-height: 550px;
  }
}
</style>
