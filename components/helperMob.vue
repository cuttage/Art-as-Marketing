<template>
  <keep-alive>
    <div>
      <div v-if="getToggleHelp === true" class="previewer-wrapper previewer-wrapper-oneB">
        <div class="previewer-black previewer-card previewer-card-tailor">
          <slot name="helperslot"></slot>
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
