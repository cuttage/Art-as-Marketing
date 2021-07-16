<template>
  <div>
    <Homepage11CScrollto
      v-if="isHomepage11CScrolltoActive"
      class="absolutely2"
    />
    <Homepage12CScrollto
      v-if="isHomepage12CScrolltoActive"
      class="absolutely2"
    />
    <Homepage13CScrollto
      v-if="isHomepage13CScrolltoActive"
      class="absolutely2"
    />
    <Homepage14CScrollto
      v-if="isHomepage14CScrolltoActive"
      class="absolutely2"
    />
    <Homepage15CScrollto
      v-if="isHomepage15CScrolltoActive"
      class="absolutely2"
    />

<<<<<<< HEAD
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
=======
    <div class="container-test2">
      <div class="item-2 item1" :class="peEnabled" @mouseover="toggleHomepage11CScrollto" />
      <div class="item-2 item2" :class="peEnabled" @mouseover="toggleHomepage12CScrollto" />
      <div class="item-2 item3" :class="peEnabled" @mouseover="toggleHomepage13CScrollto" />
      <div class="item-2 item4" :class="peEnabled" @mouseover="toggleHomepage14CScrollto" />
      <div class="item-2 item5" :class="peEnabled" @mouseover="toggleHomepage15CScrollto" />
    </div>
    <div class="container-test-variant-get-help" @click.prevent="prevent11" />
    <div class="container-test-variant2">
      <div class="item-variant item-variant-1">
        <vue-next-level-scroll target="#my-target11">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
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
<<<<<<< HEAD
      <div class="i-v txl">
        <span class="pb2">Your gateway to: Alta Sartoria Mario Napolitano, Accademia dei Sartori, World Federation of Master Tailors.</span>
        <vue-next-level-scroll target=".efz16">
          <span
            v-if="isHomepage11CScrolltoActive"
            class="gvx"
=======
      <div class="item-variant item-variant-2">
        <span class="subtitle-d2">Your gateway to: Alta Sartoria Mario Napolitano, Accademia dei Sartori, World Federation of Master Tailors.</span>
        <vue-next-level-scroll target=".my-target16">
          <span
            v-if="isHomepage11CScrolltoActive"
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz17">
          <span
            v-if="isHomepage12CScrolltoActive"
<<<<<<< HEAD
            class="gvx"
=======
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz18">
          <span
            v-if="isHomepage13CScrolltoActive"
<<<<<<< HEAD
            class="gvx"
=======
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz19">
          <span
            v-if="isHomepage14CScrolltoActive"
<<<<<<< HEAD
            class="gvx"
=======
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz20">
          <span
            v-if="isHomepage15CScrolltoActive"
<<<<<<< HEAD
            class="gvx"
=======
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <nuxt-link exact to="/contact">
          <span
<<<<<<< HEAD
            class="hv7"
=======
            class="subtitle-d2-variant-2"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >| Understood</span>
        </nuxt-link>
      </div>
    </div>
    <div class="spinnerscont">
<<<<<<< HEAD
      <div class="lsy">
        <SpinnerCut
=======
      <div class= "spinnervariant-container">
        <SpinnerCuttage
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          v-if="isHomepage12CScrolltoActive"
          class="spinnervariant"
        />
        <SpinnerCuttage
          v-if="isHomepage13CScrolltoActive"
          class="spinnervariant"
        />
        <SpinnerCuttage
          v-if="isHomepage14CScrolltoActive"
          class="spinnervariant"
        />
      </div>
<<<<<<< HEAD
      <div class="3i8">
        <SpinnerPat
=======
      <div class= "spinnervariantpatreon-container">
        <SpinnerPatreon
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          v-if="isHomepage12CScrolltoActive"
          class="spinnervariant"
        />
        <SpinnerPatreon
          v-if="isHomepage13CScrolltoActive"
          class="spinnervariant"
        />
        <SpinnerPatreon
          v-if="isHomepage14CScrolltoActive"
          class="spinnervariant"
        />
      </div>
    </div>
    <Homepage11Target
      v-if="isHomepage11CScrolltoActive"
<<<<<<< HEAD
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
=======
      id="my-target11"
      class="absolutely-var2 my-target16"
    />
    <Homepage12TargetFinancial
      v-if="isHomepage12CScrolltoActive"
      id="my-target12"
      class="absolutely-var2 my-target17"
    />
    <Homepage12TargetDesign
      v-if="isHomepage13CScrolltoActive"
      id="my-target13"
      class="absolutely-var2 my-target18"
    />
    <Homepage12TargetFinancialB
      v-if="isHomepage14CScrolltoActive"
      id="my-target14"
      class="absolutely-var2 my-target19"
    />
    <Homepage15Target
      v-if="isHomepage15CScrolltoActive"
      id="my-target15"
      class="absolutely-var2 my-target20"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
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
    SpinnerCuttage: () => import('~/components/spinner/SpinnerCuttage.vue'),
    SpinnerPatreon: () => import('~/components/spinner/SpinnerPatreon.vue'),
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
<<<<<<< HEAD
      noPoint: 't0f',
