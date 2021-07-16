<template>
  <!--eslint-disable-->
<<<<<<< HEAD:components/Links.vue
  <div class="7al">
=======
  <div class="nav-list">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/AppLinks.vue
    <HomepageMenu />
    <HomepageMenuAbout />
    <HomepageMenuPortfolio />
    <HomepageMenu />
    <HomepageMenuPortfolio />
  </div>
</template>

<script>
import HomepageMenu from '~/components/menu/HomepageMenu'
import HomepageMenuAbout from '~/components/menu/HomepageMenuAbout'
import HomepageMenuPortfolio from '~/components/menu/HomepageMenuPortfolio'

export default {
  name: 'AppLinks',
  components: {
    HomepageMenu,
    HomepageMenuAbout,
    HomepageMenuPortfolio
  }
}
</script>

<style scoped>
<<<<<<< HEAD:components/Links.vue
.7al {
=======
.nav-list {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/AppLinks.vue
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
}
</style>
