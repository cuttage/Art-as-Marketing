<template>
  <keep-alive>
    <div>
      <p v-if="getToggleHelp === false" class="u08">+ Help</p>
      <p v-if="getToggleHelp === true" class="u08">– Help</p>
      <div v-if="getToggleHelp === true" class="csw d1k kwy" :class="prWclass">
        <div class="q0s ox6 idh" :class="prCclass">
          <slot name="HelpWrapSlot"></slot>
          <hr>
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
import { enactHelp } from '~/composables/toggle-help-store.js'
export default {
  props: ['mother'],
  setup () {
    const { getToggleHelp } = enactHelp();

    return {
      getToggleHelp
    }
  },
  data() {
    return {
      normalizedW: 'w28',
      tailorizedW: '7da',
      normalizedC: 'btj',
      tailorizedC: 'wgw'
    }
  },
  computed: {
    getMother() {
      return this.mother === 'Homepage11EScrollto' || this.mother === 'Homepage11AScrollto';
    },
    prWclass() {
      return this.getMother ? this.tailorizedW : this.normalizedW;
    },
    prCclass() {
      return this.getMother ? this.tailorizedC : this.normalizedC;
    }
  }
}
</script>

<style lang="scss" scoped>
.u08 {
  position: absolute;
  left: 28px;
  height: 5vh;
  display: inline-block;
  font-family: 'AtkinsonHyperlegibleBold';
  font-size: 26.647101746392745px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  font-weight: 560;
  color: #202124;
  text-rendering: geometricPrecision;
  text-transform: uppercase;
  padding: 3px 10px 3px 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

@media only screen and (min-height: 821px) {
  .u08 {
    top: 77vh;
  }
}

@media only screen and (max-height: 820px) {
  .u08 {
    top: calc(392.16px + 17.1vw);
  }
}
</style>
