<template>
  <div>
    <div class="form-group">
      <input
        :id="label"
        :type="type"
        :class="[
          { 'form-input': type !== 'checkbox' },
          { 'form-checkbox': type === 'checkbox' },
          { 'form-input__error': !!error },
        ]"
        required
        @change="onChange"
      />
      <label :for="label" :class="{ 'input-label': type !== 'checkbox' }">{{
        label
      }}</label>
      <div v-if="type !== 'checkbox'" class="form-line"></div>
    </div>

    <p v-show="!!error" class="form-error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: { required: true, type: String },
    type: { required: true, type: String },
    validationType: { required: true, type: String },
    error: { required: true, type: String },
  },
  methods: {
    onChange(e) {
      this.$emit(
        'input',
        this.type === 'checkbox' ? e.target.checked : e.target.value,
        this.validationType
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.form {
  &-group {
    position: relative;
    max-width: $form-width;
    margin: $spacer / 3 0;

    label {
      font-size: 0.8em;
      color: $white;

      &.input-label {
        position: absolute;
        left: 0;
        top: 0;
        line-height: 37px;
        max-width: 50px;
        z-index: 1000;
        font-weight: 600;
        color: $grey;
        transition: color 0.3s ease;
        font-size: 1em;
      }
    }

    &:hover {
      .input-label {
        color: $white;
      }

      .form-line {
        background-color: $white;
        width: 100%;
      }
    }
  }

  &-input {
    border: none;
    border-bottom: 1px solid $grey;
    background: transparent;
    width: 100%;
    padding: 10px 0 10px 60px;
    outline: none;
    font-size: 1em;

    &:focus {
      + .input-label {
        color: $white;

        + .form-line {
          width: 100%;
        }
      }
    }

    &__error {
      + label {
        &.input-label {
          color: $red;

          + .form-line {
            background-color: $red;
            width: 100%;
          }
        }
      }

      &:hover,
      &:focus {
        + .input-label {
          color: darken($red, 20);

          + .form-line {
            background-color: darken($red, 20);
            width: 100%;
          }
        }
      }
    }
  }

  &-checkbox {
    &:checked {
      + label {
        color: #fff;
      }
    }
  }

  &-line {
    height: 1px;
    width: 0px;
    position: absolute;
    background-color: $white;
    display: inline-block;
    transition: 0.3s width ease-in-out;
    bottom: 0;
    left: 0;
  }

  &-error {
    color: $red;
    font-family: 'Suisse SemiBold';
    font-size: 11px;
    margin-top: 5px;
  }
}
</style>
