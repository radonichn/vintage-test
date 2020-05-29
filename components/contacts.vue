<template>
  <section class="contacts wrapper">
    <h1>Contacts</h1>

    <div class="contacts-content container">
      <div class="contacts-info container">
        <h2><span class="green">GMS</span> Headquartest</h2>

        <div class="contacts-address">
          <p>
            Global Message Services Ukraine LLC
          </p>
          <p>
            Bundesstrasse 5 | 3rd Floor
          </p>
          <p>
            6300 Zug
          </p>
          <p>
            Switzerland
          </p>

          <a href="tel:+41415446200" class="contacts-tel green-link">
            +41 41 544 62 00
          </a>
        </div>
        <div class="contacts-social">
          <div class="contacts-social-item">
            <p>Email</p>
            <a href="mailto:info@gms-worldwide.com" class="green-link">
              info@gms-worldwide.com
            </a>
          </div>
          <div class="contacts-social-item">
            <p>Send message</p>
            <a href="viber://add?+41415446200" class="green-link">
              viber us
            </a>
          </div>
          <div class="contacts-social-item">
            <p>Send form</p>
            <a href="#contact-us" class="green-link">
              contact us
            </a>
          </div>
        </div>
      </div>
      <div class="contacts-support">
        <h2>
          Technical support
          <span class="green">
            24/7
          </span>
        </h2>

        <p>
          GMS understands that it can be hard to follow all new technologies. We
          regularly provide for all our clients educational trainings to make
          your operator`s business earn more and better though our best
          practices.
        </p>

        <a href="tel:+41415446206" class="green-link">
          +41 41 544 62 06
        </a>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.contacts {
  color: $grey;

  h1,
  h2 {
    font-weight: 300;
  }

  h1 {
    font-size: 3em;
    padding-bottom: $spacer / 3;
  }

  h2 {
    padding-bottom: $spacer;
    font-size: 2em;
  }

  &-content {
    padding-top: $spacer;
  }

  &-info,
  &-support {
    width: 50%;
  }

  &-info {
    h2 {
      width: 100%;
      text-align: left;
    }
  }

  &-address,
  &-social {
    width: 50%;
  }

  &-address {
    p {
      &:not(:last-child) {
        padding-bottom: 14px;
      }
    }

    a {
      font-size: 2em;
      display: block;
      padding-top: $spacer;
    }
  }

  &-social {
    &-item {
      &:not(:last-child) {
        padding-bottom: 13px;
      }
    }

    p {
      padding-bottom: 18px;
    }

    a {
      font-family: 'Suisse SemiBold';
      text-transform: uppercase;
    }
  }

  &-support {
    p {
      line-height: 25px;
    }

    a {
      font-size: 2em;
      display: block;
      padding-top: $spacer;
    }
  }
}
</style>
