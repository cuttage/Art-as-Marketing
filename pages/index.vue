<template>
  <div>
    <None class="g2-bk-desk" />
<<<<<<< HEAD
    <div class="jvn">
=======
    <div class="web-container-bottom-view">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      <Homepage1Dialog
        v-if="isHomepage1DialogActive"
        class="absolutely"
      />
      <Homepage2Dialog
        v-if="isHomepage2DialogActive"
        class="absolutely"
      />
      <Homepage3Dialog
        v-if="isHomepage3DialogActive"
        class="absolutely"
      />
      <Homepage4Dialog
        v-if="isHomepage4DialogActive"
        class="absolutely"
      />
      <Homepage5Dialog
        v-if="isHomepage5DialogActive"
        class="absolutely"
      />

<<<<<<< HEAD
      <div class="3al">
=======
      <div class="container-test">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
        <div class="item item1" @mouseover="toggleHomepage1Dialog" />
        <div class="item item2" @mouseover="toggleHomepage2Dialog" />
        <div class="item item3" @mouseover="toggleHomepage3Dialog" />
        <div class="item item4" @mouseover="toggleHomepage4Dialog" />
        <div class="item item5" @mouseover="toggleHomepage5Dialog" />
      </div>
<<<<<<< HEAD
      <div class="dsu" />
      <div class="5gm do3">
        <div class="i-v 55w">
          <vue-next-level-scroll target="#efz1">
=======
      <div class="nonvisible-c" />
      <div class="container-test-variant overflow-cts">
        <div class="item-variant item-variant-1">
          <vue-next-level-scroll target="#my-target1">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
            <HomepageMenu1Scrollto
              v-if="isHomepage1DialogActive"
              class="app-links"
            />
          </vue-next-level-scroll>
          <vue-next-level-scroll target="#efz2">
            <HomepageMenu2Scrollto
              v-if="isHomepage2DialogActive"
              class="app-links"
            />
          </vue-next-level-scroll>
          <vue-next-level-scroll target="#efz3">
            <HomepageMenu3Scrollto
              v-if="isHomepage3DialogActive"
              class="app-links"
            />
          </vue-next-level-scroll>
          <vue-next-level-scroll target="#efz4">
            <HomepageMenu4Scrollto
              v-if="isHomepage4DialogActive"
              class="app-links"
            />
          </vue-next-level-scroll>
          <vue-next-level-scroll target="#efz5">
            <HomepageMenu5Scrollto
              v-if="isHomepage5DialogActive"
              class="app-links"
            />
          </vue-next-level-scroll>
        </div>
<<<<<<< HEAD
        <div class="i-v txl">
          <span class="pb2">We use art for experiential marketing.</span>
          <vue-next-level-scroll target=".efz6">
            <span
              v-if="isHomepage1DialogActive"
              class="gvx"
=======
        <div class="item-variant item-variant-2">
          <span class="subtitle-d2">We use art for experiential marketing.</span>
          <vue-next-level-scroll target=".my-target6">
            <span
              v-if="isHomepage1DialogActive"
              class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
            >Tell me more</span>
          </vue-next-level-scroll>
          <vue-next-level-scroll target=".efz7">
            <span
              v-if="isHomepage2DialogActive"
<<<<<<< HEAD
              class="gvx"
=======
              class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
            >Tell me more</span>
          </vue-next-level-scroll>
          <vue-next-level-scroll target=".efz8">
            <span
              v-if="isHomepage3DialogActive"
<<<<<<< HEAD
              class="gvx"
=======
              class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
            >Tell me more</span>
          </vue-next-level-scroll>
          <vue-next-level-scroll target=".efz9">
            <span
              v-if="isHomepage4DialogActive"
<<<<<<< HEAD
              class="gvx"
=======
              class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
            >Tell me more</span>
          </vue-next-level-scroll>
          <vue-next-level-scroll target=".efz10">
            <span
              v-if="isHomepage5DialogActive"
<<<<<<< HEAD
              class="gvx"
=======
              class="subtitle-d2-variant"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
            >Tell me more</span>
          </vue-next-level-scroll>
          <nuxt-link exact to="/about">
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
      <Homepage1Scrollto
        v-if="isHomepage1DialogActive"
