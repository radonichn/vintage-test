<template>
  <section id="contact-us-form" class="contact-us">
    <div class="wrapper">
      <h2>Contact us</h2>

      <div
        :class="[
          'result-message',
          `__${resultMessage.type}`,
          { 'result-message__active': resultMessage.show },
        ]"
      >
        <p class="result-title">
          {{ resultMessage.title }}
        </p>
        <p class="result-description">
          {{ resultMessage.description }}
        </p>
      </div>

      <div class="container">
        <div class="contact-us-form">
          <form method="POST" @submit.prevent="handleSubmit">
            <loader :loading="sendingData">
              <form-group
                label="Name"
                type="text"
                validation-type="name"
                :error="error.name"
                @input="inputFields"
              />
              <form-group
                label="Phone"
                type="text"
                validation-type="phone"
                :error="error.phone"
                @input="inputFields"
              />
              <form-group
                label="Email"
                type="email"
                validation-type="email"
                :error="error.email"
                @input="inputFields"
              />
              <form-group
                label="I agree the processing of personal data"
                type="checkbox"
                validation-type="terms"
                :error="error.terms"
                @input="inputFields"
              />

              <button
                type="submit"
                :class="[
                  'contact-us-submit',
                  { 'contact-us-submit__disabled': sendingData },
                ]"
                :disabled="sendingData"
              >
                get in touch
              </button>
            </loader>
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
  </section>
</template>

<script>
import FormGroup from '@/components/FormGroup';
import Loader from '@/components/Loader';

export default {
  components: {
    FormGroup,
    Loader,
  },
  data() {
    return {
      resultMessage: {
        type: '',
        title: '',
        description: '',
      },
      sendingData: false,
      fieldData: {
        name: '',
        phone: '',
        email: '',
        terms: false,
      },
      error: {
        name: '',
        phone: '',
        email: '',
        terms: '',
      },
    };
  },
  methods: {
    handleSubmit(e) {
      const data = { ...this.fieldData };

      Object.entries(data).forEach(([key, value]) => {
        this.error[key] = this.validateFields(value, key);
      });

      if (Object.values(this.error).every(v => v === '')) {
        this.sendingData = true;

        this.$axios
          .post('https://httpbin.org/post', data)
          .then(res => {
            console.log(
              'Your result is here',
              res && res.data && res.data.json
            );

            this.resultMessage = {
              show: true,
              type: 'success',
              title: 'Success!',
              description: 'Message has been sent successfully!',
            };
          })
          .catch(() => {
            this.resultMessage = {
              show: true,
              type: 'error',
              title: 'Fail!',
              description: 'An error occured. Please, try later',
            };
          })
          .finally(() => {
            setTimeout(() => {
              this.sendingData = false;
            }, 300);

            setTimeout(() => {
              this.resultMessage = {
                show: false,
              };
            }, 1500);
          });
      }
    },

    inputFields(val, validationType) {
      this.fieldData[validationType] = val;
    },

    validateFields(val, validationType) {
      let regex = '';
      let message = '';

      switch (validationType) {
        case 'name':
          regex = /^[a-zA-Z ]+$/gm;
          message = 'Please, input valid name';

          break;

        case 'phone':
          regex = /^((\+380)+([0-9]){9})$/gm;
          message = 'Please, input valid phone number';

          break;

        case 'email':
          regex = /\S+@\S+\.\S+/gm;
          message = 'Please, input valid email';

          break;
      }

      let fieldError;

      if (validationType !== 'terms') {
        fieldError = regex.test(val) ? '' : message;
      } else {
        fieldError = val ? '' : 'Please, accept the processing data terms';
      }

      return fieldError;
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

  @media all and (max-width: $bp-md) {
    padding: 0;
  }

  h2 {
    text-transform: capitalize;
    margin-bottom: $spacer;
    font-size: 2em;
    color: $white;
  }

  &-form,
  &-text {
    width: 50%;

    @media all and (max-width: $bp-md) {
      width: 100%;
    }
  }

  &-form {
    @media all and (max-width: $bp-md) {
      margin-bottom: $spacer;
    }

    form {
      max-width: $form-width;
      width: 100%;
    }
  }

  &-text {
    font-weight: 600;
  }

  &-submit {
    color: $white;
    background-color: $grey;
    border: 0;
    outline: none;
    transition: all 0.3s ease;
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

    &__disabled {
      background-color: #6d6d6d;
      color: #bfbfbf;

      &:hover {
        background-color: #6d6d6d;
        color: #bfbfbf;
      }
    }
  }

  .result {
    &-message {
      display: block;
      position: fixed;
      top: 20px;
      right: -100vw;
      padding: $spacer / 2;
      z-index: 99999;
      transition: right 0.5s ease;
      background-color: $white;
      box-shadow: 1px 1px 6px -3px $grey;
      border-radius: 10px;

      &.__success {
        color: $green;
      }

      &.__error {
        color: $red;
      }

      &__active {
        right: 10px;
      }
    }

    &-title {
      margin-bottom: 15px;
      font-weight: 600;
      font-size: 1em;
    }

    &-description {
      font-size: 0.8em;
    }
  }
}
</style>
