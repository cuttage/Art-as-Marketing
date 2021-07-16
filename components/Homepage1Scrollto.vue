<template>
  <div>
    <Homepage11AScrollto
      v-if="isHomepage11AScrolltoActive"
      class="absolutely2"
      :father="father"
    />
    <Homepage12AScrollto
      v-if="isHomepage12AScrolltoActive"
      class="absolutely2"
    />
    <Homepage13AScrollto
      v-if="isHomepage13AScrolltoActive"
      class="absolutely2"
    />
    <Homepage14AScrollto
      v-if="isHomepage14AScrolltoActive"
      class="absolutely2"
    />
    <Homepage15AScrollto
      v-if="isHomepage15AScrolltoActive"
      class="absolutely2"
    />

<<<<<<< HEAD
    <div class="15n">
      <div class="ppk item1" :class="peEnabled" @mouseover="toggleHomepage11AScrollto" />
      <div class="ppk item2" :class="peEnabled" @mouseover="toggleHomepage12AScrollto" />
      <div class="ppk item3" :class="peEnabled" @mouseover="toggleHomepage13AScrollto" />
      <div class="ppk item4" :class="peEnabled" @mouseover="toggleHomepage14AScrollto" />
      <div class="ppk item5" :class="peEnabled" @mouseover="toggleHomepage15AScrollto" />
    </div>
    <div class="s9e" @click.prevent="prevent11" />
    <div class="8un">
      <div class="i-v 55w">
        <vue-next-level-scroll target="#efz11">
=======
    <div class="container-test2">
      <div class="item-2 item1" :class="peEnabled" @mouseover="toggleHomepage11AScrollto" />
      <div class="item-2 item2" :class="peEnabled" @mouseover="toggleHomepage12AScrollto" />
      <div class="item-2 item3" :class="peEnabled" @mouseover="toggleHomepage13AScrollto" />
      <div class="item-2 item4" :class="peEnabled" @mouseover="toggleHomepage14AScrollto" />
      <div class="item-2 item5" :class="peEnabled" @mouseover="toggleHomepage15AScrollto" />
    </div>
    <div class="container-test-variant-get-help" @click.prevent="prevent11" />
    <div class="container-test-variant2">
      <div class="item-variant item-variant-1">
        <vue-next-level-scroll target="#my-target11">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          <HomepageMenu11AScrollto
            v-if="isHomepage11AScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz12">
          <HomepageMenu12AScrollto
            v-if="isHomepage12AScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz13">
          <HomepageMenu13AScrollto
            v-if="isHomepage13AScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz14">
          <HomepageMenu14AScrollto
            v-if="isHomepage14AScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz15">
          <HomepageMenu15AScrollto
            v-if="isHomepage15AScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
      </div>
<<<<<<< HEAD
      <div class="i-v txl">
        <span class="pb2">Your gateway to: Safe Crash Records Music Studio, Rome-based Film Production Companies.</span>
        <vue-next-level-scroll target=".efz16">
          <span
            v-if="isHomepage11AScrolltoActive"
            class="gvx"
=======
      <div class="item-variant item-variant-2">
        <span class="subtitle-d2">Your gateway to: Safe Crash Records Music Studio, Rome-based Film Production Companies.</span>
        <vue-next-level-scroll target=".my-target16">
          <span
            v-if="isHomepage11AScrolltoActive"
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz17">
          <span
            v-if="isHomepage12AScrolltoActive"
<<<<<<< HEAD
            class="gvx"
=======
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz18">
          <span
            v-if="isHomepage13AScrolltoActive"
<<<<<<< HEAD
            class="gvx"
=======
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz19">
          <span
            v-if="isHomepage14AScrolltoActive"
<<<<<<< HEAD
            class="gvx"
=======
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz20">
          <span
            v-if="isHomepage15AScrolltoActive"
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
<<<<<<< HEAD
    <div class="lsy">
      <SpinnerPur
=======
    <div class= "spinnervariant-container">
      <PureSpinner
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
        v-if="isHomepage14AScrolltoActive"
        class="spinnervariant"
      />
    </div>
    <Homepage11Target
      v-if="isHomepage11AScrolltoActive"
