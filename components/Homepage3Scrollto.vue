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
          <HomepageMenu11CScrollto
            v-if="isHomepage11CScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target12">
          <HomepageMenu12CScrollto
            v-if="isHomepage12CScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target13">
          <HomepageMenu13CScrollto
            v-if="isHomepage13CScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target14">
          <HomepageMenu14CScrollto
            v-if="isHomepage14CScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#my-target15">
          <HomepageMenu15CScrollto
            v-if="isHomepage15CScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
      </div>
      <div class="item-variant item-variant-2">
        <span class="subtitle-d2">Your gateway to: Alta Sartoria Mario Napolitano, Accademia dei Sartori, World Federation of Master Tailors.</span>
        <vue-next-level-scroll target=".my-target16">
          <span
            v-if="isHomepage11CScrolltoActive"
            class="subtitle-d2-variant"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target17">
          <span
            v-if="isHomepage12CScrolltoActive"
            class="subtitle-d2-variant"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target18">
          <span
            v-if="isHomepage13CScrolltoActive"
            class="subtitle-d2-variant"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target19">
          <span
            v-if="isHomepage14CScrolltoActive"
            class="subtitle-d2-variant"
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".my-target20">
          <span
            v-if="isHomepage15CScrolltoActive"
            class="subtitle-d2-variant"
          >Tell me more</span>
        </vue-next-level-scroll>
        <nuxt-link exact to="/contact">
          <span
            class="subtitle-d2-variant-2"
          >| Understood</span>
        </nuxt-link>
      </div>
    </div>
    <div class="spinnerscont">
      <div class= "spinnervariant-container">
        <SpinnerCuttage
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
      <div class= "spinnervariantpatreon-container">
        <SpinnerPatreon
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
      noPoint: 'no-point',
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
  /* was:
  .spinnervariant {
    position: absolute;
    top: 140vh;
  } */
}

.spinnervariantpatreon-container {
  z-index: 999;
  position: absolute;
  right: 2.459649122807018rem;
  top: calc(30.2rem - 11vw);
  right: 12em;
}

.spinnervariant-container {
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
    .absolutely-var2 {
      &:hover {
        cursor: default;
        background-color: blue;
      }
    }
  }
  .absolutely-var2 {
    position: absolute;
    top: 117vh;
    width: 100vw;
    height: inherit;
    z-index: -1;
    &:hover {
      cursor: default;
    }
  }
  .item-2 {
    opacity: 0;
    flex-grow: 1;
    height: 77vh; /* 20.367606712877593em */
  }
  .no-point {
    pointer-events: none;
  }
  .container-test-variant-get-help {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 5vh;
    min-height: 41.048571428571429px;
    align-self: center;
    position: relative;
  }
  .container-test-variant2 {
    display: flex;
    flex-direction: row;
    height: 35vh;
    align-self: center;
    overflow: visible;
  }
}

@media only screen and (max-height: 820px) {
  @media only screen and (min-width: 525px) {
    .absolutely-var2 {
      &:hover {
        cursor: default;
        background-color: blue;
      }
    }
  }
  @media only screen and (max-height: 710px) {
    .absolutely-var2 {
      height: 117vh;
      min-height: 760.56px; /*or 798*/
      z-index: -1;
    }
  }
  @media only screen and (min-height: 711px) {
    .absolutely-var2 {
      height: inherit;
      z-index: -1;
    }
  }
  .absolutely-var2 {
    position: absolute;
    top: 960.56px;
    width: 100vw;
    z-index: -1;
    &:hover {
      cursor: default;
    }
  }
  .item-2 {
    opacity: 0;
    flex-grow: 1;
    height: calc(392.16px + 17.1vw); /* 20.367606712877593em */
    max-height: 632.16px;
  }
  .no-point {
    pointer-events: none;
  }
  .container-test-variant-get-help {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 41.048571428571429px;
    align-self: center;
    position: relative;
  }
  .container-test-variant2 {
    display: flex;
    flex-direction: row;
    height: 287.34px;
    align-self: center;
    overflow: visible;
  }
}

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
  font-family: 'Barlow', sans-serif;
  font-weight: 560;
  /* font-size: 1.001293231094659em looks good */
  font-size: 1.007793231094659em;
  line-height: 24px;
  line-height: 1.405em;
  color: $primary;
  position: relative;
  cursor: default !important;
}

.subtitle-d2-variant {
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

.subtitle-d2-variant-2 {
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
