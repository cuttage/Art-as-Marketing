<template>
  <div>
    <section class="containerp">
      <section class="block_start">
        <logo class="block_start_headline"></logo>
        <div
          v-if="toggleGallery3 && !!isGallery3Active"
          v-bind:class="[(isGallery3Active === true ? hintclass : ''),
          (isNoneActive === true ? noneClass : '')]"
        >You may want to click the image again to scroll down.</div>

        <img
          v-if="isImage1Active"
          v-bind:class="[(isImage1Active === true ? block_start_img_1 : ''), (isImage1Active === true ? block_start_img_anim_1 : ''),
          (isNoneActive === true ? noneClass : '')]"
          src="~/assets/img/image1.jpg"
          alt="marta-fattori"
          class="will-change-op"
        >
        <img
          v-if="isImage2Active"
          v-bind:class="[(isImage2Active === true ? variance1A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/assets/img/image1.jpg"
          alt="marta-fattori"
          class="will-change-op"
        >
        <img
          v-if="isImage3Active"
          v-bind:class="[(isImage3Active === true ? variance1A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/assets/img/image1.jpg"
          alt="marta-fattori"
          class="will-change-op"
        >

        <img
          v-if="isImage2Active"
          v-bind:class="[(isImage2Active === true ? block_start_img_2 : ''), (isImage2Active === true ? block_start_img_anim_2 : ''),
          (isNoneActive === true ? noneClass : '')]"
          src="~/assets/img/image1.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />
        <img
          v-if="isImage1Active"
          v-bind:class="[(isImage1Active === true ? variance2A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/assets/img/image1.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />
        <img
          v-if="isImage3Active"
          v-bind:class="[(isImage3Active === true ? variance2A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/assets/img/image1.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />

        <img
          v-if="isImage3Active"
          v-bind:class="[(isImage3Active === true ? block_start_img_3 : ''), (isImage3Active === true ? block_start_img_anim_3 : ''),
          (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/shirt.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />
        <img
          v-if="isImage1Active"
          v-bind:class="[(isImage1Active === true ? variance3A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/shirt.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />
        <img
          v-if="isImage2Active"
          v-bind:class="[(isImage2Active === true ? variance3A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/shirt.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />
      </section>
      <div id="container-galler">
        <Gallery3
          v-if="isGallery3Active"
          v-bind:class="[(isGallery3Active === true ? containerGaller : ''), (isNoneActive === true ? noneClass : '')]"
        />
      </div>
    </section>
    <vue-next-level-scroll target="#container-galler">
      <div class="double-container-gallery">
        <div class="galler-grid-container">
          <div class="container-test-galler">
            <div class="itemg" @mouseover="toggleImage1" @click="toggleGallery3" />
            <div class="itemg" @mouseover="toggleImage2" @click="toggleGallery3" />
            <div class="itemg" @mouseover="toggleImage3" @click="toggleGallery3" />
          </div>
        </div>
      </div>
    </vue-next-level-scroll>
    <div class="pre-galler-grid-container" @mouseover="toggleNone">
    </div>
  </div>
</template>

<script>
const DIALOG_TYPE = {
  NONE: null,
  IMAGE1: 1,
  IMAGE2: 2,
  IMAGE3: 3,
  GALLEY3: 4,
  HINT: 5
};
export default {
  scrollToTop: true,
  data() {
    return {
      block_start_img_1: 'block_start_img_1',
      block_start_img_anim_1: 'block_start_img_anim_1',
      block_start_img_2: 'block_start_img_2',
      block_start_img_3: 'block_start_img_3',
      block_start_img_anim_2: 'block_start_img_anim_2',
      block_start_img_anim_3: 'block_start_img_anim_3',
      variance1A: 'variance1A',
      variance2A: 'variance2A',
      variance3A: 'variance3A',
      noneClass: 'none-class',
      containerGaller: 'container-galler',
      hintclass: 'hintclass',
      activeDialog: DIALOG_TYPE.NONE
    }
  },
  components: {
    Logo: () => import("~/components/Logo.vue"),
    Gallery3: () => import("~/components/Gallery3.vue"),
    VueNextLevelScroll: () => import('vue-next-level-scroll')
  },
  computed: {
    isImage1Active() {
      return this.activeDialog === DIALOG_TYPE.IMAGE1;
    },
    isImage2Active() {
      return this.activeDialog === DIALOG_TYPE.IMAGE2;
    },
    isImage3Active() {
      return this.activeDialog === DIALOG_TYPE.IMAGE3;
    },
    isNoneActive() {
      return this.activeDialog === DIALOG_TYPE.NONE;
    },
    isGallery3Active() {
      return this.activeDialog === DIALOG_TYPE.GALLEY3;
    }
  },
  methods: {
    resetDialog() {
      this.activeDialog = DIALOG_TYPE.NONE;
    },
    hintDialog() {
      this.activeDialog = DIALOG_TYPE.NONE;
      this.activeDialog = DIALOG_TYPE.HINT
    },
    toggleImage1() {
      if (this.activeDialog === DIALOG_TYPE.IMAGE1) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.IMAGE1;
    },
    toggleImage2() {
      if (this.activeDialog === DIALOG_TYPE.IMAGE2) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.IMAGE2;
    },
    toggleImage3() {
      if (this.activeDialog === DIALOG_TYPE.IMAGE3) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.IMAGE3;
    },
    toggleGallery3() {
      if (this.activeDialog === DIALOG_TYPE.GALLEY3) {
        return this.hintDialog();
      }
      this.$nextTick().then(() => { this.activeDialog = DIALOG_TYPE.GALLEY3 })
    },
    toggleNone() {
      if (this.activeDialog === DIALOG_TYPE.NONE) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.NONE;
    }
  }
}
</script>

<style lang="scss" scoped>
/*
 * 1. Improve image quality when scaled in IE7: h5bp.com/d
 * 2. Remove the gap between images and borders on image containers: h5bp.com/e
 */
img {
  border: 0;
  -ms-interpolation-mode: bicubic;
  vertical-align: middle;
}
canvas {
  opacity: 1;
}
.will-change-op {
  will-change: transform;
  will-change: opacity;
}
.none-class {
  display: none;
}
.hintclass {
  position: absolute;
  top: 40vh;
  width: 100%;
  font-family: 'DIN Medium', sans-serif;
  font-weight: 560;
  font-size: 0.598677948175569em;
  color: #898989;
}
.container-test-galler {
  position: absolute;
  top: 0;
  display: flex;
  height: inherit;
  width: 100%;
  z-index: 5;
}
.itemg {
  opacity: 0;
  flex-grow: 1;
  height: inherit;
  margin-right: 0;
  margin-left: 0;
}
.info {
  position: fixed;
  left: 35vw;
  top: 0;
}
.info2 {
  position: fixed;
  left: 55vw;
  top: 0;
}

.block_2 {
  height: auto;
  display: grid;
  grid-template-columns: 5vw 30vw 30vw 30vw 1fr;
  grid-template-rows: 15vh 70vh 15vh auto 110vh auto 110vh auto 110vh;
}

.block_2 img {
  max-height: 100%;
}

@media only screen and (min-width: 525px) {
  .containerp:hover, .container-galler {
    transition: all 0.3s ease-out-in;
    text-shadow: none !important;
  }
}
.container-galler {
  z-index: 0;
}
.containerp {
  min-height: 118vh;
  margin-top: -8vw;
  overflow: hidden;
  display: flex; // opt
  flex-wrap: wrap; // opt
  justify-content: center; // opt
  padding: 50px 20px 0 20px;
}

#containerp1 {
  grid-area: 4/3/5/5;
}
#containerp2 {
  grid-area: 6/2/7/4;
}
#containerp3 {
  grid-area: 8/3/9/5;
}