<<<<<<< HEAD
        id="efz1"
        class="yvh efz6"
      />
      <Homepage2Scrollto
        v-if="isHomepage2DialogActive"
        id="efz2"
        class="yvh efz7"
      />
      <Homepage3Scrollto
        v-if="isHomepage3DialogActive"
        id="efz3"
        class="yvh efz8"
      />
      <Homepage4Scrollto
        v-if="isHomepage4DialogActive"
        id="efz4"
        class="yvh efz9"
      />
      <Homepage5Scrollto
        v-if="isHomepage5DialogActive"
        id="efz5"
        class="yvh efz10"
=======
        id="my-target1"
        class="absolutely-var my-target6"
      />
      <Homepage2Scrollto
        v-if="isHomepage2DialogActive"
        id="my-target2"
        class="absolutely-var my-target7"
      />
      <Homepage3Scrollto
        v-if="isHomepage3DialogActive"
        id="my-target3"
        class="absolutely-var my-target8"
      />
      <Homepage4Scrollto
        v-if="isHomepage4DialogActive"
        id="my-target4"
        class="absolutely-var my-target9"
      />
      <Homepage5Scrollto
        v-if="isHomepage5DialogActive"
        id="my-target5"
        class="absolutely-var my-target10"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      />
    </div>
  </div>
</template>

<script>
import None from '~/components/slots/None.vue';
import Homepage1Dialog from '~/components/homepage/Homepage1Dialog.vue'
import Homepage2Dialog from '~/components/homepage/Homepage2Dialog.vue'
import Homepage3Dialog from '~/components/homepage/Homepage3Dialog.vue'
import Homepage4Dialog from '~/components/homepage/Homepage4Dialog.vue'
import Homepage5Dialog from '~/components/homepage/Homepage5Dialog.vue'
import MyForm from '~/components/MyForm.vue'
import Homepage5Scrollto from '~/components/Homepage5Scrollto.vue'
import Homepage4Scrollto from '~/components/Homepage4Scrollto.vue'
import Homepage3Scrollto from '~/components/Homepage3Scrollto.vue'
import Homepage2Scrollto from '~/components/Homepage2Scrollto.vue'
import Homepage1Scrollto from '~/components/Homepage1Scrollto.vue'

const DIALOG_TYPE = {
  NONE: 1,
  HOMEPAGE1: 1,
  HOMEPAGE2: 2,
  HOMEPAGE3: 3,
  HOMEPAGE4: 4,
  HOMEPAGE5: 5
};

