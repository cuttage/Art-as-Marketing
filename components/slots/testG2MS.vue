<template>
<<<<<<< HEAD:components/slots/MessagePor.vue
  <span class="66u">
=======
  <span class="g2m-data-wrapper">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/slots/testG2MS.vue
    <slot name="g2m" :tellYou="caption"></slot>
    <slot name="g3m" :G2mData="G2mData" :G2m2Data="G2m2Data"></slot>
  </span>
</template>

<script>
import useCaption from '~/composables/caption-data.js'

export default {
  props: ['uidb'],
  setup (props) {
    const { caption } = useCaption(props.uidb);

    return {
      caption
    }
  },
  data() {
    return {
      G2mData: 'Try to type two letters in the search box.',
      G2m2Data: 'Click around to see the gallery.'
    }
  },
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1047px) {
<<<<<<< HEAD:components/slots/MessagePor.vue
  .66u {
=======
  .g2m-data-wrapper {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/slots/testG2MS.vue
    width: 80%;
    text-align: center;
  }
}
</style>
