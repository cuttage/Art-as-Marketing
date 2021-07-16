<template>
  <div>
    <Homepage11BScrollto
      v-if="isHomepage11BScrolltoActive"
      class="absolutely2"
    />
    <Homepage12BScrollto
      v-if="isHomepage12BScrolltoActive"
      class="absolutely2"
    />
    <Homepage13BScrollto
      v-if="isHomepage13BScrolltoActive"
      class="absolutely2"
    />
    <Homepage14BScrollto
      v-if="isHomepage14BScrolltoActive"
      class="absolutely2"
    />
    <Homepage15BScrollto
      v-if="isHomepage15BScrolltoActive"
      class="absolutely2"
    />

<<<<<<< HEAD
    <div class="15n">
      <div class="ppk item1" @mouseover="toggleHomepage11BScrollto" />
      <div class="ppk item2" @mouseover="toggleHomepage12BScrollto" />
      <div class="ppk item3" @mouseover="toggleHomepage13BScrollto" />
      <div class="ppk item4" @mouseover="toggleHomepage14BScrollto" />
      <div class="ppk item5" @mouseover="toggleHomepage15BScrollto" />
    </div>
    <div class="8un">
      <div class="i-v 55w">
        <vue-next-level-scroll target="#efz11">
=======
    <div class="container-test2">
      <div class="item-2 item1" @mouseover="toggleHomepage11BScrollto" />
      <div class="item-2 item2" @mouseover="toggleHomepage12BScrollto" />
      <div class="item-2 item3" @mouseover="toggleHomepage13BScrollto" />
      <div class="item-2 item4" @mouseover="toggleHomepage14BScrollto" />
      <div class="item-2 item5" @mouseover="toggleHomepage15BScrollto" />
    </div>
    <div class="container-test-variant2">
      <div class="item-variant item-variant-1">
        <vue-next-level-scroll target="#my-target11">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          <HomepageMenu11BScrollto
            v-if="isHomepage11BScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz12">
          <HomepageMenu12BScrollto
            v-if="isHomepage12BScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz13">
          <HomepageMenu13BScrollto
            v-if="isHomepage13BScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz14">
          <HomepageMenu14BScrollto
            v-if="isHomepage14BScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
        <vue-next-level-scroll target="#efz15">
          <HomepageMenu15BScrollto
            v-if="isHomepage15BScrolltoActive"
            class="app-links"
          />
        </vue-next-level-scroll>
      </div>
<<<<<<< HEAD
      <div class="i-v txl">
        <span class="pb2">Your gateway to: Alta Sartoria Mario Napolitano, Accademia dei Sartori, World Federation of Master Tailors.</span>
        <vue-next-level-scroll target=".efz16">
          <span
            v-if="isHomepage11BScrolltoActive"
            class="gvx"
=======
      <div class="item-variant item-variant-2">
        <span class="subtitle-d2">Your gateway to: Alta Sartoria Mario Napolitano, Accademia dei Sartori, World Federation of Master Tailors.</span>
        <vue-next-level-scroll target=".my-target16">
          <span
            v-if="isHomepage11BScrolltoActive"
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz17">
          <span
            v-if="isHomepage12BScrolltoActive"
<<<<<<< HEAD
            class="gvx"
=======
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz18">
          <span
            v-if="isHomepage13BScrolltoActive"
<<<<<<< HEAD
            class="gvx"
=======
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz19">
          <span
            v-if="isHomepage14BScrolltoActive"
<<<<<<< HEAD
            class="gvx"
=======
            class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
          >Tell me more</span>
        </vue-next-level-scroll>
        <vue-next-level-scroll target=".efz20">
          <span
            v-if="isHomepage15BScrolltoActive"
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
    <Homepage11Target
      v-if="isHomepage11BScrolltoActive"
<<<<<<< HEAD
      id="efz11"
      class="zlm efz16"
    />
    <Homepage12TargetEmployees
      v-if="isHomepage12BScrolltoActive"
      id="efz12"
      class="zlm efz17"
    />
    <Homepage13Target
      v-if="isHomepage13BScrolltoActive"
      id="efz13"
      class="zlm efz18"
    />
    <Homepage14TargetEmployees
      v-if="isHomepage14BScrolltoActive"
      id="efz14"
      class="zlm efz19"
    />
    <Homepage15Target
      v-if="isHomepage15BScrolltoActive"
      id="efz15"
      class="zlm efz20"
