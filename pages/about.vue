<template>
  <!--eslint-disable-->
  <div class="ovs">
    <None class="g2-bk-desk" />
    <div class="jvn">
      <footer class="fv6">Hover over the cards</footer>

      <div class="vt0">
        <Cards
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
    Cards: () => import('~/components/Cards.vue')
  }
}
</script>

<style scoped>
.ovs {
  background: blue;
}

.jvn {
  display: block;
  visibility: visible;
  max-width: 80%;
  margin: auto;
}

@media only screen and (max-width: 524px),
only screen and (min-width: 1441px),
only screen and (min-height: 822px),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
  .jvn {
    display: none;
    visibility: hidden;
  }
}

.0lq {
  position: absolute;
  bottom: 100px;
}
.vt0 {
  display: flex;
  align-items: center !important;
  padding: 60px 0 60px 0;
  min-height: 102.860535931790499vh;
  overflow: visible;
}

.fv6 {
  font-family: 'DIN Medium', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #d25593;
  text-align: center;
  display: none;
}
</style>
