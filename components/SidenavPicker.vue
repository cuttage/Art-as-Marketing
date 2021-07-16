<template>
  <component :is="pickSN" />
</template>

<script>
import TheSideNav from '~/components/TheSideNav.vue'
import TheSideNavPortfolio from '~/components/TheSideNavPortfolio.vue'
import { mapState } from 'vuex'
export default {
  name: 'SidenavPicker',
  components: {
    TheSideNav,
    TheSideNavPortfolio
  },
  computed: {
    ...mapState({
      page: 'page'
    }),
    pickSN() {
      return (this.page === 'portfolio' || this.page === 'portfolio-id') ? 'TheSideNavPortfolio' : 'TheSideNav'
    }
  }
}
</script>
