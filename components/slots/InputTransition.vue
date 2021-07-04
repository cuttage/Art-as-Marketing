<template>
  <transition name="prev" mode="out-in" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </transition>
</template>

<style lang="scss" scoped>
// prefixed with "prev" so the prev button easily changes to this block of CSS
.prev-enter { opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0); }
.prev-enter-to { opacity: 1; transform: scale3d(1, 1, 1); }
.prev-enter-active,
.prev-leave-active { transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.prev-leave { opacity: 1; transform: scale3d(1, 1, 1); }
.prev-leave-to {opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(400px, 0, 0); }
</style>