=======
      noPoint: 'no-point',
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
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
@import '~/assets/scss/homecta.scss';
$primary: #D25593;
$hoverEasing: cubic-bezier(0.165, 0.84, 0.44, 1);

.spinnervariant {
  position: absolute;
}

<<<<<<< HEAD
.3i8 {
=======
.spinnervariantpatreon-container {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  z-index: 999;
  position: absolute;
  right: 2.459649122807018rem;
  top: calc(30.2rem - 11vw);
  right: 12em;
}

<<<<<<< HEAD
.lsy {
=======
.spinnervariant-container {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  z-index: 999;
  position: absolute;
  right: 2.459649122807018rem;
  top: calc(30.2rem - 11vw);
  right: 0em;
}

.absolutely2 {
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
  .absolutely2 {
    &:hover {
      cursor: default;
      background-color: blue;
    }
  }
}

@media only screen and (min-height: 821px) {
  @media only screen and (min-width: 525px) {
<<<<<<< HEAD
    .zlm {
=======
    .absolutely-var2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      &:hover {
        cursor: default;
        background-color: blue;
      }
    }
  }
<<<<<<< HEAD
  .zlm {
=======
  .absolutely-var2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    position: absolute;
    top: 117vh;
    width: 100vw;
    height: inherit;
    z-index: -1;
    &:hover {
      cursor: default;
    }
  }
<<<<<<< HEAD
  .ppk {
=======
  .item-2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    opacity: 0;
    flex-grow: 1;
    height: 77vh;
  }
<<<<<<< HEAD
  .t0f {
    pointer-events: none;
  }
  .s9e {
=======
  .no-point {
    pointer-events: none;
  }
  .container-test-variant-get-help {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 5vh;
    min-height: 41.048571428571429px;
    align-self: center;
    position: relative;
  }
<<<<<<< HEAD
  .8un {
=======
  .container-test-variant2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    display: flex;
    flex-direction: row;
    height: 35vh;
    align-self: center;
    overflow: visible;
  }
}

@media only screen and (max-height: 820px) {
  @media only screen and (min-width: 525px) {
<<<<<<< HEAD
    .zlm {
=======
    .absolutely-var2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      &:hover {
        cursor: default;
        background-color: blue;
      }
    }
  }
  @media only screen and (max-height: 710px) {
<<<<<<< HEAD
    .zlm {
=======
    .absolutely-var2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      height: 117vh;
      min-height: 760.56px;
      z-index: -1;
    }
  }
  @media only screen and (min-height: 711px) {
<<<<<<< HEAD
    .zlm {
=======
    .absolutely-var2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      height: inherit;
      z-index: -1;
    }
  }
<<<<<<< HEAD
  .zlm {
=======
  .absolutely-var2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    position: absolute;
    top: 960.56px;
    width: 100vw;
    z-index: -1;
    &:hover {
      cursor: default;
    }
  }
<<<<<<< HEAD
  .ppk {
=======
  .item-2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    opacity: 0;
    flex-grow: 1;
    height: calc(392.16px + 17.1vw);
    max-height: 632.16px;
  }
<<<<<<< HEAD
  .t0f {
    pointer-events: none;
  }
  .s9e {
=======
  .no-point {
    pointer-events: none;
  }
  .container-test-variant-get-help {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 41.048571428571429px;
    align-self: center;
    position: relative;
  }
<<<<<<< HEAD
  .8un {
=======
  .container-test-variant2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    display: flex;
    flex-direction: row;
    height: 287.34px;
    align-self: center;
    overflow: visible;
  }
}

<<<<<<< HEAD
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
=======
.container-test2 {
  display: flex;
}

.item-2 + .item-2 {
  margin-left: 0;
}

.item-variant { margin-left: 5%; }
.item-variant-1 { margin-left: 15%; }
.item-variant-2 { height: 100%; max-width: 41%; }

.subtitle-d2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  font-family: 'Barlow', sans-serif;
  font-weight: 560;
  font-size: 1.007793231094659em;
  line-height: 24px;
  line-height: 1.405em;
  color: $primary;
  position: relative;
  cursor: default !important;
}

<<<<<<< HEAD
.gvx {
=======
.subtitle-d2-variant {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
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

<<<<<<< HEAD
.hv7 {
=======
.subtitle-d2-variant-2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
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
