<template>
  <!--eslint-disable-->
<<<<<<< HEAD:components/LinksMob.vue
  <ul class="7al" @click.once="toggle">
=======
  <ul class="nav-list" @click.once="toggle">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/AppLinksMobile.vue
    <li>index</li>
    <li>about</li>
    <li>portfolio</li>
    <li>index</li>
    <li>portfolio</li>
<<<<<<< HEAD:components/LinksMob.vue
    <NavList v-if="rtmO === true && glow === true" class="fmx" :object2="object2" :key="appLinkKeyBk" />
=======
    <HomepageDesk v-if="rtmO === true && glow === true" class="otherbk" :object2="object2" :key="appLinkKeyBk" />
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/AppLinksMobile.vue
  </ul>
</template>

<script>
import HomepageDesk from '~/components/menu/mob/HomepageDesk.vue'
import { mapState } from 'vuex'
export default {
  name: 'AppLinksMobile',
  data() {
    return {
      appLinkKeyBk: 'yuh' + 0,
      glow: false,
      object2: {
        about: false,
        portfolio: false
      }
    }
  },
  components: {
    HomepageDesk
  },
  computed: mapState(['rtmO']),
  methods: {
    toggle() {
      return this.glow = true
    }
  }
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD:components/LinksMob.vue
.7al {
=======
.nav-list {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/AppLinksMobile.vue
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  pointer-events: none;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  margin: auto;
  background-color: transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  text-transform: capitalize;
  list-style: none;
  font-family: 'AtkinsonHyperlegibleRegular';
  text-rendering: geometricPrecision;
  font-size: 27.82428px;
  line-height: 1.35;
  color: #e3e4e1;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

<<<<<<< HEAD:components/LinksMob.vue
.fmx {
=======
.otherbk {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/AppLinksMobile.vue
  z-index: -1;
}
</style>