export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'home hid',
        name: 'home',
        content: 'Home page description'
      }
    ]
  },
  components: {
    None,
    Homepage5Scrollto,
    MyForm,
    Homepage1Dialog,
    Homepage2Dialog,
    Homepage3Dialog,
    Homepage4Dialog,
    Homepage5Dialog,
    Homepage1Scrollto,
    Homepage2Scrollto,
    Homepage3Scrollto,
    Homepage4Scrollto,
    Homepage5Scrollto,
    Spinner: () => import('~/components/spinner/Spinner.vue'),
    HomepageMenu1Scrollto: () => import('~/components/menu/scrollto/HomepageMenu1Scrollto.vue'),
    HomepageMenu2Scrollto: () => import('~/components/menu/scrollto/HomepageMenu2Scrollto.vue'),
    HomepageMenu3Scrollto: () => import('~/components/menu/scrollto/HomepageMenu3Scrollto.vue'),
    HomepageMenu4Scrollto: () => import('~/components/menu/scrollto/HomepageMenu4Scrollto.vue'),
    HomepageMenu5Scrollto: () => import('~/components/menu/scrollto/HomepageMenu5Scrollto.vue'),
    VueNextLevelScroll: () => import('vue-next-level-scroll')
  },
  data() {
    return {
      activeDialog: DIALOG_TYPE.NONE
    };
  },
  computed: {
    isHomepage1DialogActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE1;
    },
    isHomepage2DialogActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE2;
    },
    isHomepage3DialogActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE3;
    },
    isHomepage4DialogActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE4;
    },
    isHomepage5DialogActive() {
      return this.activeDialog === DIALOG_TYPE.HOMEPAGE5;
    }
  },
  methods: {
    resetDialog() {
      this.activeDialog = DIALOG_TYPE.NONE;
    },
    toggleHomepage1Dialog() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE1) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE1;
    },
    toggleHomepage2Dialog() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE2) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE2;
    },
    toggleHomepage3Dialog() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE3) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE3;
    },
    toggleHomepage4Dialog() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE4) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE4;
    },
    toggleHomepage5Dialog() {
      if (this.activeDialog === DIALOG_TYPE.HOMEPAGE5) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.HOMEPAGE5;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/homecta.scss';
$primary: #D25593;
$hoverEasing: cubic-bezier(0.165, 0.84, 0.44, 1);

<<<<<<< HEAD
.jvn {
=======
.web-container-bottom-view {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  display: block;
  visibility: visible;
}

@media only screen and (max-width: 524px),
only screen and (min-width: 1441px),
only screen and (min-height: 822px),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
<<<<<<< HEAD
  .jvn {
=======
  .web-container-bottom-view {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    display: none;
    visibility: hidden;
  }
}

.spinnervariant {
  position: absolute;
  top: 140vh;
}

.absolutely {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 95vh;
  min-height: 779.94px;
  &:hover {
    cursor: default;
  }
}

@media only screen and (min-width: 525px) {
  .absolutely {
    &:hover {
      cursor: default;
      background-color: blue;
    }
  }
}

@media only screen and (min-height: 821px) {
  @media only screen and (min-width: 525px) {
<<<<<<< HEAD
    .yvh {
=======
    .absolutely-var {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      &:hover {
        cursor: default;
        background-color: blue;
      }
    }
  }
<<<<<<< HEAD
  .yvh {
=======
  .absolutely-var {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    position: absolute;
    top: 95vh;
    width: 100vw;
    height: auto;
    &:hover {
      cursor: default;
    }
  }
  @media only screen and (min-width: 557px) {
    .item {
      opacity: 0;
      flex-grow: 1;
      height: 65vh;
    }
<<<<<<< HEAD
    .dsu {
=======
    .nonvisible-c {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      display: none;
    }
  }

  @media only screen and (max-width: 556px) {
    .item {
      opacity: 0;
      flex-grow: 1;
      height: 45.5vh;
    }
<<<<<<< HEAD
    .dsu {
=======
    .nonvisible-c {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      display: flex;
      width: 100%;
      height: 19.5vh;
    }
  }
<<<<<<< HEAD
  .5gm {
=======
  .container-test-variant {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    display: flex;
    flex-direction: row;
    height: 25vh;
    margin-top: 5vh;
    align-self: center;
  }
<<<<<<< HEAD
  .do3 {
=======
  .overflow-cts {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    overflow: visible;
  }
}

@media only screen and (max-height: 820px) {
  @media only screen and (min-width: 525px) {
<<<<<<< HEAD
    .yvh {
=======
    .absolutely-var {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      &:hover {
        cursor: default;
        background-color: blue;
      }
    }
  }
<<<<<<< HEAD
  .yvh {
=======
  .absolutely-var {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    position: absolute;
    top: 779.94px;
    width: 100vw;
    height: auto;
    z-index: -1;
    &:hover {
      cursor: default;
    }
  }
  @media only screen and (min-width: 557px) {
    .item {
      opacity: 0;
      flex-grow: 1;
      height: 533.64px;
    }
<<<<<<< HEAD
    .dsu {
=======
    .nonvisible-c {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      display: none;
    }
  }

  @media only screen and (max-width: 556px) {
    .item {
      opacity: 0;
      flex-grow: 1;
      height: 373.548px;
    }
<<<<<<< HEAD
    .dsu {
=======
    .nonvisible-c {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
      display: flex;
      width: 100%;
      height: 160.092px;
    }
  }
<<<<<<< HEAD
  .5gm {
=======
  .container-test-variant {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    display: flex;
    flex-direction: row;
    height: 205.25px;
    margin-top: 41.05px;
    align-self: center;
  }
<<<<<<< HEAD
  .do3 {
=======
  .overflow-cts {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    overflow: visible;
  }
}

<<<<<<< HEAD
.3al {
=======
.container-test {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  display: flex;
}

.item + .item {
  margin-left: 0;
}

<<<<<<< HEAD
.i-v { margin-left: 5%; }
.55w { margin-left: 15%; }
.txl { height: 100%; max-width: 41%; }

.pb2 {
=======
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
