<template>
  <div v-if="batchKeyds.includes(searchfactor)" class="archive noblue">
    <article class="article">
      <div>
        <G2MSRight>
          <img
            async=on
            v-bind:class="[(classObjectImg1)]"
            :srcSet="i1Set" :src="i1"
            alt="marta-fattori"
            :key="img1Key"
          />

          <img
            async=on
            v-bind:class="[(classObjectVar2)]"
            :srcSet="i2Set" :src="i2"
            alt="marta-fattori"
            :key="img2Key"
          />

          <img
            async=on
            v-bind:class="[(classObjectVar3)]"
            :srcSet="i3Set" :src="i3"
            alt="marta-fattori"
            :key="img3Key"
          />
        </G2MSRight>
      </div>
    </article>
    <div class="article emptyspace"></div>
    <article class="article">
      <div>
        <G3MSRight>
          <img
            async=on
            v-bind:class="[(classObjectImg1)]"
            :srcSet="i4Set" :src="i4"
            alt="marta-fattori"
            :key="img1Key"
          />

          <img
            async=on
            v-bind:class="[(classObjectVar2)]"
            :srcSet="i5Set" :src="i5"
            alt="marta-fattori"
            :key="img2Key"
          />

          <img
            async=on
            v-bind:class="[(classObjectVar3)]"
            :srcSet="i6Set" :src="i6"
            alt="marta-fattori"
            :key="img3Key"
          />
        </G3MSRight>
      </div>
    </article>
  </div>
</template>

<script async=on>
import useReactRight from '~/composables/react-right.js'
import useRaw from '~/composables/raw-data.js'

import G2MSRight from '~/components/slots/desktop/G2MSRight.vue'
import G3MSRight from '~/components/slots/desktop/G3MSRight.vue'
import 'requestidlecallback-polyfill'; //remove with safari 14
export default {
  scrollToTop: true,
  name: 'G2MSSDeskRight',
  props: ['searchfactor', 'whichRight'],
  setup (props) {
    const { i1Set,i1,i4Set,i4,i2Set,i2,i5Set,i5,i3Set,i3,i6Set,i6 } = useReactRight(props.whichRight);
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
      isBlock_1Active: 'block_start_img_1',
      img1Key: 999,
      img2Key: 1998,
      isVariance2AActive: 'variance2A',
      img3Key: 2997,
      isVariance3AActive: 'variance3A'
    }
  },
  components: {
    G2MSRight,
    G3MSRight
  },
  computed: {
    classObjectImg1() {
      return {
        block_start_img_1: this.isBlock_1Active
      }
    },
    classObjectVar2() {
      return {
        variance2A: this.isVariance2AActive
      }
    },
    classObjectVar3() {
      return {
        variance3A: this.isVariance3AActive
      }
    }
  }
}
</script>

<style lang="scss" scoped>
//@media (min-resolution: 2dppx),
//(-webkit-min-device-pixel-ratio: 2)
//{
  /* High dpi styles & resources here */
//}
.archive {
  /* Define the element as a grid container */
  display: grid;
  visibility: visible;
  /* A little spacing between articles */
  grid-gap: 1em;
  grid-auto-flow: dense;
}
.noblue {
  background-color: transparent !important;
  position: relative;
  top: calc(-164.365450121654501vw - 2em);
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .noblue {
    top: calc(-3em - 613.32px - 27.2vw);
  }
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
  grid-area: 1/4/13/1; /*was 3/1/10/5*/
  max-width: 110%;
  align-self: end;
  max-height: 33vw;
  /*was padding-left: 20px;*/
  z-index: 4;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .block_start_img_1 {
    image-rendering: -webkit-optimize-contrast;
    /* image-rendering: crisp-edges; */
    justify-self: start;
    max-height: 151.8px;
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
    /* image-rendering: crisp-edges; */
    max-height: 151.8px;
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
    /* image-rendering: crisp-edges; */
    justify-self: end;
    max-height: 151.8px;
  }
}
.emptyspace {
  height: 27.2vw;
  display: flex;
}
</style>
