<template>
  <!--eslint-disable-->
  <ul class="nav-list" @click.once="toggle">
    <li>index</li>
    <li>about</li>
    <li>portfolio</li>
    <li>index</li>
    <li>portfolio</li>
    <HomepageDesk v-if="rtmO === true && glow === true" class="otherbk" :object2="object2" :key="appLinkKeyBk" />
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
.nav-list {
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
  font-size: 27.82428px; // was: 27.84528px
  line-height: 1.35;
  //letter-spacing: -.01em;
  color: #e3e4e1;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.otherbk {
  z-index: -1;
}
</style>