.block_start {
  height: 70vw;
  display: grid;
  grid-template-columns: 30px 8.5vw 27vw 7.5vw 15vw 25vw 1fr;
  grid-template-rows: repeat(10, 1fr);
}
.double-container-gallery {
  position: absolute;
  width: 100%;
  top: 0;
  height: calc(70vw - 8vw + 50px);
  overflow: hidden;
  display: flex; // opt
  flex-wrap: wrap; // opt
  justify-content: center; // opt
  padding: 50px 20px 0 20px;
}
.pre-galler-grid-container {
  position: absolute;
  top: 0;
  height: calc(10vw - 8vw + 50px);
  width: 100%;
  z-index: 7;
}
.galler-grid-container {
  position: absolute;
  top: calc(10vw - 8vw + 50px);
  height: 60vw;
  display: grid;
  grid-template-columns: 30px 8.5vw 27vw 7.5vw 15vw 25vw 1fr;
  grid-template-rows: repeat(8, 1fr);
}
.block_start_headline {
  grid-area: 4/3/4/7;
  margin-left: 4.61vw;
  margin-right: -4.61vmin;
  margin-top: -2.99vmin;
  margin-bottom: 2.99vmin;
  max-width: calc(1em + 31vw);
  min-height: calc(1em + 5vw);
  z-index: 6;
}
.variance1A {
  grid-area: 3/1/10/5;
  max-width: 100%;
  align-self: end;
  padding-left: 20px;
  z-index: 1;
  opacity: 1;
}
.block_start_img_1 {
  grid-area: 3/1/10/5;
  max-width: 100%;
  align-self: end;
  padding-left: 20px;
  z-index: 4;
}
.variance2A {
  grid-area: 4/6/9/3;
  z-index: 3;
  max-width: 100%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
  opacity: 1;
}
.block_start_img_2 {
  grid-area: 4/6/9/3;
  z-index: 3;
  max-width: 100%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
}
.variance3A {
  grid-area: 1/5/7/7;
  z-index: 2;
  max-width: 100%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 32vw;
  opacity: 1;
}
.block_start_img_3 {
  grid-area: 1/5/7/7;
  z-index: 4;
  max-width: 100%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 32vw;
}
.block_start_img_anim_1 {
  animation: block_start_img_anim_1 1s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}

@keyframes block_start_img_anim_1 {
  0% {
    transform: translateX(-5%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.block_start_img_anim_2 {
  animation: block_start_img_anim_2 1.2s 0.8s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}

@keyframes block_start_img_anim_2 {
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

.block_start_img_anim_3 {
  animation: block_start_img_anim_3 1.2s 0.8s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}

@keyframes block_start_img_anim_3 {
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
