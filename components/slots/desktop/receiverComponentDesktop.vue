<template>
  <span class="hidespang">
    <div v-if="searchfactor.length > 0 && JSON.stringify(searchfactor) === JSON.stringify(block.keyword)" style="color: yellow;" v-for="block in filteredComp">
      <G2MSSDesk :block="block" :searchfactor="searchfactor" :key="block._uid"></G2MSSDesk>
      <receiverSlot :block="block" :searchfactor="searchfactor" class="receiver-slot">
        <template v-slot:surgeon="{whichLeft,whichRight}">
          <G2MSSDeskLeft :block="block" :whichLeft="whichLeft" :searchfactor="searchfactor" :key="whichLeft"></G2MSSDeskLeft>
          <G2MSSDeskRight :block="block" :whichRight="whichRight" :searchfactor="searchfactor" :key="whichRight"></G2MSSDeskRight>
        </template>
      </receiverSlot>
    </div>
  </span>
</template>

<script>
import memoizedUseMap from '~/composables/map-store.js'
import useRaw from '~/composables/raw-data.js'

export default {
  components: {
    G2MSSDesk: () => import("~/components/slots/desktop/G2MSSDesk.vue"),
    receiverSlot: () => import("~/components/slots/desktop/receiverSlot.vue"),
    G2MSSDeskLeft: () => import("~/components/slots/desktop/G2MSSDeskLeft.vue"),
    G2MSSDeskRight: () => import("~/components/slots/desktop/G2MSSDeskRight.vue")
  },
  setup (props) {
    const { mappy } = memoizedUseMap();
    const { content } = useRaw();
    return {
      mappy,
      content
    }
  },
  data() {
    return {
      searchfactor: ''
    }
  },
  computed: {
    filteredComp() {
      return this.content.filter((block) => {
        return block.keyword.match(this.searchfactor);
      })
    }
  },
  created() {
    this.$bus.$on('search-change', (data) => {
      this.searchfactor = data;
    });
  }
}
</script>

<style lang="scss" scoped>
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
  .hidespang {
    display: none;
    visibility: hidden;
  }
}

.receiver-slot {
  visibility: visible;
  display: block;
}
/* experimental feature: 460px limit in layout */
@media only screen and (max-width: 767px) {
  .receiver-slot {
    visibility: hidden;
    display: none;
  }
}
</style>
