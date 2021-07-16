<template>
  <!--eslint-disable-->
<<<<<<< HEAD
  <div class="ovs">
    <None class="g2-bk-desk" />
    <div class="jvn">
      <footer class="fv6">Hover over the cards</footer>

      <div class="vt0">
        <Cards
=======
  <div class="about-wrapper">
    <None class="g2-bk-desk" />
    <div class="web-container-bottom-view">
      <footer class="Hover-croll-card">Hover over the cards</footer>

      <div class="container">
        <DepthCard
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
            v-for="article in this.$store.state.articleList"
            v-bind="article"
            :dsk="dsk"
            :key="article.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import None from '~/components/slots/None.vue';
export default {
  head: {
    title: 'About page',
    meta: [
      {
        hid: 'about hid',
        name: 'about',
        content: 'About page description'
      }
    ]
  },
  data() {
    return {
      dsk: 'dsk'
    }
  },
  components: {
    None,
    DepthCard: () => import('~/components/DepthCard.vue')
  }
}
</script>

<style scoped>
<<<<<<< HEAD
.ovs {
  background: blue;
}

.jvn {
=======
.about-wrapper {
  background: blue;
}

.web-container-bottom-view {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  display: block;
  visibility: visible;
  max-width: 80%;
  margin: auto;
}

@media only screen and (max-width: 524px),
only screen and (min-width: 1441px),
only screen and (min-height: 822px),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
<<<<<<< HEAD
  .jvn {
=======
  .web-container-bottom-view {
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
.vt0 {
=======
.nuxt-link-name {
  position: absolute;
  bottom: 100px;
}
.container {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  display: flex;
  align-items: center !important;
  padding: 60px 0 60px 0;
  min-height: 102.860535931790499vh;
  overflow: visible;
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
