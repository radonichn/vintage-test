<template>
  <div class="contact-us">
    <h2>Contact us</h2>

    <div class="container">
      <div class="contact-us-form">
        <form method="POST" @submit.prevent="handleSubmit">
          <form-group label="Name" type="text" />
          <form-group label="Phone" type="text" />
          <form-group label="Email" type="email" />
          <form-group
            label="I agree the processing of personal data"
            type="checkbox"
          />

          <button type="submit" class="contact-us-submit">
            get in touch
          </button>
        </form>
      </div>
      <div class="contact-us-text">
        <p>
          Please tell us more about your request and give us info about your
          company and country
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import FormGroup from '@/components/FormGroup';

export default {
  components: {
    FormGroup,
  },
  methods: {
    handleSubmit() {
      // console.log('success!');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.contact-us {
  padding: $spacer * 2 $spacer;
  background-image: radial-gradient(rgba($white, 0.3) 2px, transparent 5%);
  background-color: $green;
  background-position: -10px -10px;
  background-size: 70px 60px;

  h2 {
    text-transform: capitalize;
    margin-bottom: $spacer;
    font-size: 2em;
    color: $white;
  }

  &-form,
  &-text {
    width: 50%;
  }

  &-text {
    font-weight: 600;
  }

  &-submit {
    color: $white;
    background-color: $grey;
    border: 0;
    outline: none;
    transition: background-color 0.3s ease;
    padding: 20px 40px;
    text-transform: uppercase;
    font-family: 'Suisse SemiBold';
    font-size: 8px;
    letter-spacing: 2px;
    margin-top: $spacer;
    cursor: pointer;

    &:hover {
      background-color: $dark-grey;
      color: darken($white, 5);
    }
  }
}
</style>
