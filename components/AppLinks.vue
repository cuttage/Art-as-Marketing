<template>
  <!--eslint-disable-->
  <div class="nav-list">
    <HomepageMenu />
    <HomepageMenuAbout />
    <HomepageMenuUsers />
    <HomepageMenuTest />
    <HomepageMenuPortfolio />
  </div>
</template>

<script>
import HomepageMenu from '~/components/menu/HomepageMenu'
import HomepageMenuAbout from '~/components/menu/HomepageMenuAbout'
import HomepageMenuUsers from '~/components/menu/HomepageMenuUsers'
import HomepageMenuPortfolio from '~/components/menu/HomepageMenuPortfolio'
import HomepageMenuTest from '~/components/menu/HomepageMenuTest'

export default {
  name: 'AppLinks',
  components: {
    HomepageMenu,
    HomepageMenuAbout,
    HomepageMenuUsers,
    HomepageMenuPortfolio,
    HomepageMenuTest
  }
}
</script>

<style scoped>
.nav-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
}
</style>
