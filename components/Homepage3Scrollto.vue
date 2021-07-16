<template>
  <div>
    <Homepage11CScrollto
      v-if="isHomepage11CScrolltoActive"
      class="ay2"
    />
    <Homepage12CScrollto
      v-if="isHomepage12CScrolltoActive"
      class="ay2"
    />
    <Homepage13CScrollto
      v-if="isHomepage13CScrolltoActive"
      class="ay2"
    />
    <Homepage14CScrollto
      v-if="isHomepage14CScrolltoActive"
      class="ay2"
    />
    <Homepage15CScrollto
      v-if="isHomepage15CScrolltoActive"
      class="ay2"
    />

    <div class="15n">
      <div class="ppk item1" :class="peEnabled" @mouseover="toggleHomepage11CScrollto" />
      <div class="ppk item2" :class="peEnabled" @mouseover="toggleHomepage12CScrollto" />
      <div class="ppk item3" :class="peEnabled" @mouseover="toggleHomepage13CScrollto" />
      <div class="ppk item4" :class="peEnabled" @mouseover="toggleHomepage14CScrollto" />
      <div class="ppk item5" :class="peEnabled" @mouseover="toggleHomepage15CScrollto" />
    </div>
    <div class="s9e" @click.prevent="prevent11" />
    <div class="8un">
      <div class="i-v 55w">
        <vue-next-level-scroll target="#efz11">
          <HomepageMenu11CScrollto
            v-if="isHomepage11CScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz12">
          <HomepageMenu12CScrollto
            v-if="isHomepage12CScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz13">
          <HomepageMenu13CScrollto
            v-if="isHomepage13CScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz14">
          <HomepageMenu14CScrollto
            v-if="isHomepage14CScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz15">
          <HomepageMenu15CScrollto
            v-if="isHomepage15CScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
      </div>
      <div class="i-v txl">
        <span class="pb2">Your gateway to: Alta Sartoria Mario Napolitano, Accademia dei Sartori, World Federation of Master Tailors.</span>
        <vue-next-level-scroll target=".efz16">
          <span
            v-if="isHomepage11CScrolltoActive"
            class="gvx"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz17">
          <span
            v-if="isHomepage12CScrolltoActive"
            class="gvx"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz18">
          <span
            v-if="isHomepage13CScrolltoActive"
            class="gvx"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz19">
          <span
            v-if="isHomepage14CScrolltoActive"
            class="gvx"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz20">
          <span
            v-if="isHomepage15CScrolltoActive"
            class="gvx"
          >Tell me more</span>
        </vue-next-level-scroll>
        <nuxt-link exact to="/contact">
          <span
            class="hv7"
          >| Understood</span>
        </nuxt-link>
      </div>
    </div>
    <div class="spinnerscont">
      <div class="lsy">
        <SpinnerCut
          v-if="isHomepage12CScrolltoActive"
          class="svt"
        />
        <SpinnerCut
          v-if="isHomepage13CScrolltoActive"
          class="svt"
        />
        <SpinnerCut
          v-if="isHomepage14CScrolltoActive"
          class="svt"
        />
      </div>
      <div class="3i8">
        <SpinnerPat
          v-if="isHomepage12CScrolltoActive"
          class="svt"
        />
        <SpinnerPat
          v-if="isHomepage13CScrolltoActive"
          class="svt"
        />
        <SpinnerPat
          v-if="isHomepage14CScrolltoActive"
          class="svt"
        />
      </div>
    </div>
    <Homepage11Target
      v-if="isHomepage11CScrolltoActive"
      id="efz11"
      class="zlm efz16"
    />
    <Homepage12TargetFinancial
      v-if="isHomepage12CScrolltoActive"
      id="efz12"
      class="zlm efz17"
    />
    <Homepage12TargetDesign
      v-if="isHomepage13CScrolltoActive"
      id="efz13"
      class="zlm efz18"
    />
    <Homepage12TargetFinancialB
      v-if="isHomepage14CScrolltoActive"
      id="efz14"
      class="zlm efz19"
    />
    <Homepage15Target
      v-if="isHomepage15CScrolltoActive"
      id="efz15"
      class="zlm efz20"
    />
  </div>
</template>

<script>
import Homepage11CScrollto from '~/components/homepage/subcomp/Homepage11CScrollto.vue'
import Homepage12CScrollto from '~/components/homepage/subcomp/Homepage12CScrollto.vue'
import Homepage13CScrollto from '~/components/homepage/subcomp/Homepage13CScrollto.vue'
import Homepage14CScrollto from '~/components/homepage/subcomp/Homepage14CScrollto.vue'
import Homepage15CScrollto from '~/components/homepage/subcomp/Homepage15CScrollto.vue'
import Homepage11Target from '~/components/homepage/subcomp/Homepage11Target.vue'
import Homepage12TargetFinancial from '~/components/homepage/subcomp/Homepage12TargetFinancial.vue'
import Homepage12TargetDesign from '~/components/homepage/subcomp/Homepage12TargetDesign.vue'
import Homepage12TargetFinancialB from '~/components/homepage/subcomp/Homepage12TargetFinancialB.vue'
import Homepage15Target from '~/components/homepage/subcomp/Homepage15Target.vue'
import { enactHelp } from '~/composables/toggle-help-store.js'

const DIALOG_TYPE = {
  NONE: 1,
  HOMEPAGE11: 1,
  HOMEPAGE12: 2,
  HOMEPAGE13: 3,
  HOMEPAGE14: 4,
  HOMEPAGE15: 5
};

