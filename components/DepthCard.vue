<template>
  <!--eslint-disable-->
<<<<<<< HEAD:components/Cards.vue
  <div class="yjb"
=======
  <div class="longer"
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/DepthCard.vue
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      ref="card"
<<<<<<< HEAD:components/Cards.vue
      class="nl9"
    >
      <div class="card" :style="cardStyle">
        <div v-show="isLoaded">
          <placeholder class="gbl" :style="[cardBgTransform, cardBgImageLoading]" />
        </div>
        <div v-if="isLoaded">
          <div class="gbl" :style="[cardBgTransform, cardBgImage]" />
        </div>
        <div v-else>
          <placeholder class="gbl" :style="[cardBgTransform, cardBgImageLoading]" />
        </div>
        <div class="rnk">
          <CardTitle :title="title" />
          <nuxt-link :to="dsk ? 'portfolio' + link : 'touchportfolio' + link" class="s8l">
            <CardDescription :description="description" />
=======
      class="card-wrap"
    >
      <div class="card" :style="cardStyle">
        <div v-show="isLoaded">
          <placeholder class="card-bg" :style="[cardBgTransform, cardBgImageLoading]" />
        </div>
        <div v-if="isLoaded">
          <div class="card-bg" :style="[cardBgTransform, cardBgImage]" />
        </div>
        <div v-else>
          <placeholder class="card-bg" :style="[cardBgTransform, cardBgImageLoading]" />
        </div>
        <div class="card-info">
          <dcTitle :title="title" />
          <nuxt-link :to="dsk ? 'portfolio' + link : 'touchportfolio' + link" class="nuxt-link-custom">
            <dcDescription :description="description" />
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/DepthCard.vue
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dcTitle from '~/components/CardElem/dcTitle'
import dcDescription from '~/components/CardElem/dcDescription'
/* eslint-disable */
export default {
  components: {
    dcTitle,
    dcDescription
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width
    },
    mousePY() {
      return this.mouseY / this.height
    },
    cardStyle() {
      let rX = this.mousePX * 30
      let rY = this.mousePY * -30
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      }
    },
    cardBgTransform() {
      let tX = this.mousePX * -40
      let tY = this.mousePY * -40
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.image})`
      }
    },
    cardBgImageLoading() {
      return {
        backgroundImage: `url(${this.loading})`
      }
    }
  },
  props: ['image', 'loading', 'title', 'description', 'link', 'dsk'],
  data() {
    return {
      isLoaded: false,
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null
    }
  },
  mounted() {
    this.width = this.$refs.card.offsetWidth
    this.height = this.$refs.card.offsetHeight
    this.$nextTick().then(() => { this.isLoaded = true })
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay)
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0
        this.mouseY = 0
      }, 50),
      clearTimeout(() => {
        this.mouseX = 0
        this.mouseY = 0
      }, 1000)
    }
  }
}
</script>

<style exact lang="scss" scoped>
$primary: #D25593;
$hoverEasing: cubic-bezier(0.165, 0.84, 0.44, 1);
$returnEasing: cubic-bezier(0.165, 0.84, 0.44, 0.44);
<<<<<<< HEAD:components/Cards.vue
.s8l {
=======
.nuxt-link-custom {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/DepthCard.vue
  color: white;
  text-decoration: none;
}

<<<<<<< HEAD:components/Cards.vue
.yjb {
=======
.longer {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/DepthCard.vue
  padding: 10px;
  display: flex;
  cursor: pointer;

  &:hover {
    .card {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 0.8px, // min. 1px in Safari
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

<<<<<<< HEAD:components/Cards.vue
.nl9 {
=======
.card-wrap {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/DepthCard.vue
  transform: perspective(800px);
  transform-style: preserve-3d;

  &:hover {
<<<<<<< HEAD:components/Cards.vue
    .rnk {
      transform: translate3d(0, 30, 0);
    }
    .rnk,
    .rnk p {
=======
    .card-info {
      transform: translate3d(0, 30, 0);
    }
    .card-info,
    .card-info p {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/DepthCard.vue
      opacity: 1;
      -webkit-transition: all 0.6s $hoverEasing;
      transition: all 0.6s $hoverEasing;
    }

<<<<<<< HEAD:components/Cards.vue
    .rnk:after {
      transform: translate3d(0, 30, 0);
    }
    .gbl {
=======
    .card-info:after {
      transform: translate3d(0, 30, 0);
    }
    .card-bg {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/DepthCard.vue
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.8;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
}

<<<<<<< HEAD:components/Cards.vue
.gbl {
=======
.card-bg {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/DepthCard.vue
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 117%;
  height: 117%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover !important;
  transition: 7s $returnEasing, opacity 5s $returnEasing;
  pointer-events: none;
  image-rendering: crisp-edges;
}

<<<<<<< HEAD:components/Cards.vue
.rnk h1 {
=======
.card-info h1 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/DepthCard.vue
  font-size: 36px !important;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
  line-height: 60px !important;

}

p {
  line-height:35px !important;
}

// prettier-ignore
h1 + p, p + p {
  vertical-align: super;
}

<<<<<<< HEAD:components/Cards.vue
.rnk {
=======
.card-info {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/DepthCard.vue
  position: absolute;
  padding-left: 20px;
  padding-right: 18px;
  color: #fff;
  transform: translate3d(0, 40px, 0);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    opacity: 0;
    font-family: 'DIN Medium', sans-serif;
    font-size: 20px;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
  }

  &:after {
    p,
    h1 {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image:
       linear-gradient(
        transparent 0%,
        rgba(#000, 0.6) 100%
       );
      background-blend-mode: overlay;
      opacity: 0;
      transform: translate3d(0, 40px, 0);
      transition: 5s $returnEasing ease-in;
    }
  }
}
</style>
