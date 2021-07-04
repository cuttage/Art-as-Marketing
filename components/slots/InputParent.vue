<template>
  <article class="article logoarticle">
    <div class="nitem" />
    <div id="panel" class="nitem" :style="diapoclass2C">
      <!-- disables if currentDiapo is first entry of diapos array -->
      <!-- click event passes which direction to one method -->
      <span role="button" v-bind:class="{disabled: currentDiapo === 0}" @click="changeDiapo('prev')"></span>
      <!-- disables if currentDiapo is at end of diapos array -->
      <!-- click event passes which direction to one method -->
      <span role="button" v-bind:class="{disabled: currentDiapo === diapos.length - 1}" @click="changeDiapo('next')"></span>
    </div>
    <article v-show="this.currentDiapo === 0" class="nitem" :style="diapoclassC" :key="diapoaKeySub">
      <LogoMob class="block_start_headline" :key="diapoaKeySub1"></LogoMob> <!--One tap, double tap, above or below-->
    </article>
    <component :is="diapos[currentDiapo]" v-if="this.currentDiapo === 1" class="nitem" :style="diapoclassC" :key="diapobKey">
      <slot name="inputBlueContent"></slot>
      <InputBlue class="block_start_headline" @hook:created="childResponse" @hook:beforeDestroy="childResponse" :key="diapobKeySub1"></InputBlue>
    </component>
  </article>
</template>

<script>
import InputBlue from '~/components/slots/InputBlue_test.vue'
import { mapState } from 'vuex'
export default {
  name: 'InputParent',
  data() {
    return {
      diapos: ['diapoA', 'diapoB'],
      // number to reference the index of the diapos array
      currentDiapo: 0,
      diapoaKeySub: "aa" + 2,
      diapoaKeySub1: "aaa" + 2,
      diapobKey: "b" + 2,
      diapobKeySub1: "bbb" + 2,
      diapoclass: '20.2vw'
    }
  },
  components: {
    LogoMob: () => import("~/components/LogoMob.vue"),
    InputBlue
  },
  computed: {
    ...mapState({
      toggleSidebar: 'toggleSidebar'
    }),
    diapoclassC() {
      return {
        'min-height': `${this.diapoclass}px`
      }
    },
    diapoclass2C() {
      return {
        'min-height': `${this.diapoclass}px`,
        'marginTop': `-${this.diapoclass}px`
      }
    }
  },
  methods: {
    changeDiapo(dir) {
      // simple test against dir string
      // if "next" then increase currentDiapo by 1, otherwise decrease by 1
      // would be really easy to create a rule to go to first or last diapo as well
        this.$nextTick(() => {this.currentDiapo = dir === 'next' ? this.currentDiapo + 1 : this.currentDiapo - 1})
    },
    valCache(data) {
      return (this.diapoclass === data) ? this.diapoclass : this.diapoclass = data;
    },
    childResponse() {
      if (this.toggleSidebar === false) {
        return this.$bus.$emit('nav-logo-b')
      }
    }
  },
  created() {
    //this.$bus.$on('dropd-change', (data) => {this.diapoclass = data});
    this.$bus.$on('dropd-change', (data) => {this.valCache(data)});
  }
}
</script>

<style lang="scss" scoped>
.block_start_headline {
  z-index: 6;
}

.logoarticle {
  display: grid;
  visibility: visible;
  width: 100%;
  z-index: 996;
  background-color: black;
}

.nitem {
  flex-grow: 1;
  height: 20.2vw;
  margin-top: calc(10vw - 8vw + 50px);
}

.nitem + .nitem {
  margin-top: -20.2vw;
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
  .logoarticle {
    display: none;
    visibility: hidden;
  }
}

#panel {
  display: flex;
  position: relative;
  width: 100%;
  z-index: 997;

  span {
    cursor: pointer;
    flex-grow: 1;

    &.disabled {
      pointer-events: none;
    }
  }
  div {
    align-items: center;
    display: flex;
  }
}
</style>
