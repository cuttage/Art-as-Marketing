<template>
  <div>
    <NavWraper :desk="desk" />
    <component :is="sNComp" />
    <slot></slot>
    <footer id="footer">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import NavWraper from '~/components/slots/NavWraper.vue'
import TheSideNav from '~/components/TheSideNav.vue'
import AppFooter from '~/components/AppFooter.vue'
import { mapState } from 'vuex'

export default {
  name: 'layout_0Desk',
  data() {
    return {
      desk: 'desk',
      sNav: false,
      sNComp: 'TheSideNav',
      longDeb: 10000,
      unwatchMarta: null
    }
  },
  components: {
    NavWraper,
    TheSideNav,
    AppFooter
  },
  methods: {
    sNavTrue() {
      return this.sNav = '';
    },
    sNavFalse() {
      return this.sNav = 'TheSideNav';
    },
    async newSNav() {
      await setTimeout(async () => {
        await this.sNavFalse();
      }, this.longDeb)
    }
  },
  computed: mapState(['toggleMarta']),
  created() {
    this.unwatchMarta = this.$watch('toggleMarta', (newValue, oldValue) => {
      if (oldValue === true) {
        this.sNavTrue();
        this.newSNav();
      }
    })
  },
  beforeDestroy() {
    this.unwatchMarta();
  }
}
</script>

<style lang="scss">
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
}
</style>
