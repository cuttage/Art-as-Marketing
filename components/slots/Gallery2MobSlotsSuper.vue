<template>
  <div v-if="batchKeyds.includes(searchfactor.toLowerCase())" class="archive noblue">
    <article class="article">
      <div>
        <Gallery2MobSlots>
          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage1Active ? classObjectImg1 : ''),(isZoom && isImage1Active ? c_Obj_I_Up : ''),(isImage1Active && isDataBool && !isZoom ? classObjectImg1_Anim : ''),(isImage2Active || isImage3Active ? classObjectVar1 : '')]"
            :srcSet="i1Set" :src="i1"
            alt="marta-fattori"
            class="will-change-op"
            :key="img1Key"
          />

          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage2Active ? classObjectImg2 : ''),(isZoom && isImage2Active ? c_Obj_I_Up : ''),(isImage2Active && isDataBool && !isZoom ? classObjectImg2_Anim : ''),(isImage1Active || isImage3Active ? classObjectVar2 : '')]"
            :srcSet="i2Set" :src="i2"
            alt="marta-fattori"
            class="will-change-op"
            :key="img2Key"
          />

          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage3Active ? classObjectImg3 : ''),(isZoom && isImage3Active ? c_Obj_I_Up : ''),(isImage3Active && isDataBool && !isZoom ? classObjectImg3_Anim : ''),(isImage1Active || isImage2Active ? classObjectVar3 : '')]"
            :srcSet="i3Set" :src="i3"
            alt="marta-fattori"
            class="will-change-op"
            :key="img3Key"
          />
        </Gallery2MobSlots>
        <div
          class="container-test-galler"
          v-bind:style="[(isImage1Active || isImage2Active || isImage3Active ? {'z-index': '996 !important'} : '')]"
        >
          <doubleClick
            class="itemg"
            @single-click="toggleImage1"
            @double-click="toggleZoom"
          />
          <doubleClick
            class="itemg"
            @single-click="toggleImage2"
            @double-click="toggleZoom"
          />
          <doubleClick
            class="itemg"
            @single-click="toggleImage3"
            @double-click="toggleZoom"
          />
        </div>
        <div class="pre-galler-grid-container" @click="toggleNone"></div>

        <div v-if="isZoom" class="double-container-gallery">
          <div class="galler-grid-container3">
            <doubleClick class="container-test-galler3" @single-click="toggleBackZoom" @double-click="toggleBackZoom" ></doubleClick>
          </div>
        </div>
      </div>
    </article>
    <div class="article emptyspace">
      <testG2MS :uidb="block._uid">
        <template slot="g2m" slot-scope="{tellYou}">
          <g2M :tellYou="tellYou"></g2M>
        </template>
        <template slot="g3m" slot-scope="{G2mData, G2m2Data}">
          <g3M :G2mData="G2mData" :G2m2Data="G2m2Data"></g3M>
        </template>
      </testG2MS>
    </div>
    <article class="article">
      <div>
        <Gallery3MobSlots>
          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage1Active ? classObjectImg1 : ''),(isZoom && isImage1Active ? c_Obj_I_Down : ''),(isImage1Active && isDataBool && !isZoom ? classObjectImg1_Anim : ''),(isImage2Active || isImage3Active ? classObjectVar1 : '')]"
            :srcSet="i4Set" :src="i4"
            alt="marta-fattori"
            class="will-change-op"
            :key="img1Key"
          />

          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage2Active ? classObjectImg2 : ''),(isZoom && isImage2Active ? c_Obj_I_Down : ''),(isImage2Active && isDataBool && !isZoom ? classObjectImg2_Anim : ''),(isImage1Active || isImage3Active ? classObjectVar2 : '')]"
            :srcSet="i5Set" :src="i5"
            alt="marta-fattori"
            class="will-change-op"
            :key="img2Key"
          />

          <img
            async=on
            v-show="baseCondition"
            v-bind:class="[(isImage3Active ? classObjectImg3 : ''),(isZoom && isImage3Active ? c_Obj_I_Down : ''),(isImage3Active && isDataBool && !isZoom ? classObjectImg3_Anim : ''),(isImage1Active || isImage2Active ? classObjectVar3 : '')]"
            :srcSet="i6Set" :src="i6"
            alt="marta-fattori"
            class="will-change-op"
            :key="img3Key"
          />
        </Gallery3MobSlots>
      </div>
    </article>
  </div>
