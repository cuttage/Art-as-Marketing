<template><!--in teoria dovrei essere un componente differente dal mio gemello-->
  <!--in teoria ho uno wrapper che mi da styling o funzionalità specifica rispetto alla scelta iniziale. non servono props-->
  <div style="color: yellow; font-family: 'Din Medium'; font-size: 0.8rem; width: 100%; display: flex; justify-content: center; align-items: center;">{{ tellYou }}</div><!--ricevo la funzionalità o styling predefinita e iniettata-->
</template>

<script>
export default {
  props: ['tellYou']
}
</script>
