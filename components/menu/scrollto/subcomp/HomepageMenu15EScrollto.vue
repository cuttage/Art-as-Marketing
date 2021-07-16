<template>
<<<<<<< HEAD
  <div class="yjb">
=======
  <div class="longer">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    <div class="disable">
      <Homepage15EScrolltoShared id="child" class="child" />
    </div>
  </div>
</template>

<script>
// prettier-ignore
import Homepage15EScrolltoShared from '~/components/shared/Homepage15EScrolltoShared.vue'

export default {
  components: {
    Homepage15EScrolltoShared
  }
}
</script>

<style exact lang="scss" scoped>
@import '~/assets/scss/homecta.scss';

$primary: #D25593;
<<<<<<< HEAD
.yjb {
=======
.longer {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  padding-top: 16px;
  display: flex;
  padding-bottom: 6px;
}

.child {
  padding-top: 0.26em !important;
  font-size: 12.08px !important;
  text-rendering: geometricPrecision;
  position: relative;
  display: inline-block;
  width: inherit;
  height: inherit;
  border-radius: 5px;
}

.disable {
  position: relative;
  display: inline-block;
  width: 249.75px;
  height: 167.285377358490566px;
  border-radius: 5px;
  text-shadow: 0 0.01px 0.01px rgba(0,0,0,0.20),
              0 0.02px 0.02px rgba(0,0,0,0.16),
              0 0.04px 0.04px rgba(0,0,0,0.12),
              0 0.08px 0.08px rgba(0,0,0,0.08),
              0 0.16px 0.16px rgba(0,0,0,0.04);
  box-shadow: 0 1px 1px rgba(0,0,0,0.125),
              0 2px 2px rgba(0,0,0,0.1),
              0 4px 4px rgba(0,0,0,0.075),
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.025);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Pre-render the bigger shadow, but hide it */
.disable::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 5px;
  opacity: 0;
  box-shadow: 0 1px 1px rgba(0,0,0,0.08),
              0 2px 2px rgba(0,0,0,0.08),
              0 4px 4px rgba(0,0,0,0.08),
              0 8px 8px rgba(0,0,0,0.08),
              0 16px 16px rgba(0,0,0,0.08),
              0 32px 32px rgba(0,0,0,0.08);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

<<<<<<< HEAD
.yjb:hover div {
=======
.longer:hover div {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  text-shadow: none !important;
}

/* Transition to showing the bigger shadow on hover */
.disable:hover::after {
  opacity: 1;
}
</style>
