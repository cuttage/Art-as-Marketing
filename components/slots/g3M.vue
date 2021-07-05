<template><!--in teoria dovrei essere un componente differente dal mio gemello-->
  <!--in teoria ho uno wrapper che mi da styling o funzionalità specifica rispetto alla scelta iniziale. non servono props-->
  <div class="manipulatable-slot" style="color: yellow; font-family: 'Din Medium'; font-size: 0.8rem; width: 100%; display: flex; justify-content: center; align-items: center;">{{ G2mData }} {{ G2m2Data }}</div><!--ricevo la funzionalità o styling predefinita e iniettata-->
</template>

<script>
export default {
  props: ['G2mData', 'G2m2Data']
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 500px) {
  .manipulatable-slot {
    visibility: hidden;
    display: none !important;
  }
}
</style>
