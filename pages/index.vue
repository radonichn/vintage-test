<template>
  <div>
    <contacts />
    <offices />
    <contact-us />
  </div>
</template>

<script>
import Contacts from '../components/Contacts';
import Offices from '../components/Offices';
import ContactUs from '../components/ContactUs';

export default {
  components: {
    Contacts,
    Offices,
    ContactUs,
  },
};
</script>

<style></style>