<<<<<<< HEAD
      id="efz11"
      class="zlm efz16"
    />
    <Homepage12Target
      v-if="isHomepage12AScrolltoActive"
      id="efz12"
      class="zlm efz17"
    />
    <Homepage13Target
      v-if="isHomepage13AScrolltoActive"
      id="efz13"
      class="zlm efz18"
    />
    <Homepage14Target
      v-if="isHomepage14AScrolltoActive"
      id="efz14"
      class="zlm efz19"
    />
    <Homepage15Target
      v-if="isHomepage15AScrolltoActive"
      id="efz15"
      class="zlm efz20"
=======
      id="my-target11"
      class="absolutely-var2 my-target16"
    />
    <Homepage12Target
      v-if="isHomepage12AScrolltoActive"
      id="my-target12"
      class="absolutely-var2 my-target17"
    />
    <Homepage13Target
      v-if="isHomepage13AScrolltoActive"
      id="my-target13"
      class="absolutely-var2 my-target18"
    />
    <Homepage14Target
      v-if="isHomepage14AScrolltoActive"
      id="my-target14"
      class="absolutely-var2 my-target19"
    />
    <Homepage15Target
      v-if="isHomepage15AScrolltoActive"
      id="my-target15"
      class="absolutely-var2 my-target20"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    />
  </div>
</template>

<script>
import Homepage11AScrollto from '~/components/homepage/subcomp/Homepage11AScrollto.vue'
import Homepage12AScrollto from '~/components/homepage/subcomp/Homepage12AScrollto.vue'
import Homepage13AScrollto from '~/components/homepage/subcomp/Homepage13AScrollto.vue'
import Homepage14AScrollto from '~/components/homepage/subcomp/Homepage14AScrollto.vue'
import Homepage15AScrollto from '~/components/homepage/subcomp/Homepage15AScrollto.vue'
import Homepage11Target from '~/components/homepage/subcomp/Homepage11Target.vue'
import Homepage12Target from '~/components/homepage/subcomp/Homepage12Target.vue'
import Homepage13Target from '~/components/homepage/subcomp/Homepage13Target.vue'
import Homepage14Target from '~/components/homepage/subcomp/Homepage14Target.vue'
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
    Homepage11AScrollto,
    Homepage12AScrollto,
    Homepage13AScrollto,
    Homepage14AScrollto,
    Homepage15AScrollto,
    Homepage11Target,
    Homepage12Target,
    Homepage13Target,
    Homepage14Target,
    Homepage15Target,
    PureSpinner: () => import('~/components/spinner/PureSpinner.vue'),
    HomepageMenu11AScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu11AScrollto.vue'),
    HomepageMenu12AScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu12AScrollto.vue'),
    HomepageMenu13AScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu13AScrollto.vue'),
    HomepageMenu14AScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu14AScrollto.vue'),
    HomepageMenu15AScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu15AScrollto.vue'),
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
      nullNoPoint: null,
      father: 'Homepage1Scrollto'
    };
  },
  computed: {
    isHomepage11AScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE11;
    },
    isHomepage12AScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE12;
    },
    isHomepage13AScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE13;
    },
    isHomepage14AScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE14;
    },
    isHomepage15AScrolltoActive() {
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
    toggleHomepage11AScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE11) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE11;
    },
    toggleHomepage12AScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE12) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE12;
    },
    toggleHomepage13AScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE13) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE13;
    },
    toggleHomepage14AScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE14) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE14;
    },
    toggleHomepage15AScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE15) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE15;
    },
    prevent11() {
      if (this.isHomepage11AScrolltoActive) {
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
.lsy {
=======
.spinnervariant-container {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  z-index: 999;
  position: absolute;
  right: 2.459649122807018rem;
  right: 0em;
  width: 100vw;
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
<<<<<<< HEAD
  .lsy {
=======
  .spinnervariant-container {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    top: calc(77vh - 80px);
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
<<<<<<< HEAD
  .lsy {
=======
  .spinnervariant-container {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    top: calc(392.16px + 17.1vw - 80px);
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
