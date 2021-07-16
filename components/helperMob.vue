<template>
  <keep-alive>
    <div>
<<<<<<< HEAD:components/HelpWrapMob.vue
      <div v-if="getToggleHelp === true" class="csw zq8">
        <div class="q0s ox6 wgw">
          <slot name="HelpWrapSlot"></slot>
=======
      <div v-if="getToggleHelp === true" class="previewer-wrapper previewer-wrapper-oneB">
        <div class="previewer-black previewer-card previewer-card-tailor">
          <slot name="helperslot"></slot>
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/helperMob.vue
          <hr>
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
import { enactHelp } from '~/composables/toggle-help-store.js'
export default {
  props: ['mother'],
  setup () {
    const { getToggleHelp } = enactHelp();

    return {
      getToggleHelp
    }
  }
}
</script>
