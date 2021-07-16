<template>
  <!--eslint-disable-->
  <div>
    <NoneMob class="g2-bk-mob" />
<<<<<<< HEAD
    <div class="6lw">
      <footer class="fv6">Hover over the cards</footer>

      <div class="xr6">
        <Cards
=======
    <div class="web-container-bottom-view-mob">
      <footer class="Hover-croll-card">Hover over the cards</footer>

      <div class="container-card">
        <DepthCard
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
            v-for="article in this.$store.state.articleList"
            v-bind="article"
            :key="article.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NoneMob from '~/components/slots/NoneMob.vue'
export default {
  head: {
    title: 'Touch about page',
    meta: [
      {
        hid: 'touch about hid',
        name: 'touch about',
        content: 'Touch about page description'
      }
    ]
  },
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  components: {
    NoneMob,
    DepthCard: () => import('~/components/DepthCard.vue')
  }
}
</script>

<style scoped>
<<<<<<< HEAD
.6lw {
=======
.web-container-bottom-view-mob {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  display: block;
  visibility: visible;
}

/* experimental feature: 375px limit in layout */
@media only screen and (max-device-width: 290px) and (orientation: portrait),
only screen and (max-width: 368px),
only screen and (max-width: 375px) and (max-resolution: 2.88dppx), // limit until 375px excluding iPhone 12 mini
only screen and (max-width: 375px) and (-webkit-max-device-pixel-ratio: 2.88),
only screen and (max-width: 460px) and (max-resolution: 1.6687500000dppx), // limit until 460px devices with max-resolution: 1.6687500000dppx (especially galaxy note II)
only screen and (max-width: 460px) and (-webkit-max-device-pixel-ratio: 1.6687500000),
only screen and (max-device-width: 480px) and (max-resolution: 2dppx) and (orientation: landscape), // limit anything below iPhone 4s in landscape
only screen and (max-device-width: 480px) and (-webkit-max-device-pixel-ratio: 2) and (orientation: landscape),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
<<<<<<< HEAD
  .6lw {
=======
  .web-container-bottom-view-mob {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    display: none;
    visibility: hidden;
  }
}

<<<<<<< HEAD
.0lq {
  position: absolute;
  bottom: 100px;
}
.xr6 {
=======
.nuxt-link-name {
  position: absolute;
  bottom: 100px;
}
.container-card {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  display: flex;
  align-items: center !important;
  padding: 60px 0 60px 0;
}

<<<<<<< HEAD
.xr6 {
=======
.container-card {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 20px 0 20px;
}

@media only screen and (max-width: 398px) {
<<<<<<< HEAD
  .xr6 {
=======
  .container-card {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    padding: 40px 0 0 0;
  }
}

<<<<<<< HEAD
.fv6 {
=======
.Hover-croll-card {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  font-family: 'DIN Medium', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #d25593;
  text-align: center;
  display: none;
}
</style>
