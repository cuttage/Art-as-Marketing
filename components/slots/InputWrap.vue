<template>
  <InputParent :dsk="dsk" :mob="mob">
    <template v-slot:inputBlueContent>
      <component :is="mob ? 'InputMob' : 'InputDesk'" class="rur" @hook:created="ChildResponse" @hook:beforeDestroy="ChildResponse" :key="diapobKeySub1"></component>
    </template>
  </InputParent>
</template>

<script>
import InputParent from '~/components/slots/desktop/InputParent.vue'
import InputDesk from '~/components/slots/desktop/InputDesk.vue'
import InputMob from '~/components/slots/InputMob.vue'
import { mapState } from 'vuex'
export default {
  props: ['dsk', 'mob'],
  data() {
    return {
      diapobKeySub1: "bbb" + 2
    }
  },
  components: {
    InputParent,
    InputDesk,
    InputMob
  },
  computed: mapState(['toggleSidebar']),
  methods: {
    ChildResponse() {
      if (this.toggleSidebar === false) {
        return this.$bus.$emit('nav-logo-b')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rur {
  z-index: 6;
}
</style>
