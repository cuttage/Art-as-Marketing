<template>
  <div class="nobright">
    <slot name="surgeon" :whichLeft="whichLeft" :whichRight="whichRight"></slot>
  </div>
</template>

<script>
export default {
  props: ['block'],
  computed: {
    whichLeft() {
      return (this.block._uid === 'BUY6Drn9e1') ? 'u1JCacoZxy' : (this.block._uid === 'gJZoSLkfZV') ? 'BUY6Drn9e1' : (this.block._uid === 'u1JCacoZxy') ? 'gJZoSLkfZV' : null;
    },
    whichRight() {
      return (this.block._uid === 'BUY6Drn9e1') ? 'gJZoSLkfZV' : (this.block._uid === 'gJZoSLkfZV') ? 'u1JCacoZxy' : (this.block._uid === 'u1JCacoZxy') ? 'BUY6Drn9e1' : null;
    }
  }
}
</script>

<style lang="scss" scoped>
.nobright {
  filter: brightness(30%);
  position: relative;
  top: calc(-164.365450121654501vw - 2em) !important; // calc(12.165450121654501vw + 152.2vw + 2em)
  height: 0 !important;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .nobright {
    top: calc(-3em - 613.32px - 27.2vw) !important; // calc((460px * 0.7) + (460px * 0.7) - 15.34px + (1em - 15.34px) + 2em + 27.2vw)
    height: 0 !important;
  }
}
</style>
