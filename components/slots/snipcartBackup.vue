<template>
<<<<<<< HEAD:components/slots/MoreList.vue
  <main class="s-w">
    <nav class="9nh">
      <menu class="9nh__cnt">

        <li v-for="(active, menu) in menus" class="9nh__lb"
          :class="{
            '9nh__lb--active': active,
            '9nh__lb--euu': sft[menu].length
=======
  <main class="snipc-wrap">
    <nav class="snipc-navd">
      <menu class="snipc-navd__controls">

        <li v-for="(active, menu) in menus" class="snipc-navd__label"
          :class="{
            'snipc-navd__label--active': active,
            'snipc-navd__label--sfilter': sfilters[menu].length
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/slots/snipcartBackup.vue
          }" @click="setMenu(menu, active)">
          {{ menu }}
        </li>
      </menu>
    </nav>

<<<<<<< HEAD:components/slots/MoreList.vue
    <transition-group name="snp" tag="section" class="snp" :style="snp">
      <menu v-for="(options, euu) in sft" class="sft"
        v-show="menus[euu]" ref="menu" :key="menus[euu]">

        <span class="7kw">
=======
    <transition-group name="snipcd" tag="section" class="snipcd" :style="snipcd">
      <menu v-for="(options, sfilter) in sfilters" class="sfilters"
        v-show="menus[sfilter]" ref="menu" :key="menus[sfilter]">

        <span class="sfilters-i">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/slots/snipcartBackup.vue
          <slot></slot>
        </span>
      </menu>
    </transition-group>
  </main>
</template>

<script>
import useRaw from '~/composables/raw-data.js'
export default {
  setup (props) {
    const { firstArrMore } = useRaw();
    return {
      firstArrMore
    }
  },
  props: ['xv'],
  data() {
    return {
      snipcd: { height: 0 },
      sfilters: { more: {} },
      menus: { more: false }
    }
  },
  computed: {
    activeMenu() {
      return Object.keys(this.menus).reduce(($$, set, i) => (this.menus[set]) ? i : $$, -1)
    }
  },
  methods: {
    setMenu(menu, active) {
      Object.keys(this.menus).forEach(tab => {
        this.menus[tab] = !active && tab === menu
      })
    }
  },
  watch: {
    activeMenu(index, from) {
        if (index === from) return;

        this.$nextTick(() => {(!this.$refs.menu || !this.$refs.menu[index]) ? this.snipcd.height = 0 : this.snipcd.height = `${this.$refs.menu[index].clientHeight + 16}px`})
      },
      xv: {
        handler: function(newVal, oldVal, menu, active) {
          if (newVal && newVal !== oldVal) {
            this.setMenu(menu, active)
          }
        },
        immediate: true
      }
  },
  beforeMount() {
    this.firstArrMore.body.forEach(({ keyword }) => {
      this.$set(this.sfilters.more, keyword, false)
    })
  }
}
</script>

<style lang="scss" scoped>
.snipc-wrap {
  z-index: 999;
  position: relative;
  font-family: 'AtkinsonHyperlegibleRegular';
  text-rendering: geometricPrecision;
  font-size: 27.82428px;
  line-height: 1.35;
  color: #333;
}
<<<<<<< HEAD:components/slots/MoreList.vue
.9nh {
=======
.snipc-navd {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/slots/snipcartBackup.vue
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  margin-top: 1em;
  margin-right: 6.59918336px;
  margin-left: 6.59918336px;
  padding: 0.35rem 12.65448px 0.27rem 12.65448px;
  border-bottom: 1px solid #c5d0d1;
  &__controls {
    display: flex;
    margin: 0; padding: 0;
  }
  &__label {
    z-index: 1;
    position: relative;
    list-style: none;
    text-transform: capitalize;
    cursor: pointer;
  }
}
.snipcd {
  z-index: 999;
  max-width: 100vw;
  transition: height 350ms;
  will-change: height, opacity, width;
  &-enter,
  &-leave-to { opacity: 0 }
  &-leave,
  &-enter-to { opacity: 1 }
  &-enter-active,
  &-leave-active {
    width: 100%;
    transition: opacity 200ms ease-in-out;
  }
}
.sfilters {
  display: flex;
  justify-content: center;
  padding: 0;
}
<<<<<<< HEAD:components/slots/MoreList.vue
.7kw {
=======
.sfilters-i {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/slots/snipcartBackup.vue
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
