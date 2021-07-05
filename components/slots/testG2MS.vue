<template>
  <span class="g2m-data-wrapper">
    <slot name="g2m" :tellYou="caption"></slot><!--risultato: da la funzionalità o styling 'predefinita' della parte superiore (Gallery2)-->
    <slot name="g3m" :G2mData="G2mData" :G2m2Data="G2m2Data"></slot><!--risultato: da la funzionalità o styling 'predefinita' della parte inferiore (Gallery3)-->
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
  .g2m-data-wrapper {
    width: 80%;
    text-align: center;
  }
}
</style>