export default {
  components: {
    Homepage11CScrollto,
    Homepage12CScrollto,
    Homepage13CScrollto,
    Homepage14CScrollto,
    Homepage15CScrollto,
    Homepage11Target,
    Homepage12TargetFinancial,
    Homepage12TargetDesign,
    Homepage12TargetFinancialB,
    Homepage15Target,
    SpinnerCut: () => import('~/components/spinner/SpinnerCut.vue'),
    SpinnerPat: () => import('~/components/spinner/SpinnerPat.vue'),
    HomepageMenu11CScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu11CScrollto.vue'),
    HomepageMenu12CScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu12CScrollto.vue'),
    HomepageMenu13CScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu13CScrollto.vue'),
    HomepageMenu14CScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu14CScrollto.vue'),
    HomepageMenu15CScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu15CScrollto.vue'),
    VueNextLevelScroll: () => import('vue-next-level-scroll')
  },
  setup () {
    const { toggleHelp, getToggleHelp } = enactHelp();

    return {
      toggleHelp,
      getToggleHelp
    }
  },
  data() {
    return {
      activeDialog: DIALOG_TYPE.NONE,
      noPoint: 't0f',
      nullNoPoint: null
    };
  },
  computed: {
    isHomepage11CScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE11;
    },
    isHomepage12CScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE12;
    },
    isHomepage13CScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE13;
    },
    isHomepage14CScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE14;
    },
    isHomepage15CScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE15;
    },
    peEnabled() {
      return (this.getToggleHelp === true) ? this.noPoint : this.nullNoPoint;
    }
  },
  methods: {
    resetDialog() {
      this.activeDialog = DIALOG_TYPE.NONE;
    },
    toggleHomepage11CScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE11) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE11;
    },
    toggleHomepage12CScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE12) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE12;
    },
    toggleHomepage13CScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE13) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE13;
    },
    toggleHomepage14CScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE14) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE14;
    },
    toggleHomepage15CScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE15) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE15;
    },
    prevent11() {
      if (this.isHomepage11CScrolltoActive) {
        return this.toggleHelp()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/homestyle.scss';
$primary: #D25593;
$hoverEasing: cubic-bezier(0.165, 0.84, 0.44, 1);

.svt {
  position: absolute;
}

.3i8 {
  z-index: 999;
  position: absolute;
  right: 2.459649122807018rem;
  top: calc(30.2rem - 11vw);
  right: 12em;
}

.lsy {
  z-index: 999;
  position: absolute;
  right: 2.459649122807018rem;
  top: calc(30.2rem - 11vw);
  right: 0em;
}

.ay2 {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 117vh;
  min-height: 960.56px;
  &:hover {
    cursor: default;
  }
}

@media only screen and (min-width: 525px) {
  .ay2 {
    &:hover {
      cursor: default;
      background-color: blue;
    }
  }
}

@media only screen and (min-height: 821px) {
  @media only screen and (min-width: 525px) {
    .zlm {
      &:hover {
        cursor: default;
        background-color: blue;
      }
    }
  }
  .zlm {
    position: absolute;
    top: 117vh;
    width: 100vw;
    height: inherit;
    z-index: -1;
    &:hover {
      cursor: default;
    }
  }
  .ppk {
    opacity: 0;
    flex-grow: 1;
    height: 77vh;
  }
  .t0f {
    pointer-events: none;
  }
  .s9e {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 5vh;
    min-height: 41.048571428571429px;
    align-self: center;
    position: relative;
  }
  .8un {
    display: flex;
    flex-direction: row;
    height: 35vh;
    align-self: center;
    overflow: visible;
  }
}

@media only screen and (max-height: 820px) {
  @media only screen and (min-width: 525px) {
    .zlm {
      &:hover {
        cursor: default;
        background-color: blue;
      }
    }
  }
  @media only screen and (max-height: 710px) {
    .zlm {
      height: 117vh;
      min-height: 760.56px;
      z-index: -1;
    }
  }
  @media only screen and (min-height: 711px) {
    .zlm {
      height: inherit;
      z-index: -1;
    }
  }
  .zlm {
    position: absolute;
    top: 960.56px;
    width: 100vw;
    z-index: -1;
    &:hover {
      cursor: default;
    }
  }
  .ppk {
    opacity: 0;
    flex-grow: 1;
    height: calc(392.16px + 17.1vw);
    max-height: 632.16px;
  }
  .t0f {
    pointer-events: none;
  }
  .s9e {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 41.048571428571429px;
    align-self: center;
    position: relative;
  }
  .8un {
    display: flex;
    flex-direction: row;
    height: 287.34px;
    align-self: center;
    overflow: visible;
  }
}

.15n {
  display: flex;
}

.ppk + .ppk {
  margin-left: 0;
}

.i-v { margin-left: 5%; }
.55w { margin-left: 15%; }
.txl { height: 100%; max-width: 41%; }

.pb2 {
  font-family: 'Barlow', sans-serif;
  font-weight: 560;
  font-size: 1.007793231094659em;
  line-height: 24px;
  line-height: 1.405em;
  color: $primary;
  position: relative;
  cursor: default !important;
}

.gvx {
  margin-left: 0.064526909722222em;
  line-height: 2.905em;
  position: relative;
  font-family: 'Barlow';
  color: $primary;
  cursor: default !important;
  &:hover {
    cursor: pointer;
    color: #bfbfbf;
  }
}

.hv7 {
  margin-left: 0.064526909722222em;
  display: inline-block;
  position: relative;
  font-family: 'Barlow';
  color: #898989;
  cursor: default !important;
  &:hover {
    cursor: pointer;
    color: #bfbfbf;
  }
}
</style>
