<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <transition name="md4">
    <div class="uz8" :class="(desk) ? 'k9u' : ''">
      <div class="h3o">
        <div class="ruy">

          <div class="md6 disable">
            <slot name="s7u chldr">
              Hey!
            </slot>
          </div>

          <div class="ya6 disable">
            <slot name="dy5 chldr">
              By submitting the form, you consent to our
              <nuxt-link class="ya6__link" to="/privacy-policy">Privacy Policy</nuxt-link>.
              Please read it through.
            </slot>
          </div>

          <div class="t7y disable">
            <slot name="gh2 chldr">
              <div class="b2w" @click="emitMd4" role="button">
                OK
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['desk'],
  methods: {
    emitMd4(event) {
      this.$emit('close', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.uz8 {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.uz8,
.k9u {
  margin-bottom: auto;
  visibility: visible;
  display: table;
  height: 100%;
}

.h3o {
  display: table-cell;
  vertical-align: middle;
}

.ruy {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: blue;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: 'AtkinsonHyperlegibleBold';
  letter-spacing: 0.04em;
  font-weight: 800;
  line-height: 1.405em;
}

.md6 h3 {
  margin-top: 0;
  color: yellow;
}

.ya6 {
  margin: 20px 0;
  &__link {
    color: yellow;
  }
}

.b2w {
  cursor: pointer;
  background-color: yellow;
  margin-bottom: 0.331034848038453em;
  padding: 0.620690340072099em 1.241380680144199em;
  border-radius: 50%;
}

/*
 * The following styles are auto-applied to elements with
 * transition="md4" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the md4 transition by editing
 * these styles.
 */

.md4-enter {
  opacity: 0;
}

.md4-leave-active {
  opacity: 0;
}

.md4-enter .ruy,
.md4-leave-active .ruy {
  -webkit-transform: scale(0.99);
  transform: scale(0.99);
}

.chldr {
  text-rendering: geometricPrecision;
  position: relative;
  display: table;
  width: inherit;
  height: inherit;
  border-radius: 5px;
}

.disable {
  position: relative;
  display: inline-block;
  text-decoration: none;
  height: inherit;
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.disable::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 5px;
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.disable:hover::after {
  opacity: 1;
}

/* experimental feature: 375px limit in layout */
@media only screen and (max-device-width: 290px) and (orientation: portrait),
only screen and (max-width: 368px),
only screen and (max-width: 375px) and (max-resolution: 2.88dppx), // limit until 375px excluding iPhone 12 mini
only screen and (max-width: 375px) and (-webkit-max-device-pixel-ratio: 2.88),
only screen and (max-width: 460px) and (max-resolution: 1.6687500000dppx), // limit until 460px devices with max-resolution: 1.6687500000dppx (especially galaxy note II)
only screen and (max-width: 460px) and (-webkit-max-device-pixel-ratio: 1.6687500000),
only screen and (max-device-width: 480px) and (max-resolution: 2dppx) and (orientation: landscape), // limit anything below iPhone 4s in landscape
only screen and (max-device-width: 480px) and (-webkit-max-device-pixel-ratio: 2) and (orientation: landscape),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
  .uz8 {
    margin-bottom: 0;
    visibility: hidden;
    display: none;
    height: 0;
  }
}

/*only in default layout*/
@media only screen and (max-width: 524px),
only screen and (min-width: 1441px),
only screen and (min-height: 822px),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
  .k9u {
    margin-bottom: 0;
    visibility: hidden;
    display: none;
    height: 0;
  }
}
</style>