=======
      id="my-target11"
      class="absolutely-var2 my-target16"
    />
    <Homepage12TargetEmployees
      v-if="isHomepage12BScrolltoActive"
      id="my-target12"
      class="absolutely-var2 my-target17"
    />
    <Homepage13Target
      v-if="isHomepage13BScrolltoActive"
      id="my-target13"
      class="absolutely-var2 my-target18"
    />
    <Homepage14TargetEmployees
      v-if="isHomepage14BScrolltoActive"
      id="my-target14"
      class="absolutely-var2 my-target19"
    />
    <Homepage15Target
      v-if="isHomepage15BScrolltoActive"
      id="my-target15"
      class="absolutely-var2 my-target20"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    />
  </div>
</template>

<script>
import Homepage11BScrollto from '~/components/homepage/subcomp/Homepage11BScrollto.vue'
import Homepage12BScrollto from '~/components/homepage/subcomp/Homepage12BScrollto.vue'
import Homepage13BScrollto from '~/components/homepage/subcomp/Homepage13BScrollto.vue'
import Homepage14BScrollto from '~/components/homepage/subcomp/Homepage14BScrollto.vue'
import Homepage15BScrollto from '~/components/homepage/subcomp/Homepage15BScrollto.vue'
import Homepage11Target from '~/components/homepage/subcomp/Homepage11Target.vue'
import Homepage12TargetEmployees from '~/components/homepage/subcomp/Homepage12TargetEmployees.vue'
import Homepage13Target from '~/components/homepage/subcomp/Homepage13Target.vue'
import Homepage14TargetEmployees from '~/components/homepage/subcomp/Homepage14TargetEmployees.vue'
import Homepage15Target from '~/components/homepage/subcomp/Homepage15Target.vue'

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
    Homepage11BScrollto,
    Homepage12BScrollto,
    Homepage13BScrollto,
    Homepage14BScrollto,
    Homepage15BScrollto,
    Homepage11Target,
    Homepage12TargetEmployees,
    Homepage13Target,
    Homepage14TargetEmployees,
    Homepage15Target,
    Spinner: () => import('~/components/spinner/Spinner.vue'),
    HomepageMenu11BScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu11BScrollto.vue'),
    HomepageMenu12BScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu12BScrollto.vue'),
    HomepageMenu13BScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu13BScrollto.vue'),
    HomepageMenu14BScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu14BScrollto.vue'),
    HomepageMenu15BScrollto: () => import('~/components/menu/scrollto/subcomp/HomepageMenu15BScrollto.vue'),
    VueNextLevelScroll: () => import('vue-next-level-scroll')
  },
  data() {
    return {
      activeDialog: DIALOG_TYPE.NONE
    };
  },
  computed: {
    isHomepage11BScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE11;
    },
    isHomepage12BScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE12;
    },
    isHomepage13BScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE13;
    },
    isHomepage14BScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE14;
    },
    isHomepage15BScrolltoActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE15;
    }
  },
  methods: {
    resetDialog() {
      this.activeDialog = DIALOG_TYPE.NONE;
    },
    toggleHomepage11BScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE11) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE11;
    },
    toggleHomepage12BScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE12) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE12;
    },
    toggleHomepage13BScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE13) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE13;
    },
    toggleHomepage14BScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE14) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE14;
    },
    toggleHomepage15BScrollto() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE15) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE15;
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
  position: absolute;
  right: 80px;
  bottom: 20vh;
  transform: translate3d(30px, 0, 0) scale(0.5);
}

<<<<<<< HEAD
.lsy {
=======
.spinnervariant-container {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  position: absolute;
  right: 80px;
  bottom: 10vh;
  transform: translate3d(30px, 0, 0) scale(0.5);
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
  .8un {
=======
  .container-test-variant2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    display: flex;
    flex-direction: row;
    height: 35vh;
    margin-top: 5vh;
    align-self: center;
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
  .8un {
=======
  .container-test-variant2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    display: flex;
    flex-direction: row;
    height: 287.34px;
    margin-top: 41.048571428571429px;
    align-self: center;
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
