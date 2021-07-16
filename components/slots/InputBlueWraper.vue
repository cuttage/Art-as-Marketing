<template>
  <InputParentDesk :dsk="dsk" :mob="mob">
    <template v-slot:inputBlueContent>
      <component :is="mob ? 'InputBlue_test' : 'InputBlueDesk'" class="block_start_headline" @hook:created="childResponse" @hook:beforeDestroy="childResponse" :key="diapobKeySub1"></component>
    </template>
  </InputParentDesk>
</template>

<script>
import InputParentDesk from '~/components/slots/desktop/InputParentDesk.vue'
import InputBlueDesk from '~/components/slots/desktop/InputBlueDesk.vue'
import InputBlue_test from '~/components/slots/InputBlue_test.vue'
import { mapState } from 'vuex'
export default {
  props: ['dsk', 'mob'],
  data() {
    return {
      diapobKeySub1: "bbb" + 2
    }
  },
  components: {
    InputParentDesk,
    InputBlueDesk,
    InputBlue_test
  },
  computed: mapState(['toggleSidebar']),
  methods: {
    childResponse() {
      if (this.toggleSidebar === false) {
        return this.$bus.$emit('nav-logo-b')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.block_start_headline {
  z-index: 6;
}
</style>
