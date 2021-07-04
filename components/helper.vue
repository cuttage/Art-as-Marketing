<template>
  <keep-alive>
    <div>
      <p v-if="getToggleHelp === false" class="help-enabler">+ Help</p>
      <p v-if="getToggleHelp === true" class="help-enabler">– Help</p>
      <div v-if="getToggleHelp === true" class="previewer-wrapper previewer-wrapper-absolute previewer-wrapper-one" :class="prWclass">
        <div class="previewer-black previewer-card previewer-card-absolute" :class="prCclass">
          <slot name="helperslot"></slot>
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
      normalizedW: 'previewer-wrapper-normal',
      tailorizedW: 'previewer-wrapper-tailor',
      normalizedC: 'previewer-card-normal',
      tailorizedC: 'previewer-card-tailor'
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
.help-enabler {
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
  .help-enabler {
    top: 77vh;
  }
}

@media only screen and (max-height: 820px) {
  .help-enabler {
    top: calc(392.16px + 17.1vw);
  }
}
</style>
