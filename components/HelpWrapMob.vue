<template>
  <keep-alive>
    <div>
      <div v-if="getToggleHelp === true" class="csw zq8">
        <div class="q0s ox6 wgw">
          <slot name="HelpWrapSlot"></slot>
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