</template>

<script async=on>
//mobile
import useReact from '~/composables/react.js'
import useRaw from '~/composables/raw-data.js'

import Gallery2MobSlots from '~/components/slots/Gallery2MobSlots.vue'
const DIALOG_TYPE = {
  NONE: null,
  IMAGE1: 1,
  IMAGE2: 2,
  IMAGE3: 3
};
import testG2MS from '~/components/slots/testG2MS.vue';
import g2M from '~/components/slots/g2M.vue';
import g3M from '~/components/slots/g3M.vue';
import Gallery3MobSlots from '~/components/slots/Gallery3MobSlots.vue'
import 'requestidlecallback-polyfill'; //remove with safari 14
export default {
  scrollToTop: true,
  name: 'Gallery2MobSlotsSuper',
  props: ['searchfactor', 'block'],
  setup (props) {
    const { i1Set,i1,i4Set,i4,i2Set,i2,i5Set,i5,i3Set,i3,i6Set,i6 } = useReact(props.block._uid);
    const { batchKeyds } = useRaw();

    return {
      i1Set,
      i1,
      i4Set,
      i4,
      i2Set,
      i2,
      i5Set,
      i5,
      i3Set,
      i3,
      i6Set,
      i6,
      batchKeyds
    }
  },
  data() {
    return {
      activeDialog: DIALOG_TYPE.NONE,
      isBlock_1Active: 'block_start_img_1',
      isZooming_UpActive: 'zooming_img_up',
      isZooming_DownActive: 'zooming_img_down',
      dataBool: false,
      zoom: false,
      isBlock_Anim_1Active: 'block_start_img_anim_1',
      img1Key: 999,
      isVariance1AActive: 'variance1A',
      isBlock_2Active: 'block_start_img_2',
      isBlock_Anim_2Active: 'block_start_img_anim_2',
      img2Key: 1998,
      isVariance2AActive: 'variance2A',
      isBlock_3Active: 'block_start_img_3',
      isBlock_Anim_3Active: 'block_start_img_anim_3',
      img3Key: 2997,
      isVariance3AActive: 'variance3A',
      promiseList: this.promiseGenerator()
    }
  },
  components: {
    Gallery2MobSlots,
    doubleClick: () => import("~/components/doubleClick.vue"),
    testG2MS,
    g2M,
    g3M,
    Gallery3MobSlots
  },
  computed: {
    baseCondition() {
      return this.isImage1Active || this.isImage2Active || this.isImage3Active;
    },
    isImage1Active() {
      return this.activeDialog === DIALOG_TYPE.IMAGE1;
    },
    classObjectImg1() {
      return {
        block_start_img_1: this.isBlock_1Active
      }
    },
    c_Obj_I_Up() {
      return {
        zooming_img_up: this.isZooming_UpActive
      }
    },
    c_Obj_I_Down() {
      return {
        zooming_img_down: this.isZooming_DownActive
      }
    },
    isDataBool() {
      return this.dataBool === true;
    },
    isZoom() {
      return this.zoom === true;
    },
    classObjectImg1_Anim() {
      return {
        block_start_img_anim_1: this.isBlock_Anim_1Active
      }
    },
    isImage2Active() {
      return this.activeDialog === DIALOG_TYPE.IMAGE2;
    },
    isImage3Active() {
      return this.activeDialog === DIALOG_TYPE.IMAGE3;
    },
    classObjectVar1() {
      return {
        variance1A: this.isVariance1AActive
      }
    },
    classObjectImg2() {
      return {
        block_start_img_2: this.isBlock_2Active
      }
    },
    classObjectImg2_Anim() {
      return {
        block_start_img_anim_2: this.isBlock_Anim_2Active
      }
    },
    classObjectVar2() {
      return {
        variance2A: this.isVariance2AActive
      }
    },
    classObjectImg3() {
      return {
        block_start_img_3: this.isBlock_3Active
      }
    },
    classObjectImg3_Anim() {
      return {
        block_start_img_anim_3: this.isBlock_Anim_3Active
      }
    },
    classObjectVar3() {
      return {
        variance3A: this.isVariance3AActive
      }
    }
  },
  methods: {
    promiseRequestIdleCallback() {
      new Promise((resolve) => requestIdleCallback(resolve))
    },
    promiseRequestAnimationFrame() {
      new Promise((resolve) => requestAnimationFrame(resolve))
    },
    promiseSetTimeout(ms) {
      new Promise((resolve) => setTimeout(resolve, ms))
    },
    async *promiseGenerator() {
      var val = yield await this.promiseRequestIdleCallback();
      while(val = yield val);
    },
    async fetchWaitIdle() {
      let res2 = await this.promiseList.next();
      let res3 = await this.promiseList.next(this.promiseRequestIdleCallback(res2));
      let res4 = await this.promiseList.next(this.promiseRequestAnimationFrame(res3));
      let res5 = await this.promiseList.next(this.promiseSetTimeout(0), res4);
      return res5;
    },
    testDataBool() {
      return this.dataBool === true ? this.dataBool = false:'';
    },
    toggleAnim() {
      if(this.isBlock_Anim_1Active === undefined){
        this.testDataBool();
        this.isBlock_Anim_1Active = 'block_start_img_anim_1';
      }

      if(this.isBlock_Anim_2Active === undefined){
        this.testDataBool();
        this.isBlock_Anim_2Active = 'block_start_img_anim_2';
      }

      if(this.isBlock_Anim_3Active === undefined){
        this.testDataBool();
        this.isBlock_Anim_3Active = 'block_start_img_anim_3';
      }
      return this.testDataBool();
    },
    resetDialog() {
      this.activeDialog = DIALOG_TYPE.NONE;
    },
    setImage(wait, value) {
      if (this.activeDialog === value) {
        return this.resetDialog();
      }
      this.activeDialog = value;
    },
    async toggleImage(ValD2) {
      let valA = await this.fetchWaitIdle();
      let valB = await this.toggleAnim(valA);
      let valC = await this.setImage(valB, ValD2);
      let valD = await this.promiseList.next(this.promiseRequestIdleCallback(valC));
      return valD;
    },
    setDataBool() {
      return this.dataBool = true;
    },
    async toggleImage1() {
      let part1 = await this.toggleImage(DIALOG_TYPE.IMAGE1);
      let part2 = await this.setDataBool(part1);
      return part2;
    },
    toggleZoom() {
      return this.zoom = true;
    },
    async toggleImage2() {
      let part1 = await this.toggleImage(DIALOG_TYPE.IMAGE2);
      let part2 = await this.setDataBool(part1);
      return part2;
    },
    async toggleImage3() {
      let part1 = await this.toggleImage(DIALOG_TYPE.IMAGE3);
      let part2 = await this.setDataBool(part1);
      return part2;
    },
    toggleNone() {
      this.setImage({}, DIALOG_TYPE.NONE);
    },
    toggleBackZoom() {
      if (this.isZoom && this.isImage1Active) {
        this.zoom = false;
        this.isBlock_Anim_1Active = undefined
      } else if (this.isZoom && this.isImage2Active) {
        this.zoom = false;
        this.isBlock_Anim_2Active = undefined
      } else if (this.isZoom && this.isImage3Active) {
        this.zoom = false;
        this.isBlock_Anim_3Active = undefined
      }
      return;
    },
    zoomHandle(newVal, oldVal) {
      return newVal !== oldVal && (newVal === true)
    },
  },
  watch: {
    isZoom: {
      handler: function(newVal, oldVal) {
        if(this.zoomHandle(newVal, oldVal) && this.isImage1Active) {
          return this.$set(this.$data, 'img1Key', this.img1Key + 1 );
        } else if(this.zoomHandle(newVal, oldVal) && this.isImage2Active) {
          return this.$set(this.$data, 'img2Key', this.img2Key + 1 );
        } else if(this.zoomHandle(newVal, oldVal) && this.isImage3Active) {
          return this.$set(this.$data, 'img3Key', this.img3Key + 1 );
        }
      },
      immediate: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.archive {
  display: grid;
  visibility: visible;
  grid-gap: 1em;
  grid-auto-flow: dense;
}
.noblue {
  background-color: transparent !important;
}
/*
 * 1. Improve image quality when scaled in IE7: h5bp.com/d
 * 2. Remove the gap between images and borders on image containers: h5bp.com/e
 */
img {
  border: 0;
  -ms-interpolation-mode: bicubic;
  vertical-align: middle;
}
.block_start_img_1 {
  image-rendering: high-quality;
  grid-area: 1/4/13/1;
  max-width: 110%;
  align-self: end;
  max-height: 33vw;
  z-index: 4;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .block_start_img_1 {
    image-rendering: -webkit-optimize-contrast;
    justify-self: start;
    max-height: 151.8px;
  }
}
.zooming_img_up {
  grid-area: 2/1/13/10 !important;
  max-height: none !important;
  align-self: self-end !important;
  height: auto !important;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .zooming_img_up {
    max-width: 100% !important;
  }
}
.zooming_img_down {
  grid-area: 2/1/13/10 !important;
  max-height: none !important;
  align-self: self-start !important;
  height: auto !important;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .zooming_img_down {
    grid-area: 1/1/13/10 !important;
    align-self: self-end !important;
    max-width: 100% !important;
  }
}
.block_start_img_anim_1 {
  animation: block_start_img_anim_1 0.27s 0.2s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}
@keyframes block_start_img_anim_1 {
  0% {
    transform: translate3d(-5%,0,0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
}
.will-change-op {
  will-change: transform, opacity;
}
.variance1A {
  image-rendering: high-quality;
  grid-area: 1/4/13/1;
  max-width: 110%;
  align-self: end;
  max-height: 33vw;
  z-index: 1;
  opacity: 1;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .variance1A {
    image-rendering: -webkit-optimize-contrast;
    justify-self: start;
    max-height: 151.8px;
  }
}
.block_start_img_2 {
  image-rendering: high-quality;
  grid-area: 4/6/9/3;
  z-index: 3;
  max-width: 110%;
  align-self: stretch;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .block_start_img_2 {
    image-rendering: -webkit-optimize-contrast;
    max-height: 151.8px;
  }
}
.block_start_img_anim_2 {
  animation: block_start_img_anim_2 0.27s 0s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}
@keyframes block_start_img_anim_2 {
  0% {
    transform: translate3d(0,-10%,0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
}
.variance2A {
  image-rendering: high-quality;
  grid-area: 4/6/9/3;
  z-index: 3;
  max-width: 110%;
  align-self: stretch;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
  opacity: 1;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .variance2A {
    image-rendering: -webkit-optimize-contrast;
    max-height: 151.8px;
  }
}
.block_start_img_3 {
  image-rendering: high-quality;
  grid-area: 1/5/7/7;
  z-index: 4;
  max-width: 110%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .block_start_img_3 {
    image-rendering: -webkit-optimize-contrast;
    justify-self: end;
    max-height: 151.8px;
  }
}
.block_start_img_anim_3 {
  animation: block_start_img_anim_3 0.27s 0s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}
@keyframes block_start_img_anim_3 {
  0% {
    transform: translate3d(0,10%,0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
}
.variance3A {
  image-rendering: high-quality;
  grid-area: 1/5/7/7;
  z-index: 2;
  max-width: 110%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
  opacity: 1;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .variance3A {
    image-rendering: -webkit-optimize-contrast;
    justify-self: end;
    max-height: 151.8px;
  }
}
.container-test-galler {
  display: flex;
  position: absolute;
  top: calc(50px + 22.2vw);
  height: 74.165450121654501vw;
  width: 100%;
  z-index: 5;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .container-test-galler {
    height: calc((460px * 0.7) + (1em - 15.34px));
  }
}
.itemg {
  opacity: 0;
  flex-grow: 1;
  height: calc(164.365450121654501vw + 2em) !important;
  margin-right: 0;
  margin-left: 0;
  z-index: inherit;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .itemg {
    height: calc(3em + 613.32px + 27.2vw) !important;
  }
}
.pre-galler-grid-container {
  position: absolute;
  top: 0;
  height: calc(50px + 2vw);
  width: 100%;
  z-index: 7;
}
.double-container-gallery {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px 0 20px;
}
.galler-grid-container3 {
  position: absolute;
  top: calc(50px + 22.2vw) !important;
  height: calc(164.365450121654501vw + 2em);
  width: 100%;
  display: flex;
  flex-grow: 1;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .galler-grid-container3 {
    height: calc(3em + 613.32px + 27.2vw) !important;
  }
}
.container-test-galler3 {
  position: absolute;
  top: 0;
  display: flex;
  height: inherit;
  width: 100%;
  z-index: 997;
}
.emptyspace {
  height: 27.2vw;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-rendering: geometricPrecision;
}
</style>
