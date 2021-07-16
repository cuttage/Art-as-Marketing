<template>
<<<<<<< HEAD:components/spinner/SpinnerPur.vue
  <nav class="jq4">
    <div class="9sn">
      <transition name="o64" mode="out-in">
=======
  <nav class="nav-wraper">
    <div class="transition-wrapper">
      <transition name="appearing" mode="out-in">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
        <div v-if="getToggleCuttage2" id="consultancy">
          <p>
            A Consultancy part of Cuttage Group
          </p>
        </div>
      </transition>
    </div>
<<<<<<< HEAD:components/spinner/SpinnerPur.vue
    <div class="wo2">
      <div id="wl1">
        <div id="circ">
          <section class="2ih">
            <div v-if="page === 'about'" class="g2b" @click="toggleImage" />
            <div v-else class="7ip" @click="toggleImage" />
=======
    <div class="spinner-wrapper">
      <div id="spinner-container">
        <div id="circ">
          <section class="spinner-parenting">
            <div v-if="page === 'about'" class="spinner-2" @click="toggleImage" />
            <div v-else class="spinner-1" @click="toggleImage" />
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import mainpage from '~/assets/scss/mainpage.scss'
import { enactC } from '~/composables/toggle-cuttage-store.js'
import animationWaiter from '~/mixins/animation-waiter.js';
import 'requestidlecallback-polyfill'; //remove with safari 14

export default {
  data() {
    return {
      promiseList: this.promiseGenerator()
    }
  },
  assets: {
    mainpage
  },
  setup () {
    const { toggleCuttage2, getToggleCuttage2 } = enactC();

    return {
      toggleCuttage2,
      getToggleCuttage2
    }
  },
  mixins: [animationWaiter],
  computed: {
    page() {
      return this.$store.state.page
    }
  },
  methods: {
    async toggleImage() {
      let valA = await this.fetchWaitIdle();
      let valB = await this.toggleCuttage2(valA);
      let valD = await this.promiseList.next(this.promiseRequestIdleCallback(valB));
      return valD;
    }
  }
}
</script>

<style lang="scss" scoped>
$d: 60px;
$c: rgba(0, 169, 157, 0.9);
$m: rgba(210, 85, 147, 0.9);

<<<<<<< HEAD:components/spinner/SpinnerPur.vue
.jq4 {
=======
.nav-wraper {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
  visibility: visible;
  display: flex;
  width: 100vw;
  height: 80px;
  overflow: visible;
<<<<<<< HEAD:components/spinner/SpinnerPur.vue
  .9sn {
=======
  .transition-wrapper {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
    flex-grow: 1;
    width: calc(10px + 54%);
    height: inherit;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    overflow: visible;
    margin-left: 4%;
  }
<<<<<<< HEAD:components/spinner/SpinnerPur.vue
  .wo2 {
=======
  .spinner-wrapper {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
    flex-grow: 1;
    width: calc(10px + 46%);
  }
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
<<<<<<< HEAD:components/spinner/SpinnerPur.vue
  .jq4 {
=======
  .nav-wraper {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
    visibility: hidden;
    display: none;
    height: 0;
  }
}

<<<<<<< HEAD:components/spinner/SpinnerPur.vue
.o64 {
  backface-visibility: hidden;
  will-change: opacity, transform;
}
.o64-enter-to,
.o64-leave {
  opacity: 1;
}
.o64-enter-active {
  transition: all .4s;
}
.o64-leave-active {
  transition: all .05s cubic-bezier(1.0, 0.5, 0.8, 1.0) 220ms;
  transform: rotate(0.01);
}
.o64-enter, .o64-leave-to {
=======
.appearing {
  backface-visibility: hidden;
  will-change: opacity, transform;
}
.appearing-enter-to,
.appearing-leave {
  opacity: 1;
}
.appearing-enter-active {
  transition: all .4s;
}
.appearing-leave-active {
  transition: all .05s cubic-bezier(1.0, 0.5, 0.8, 1.0) 220ms;
  transform: rotate(0.01);
}
.appearing-enter, .appearing-leave-to {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
  opacity: 0;
}

#consultancy {
  overflow: visible;
  display: flex;
  text-align: right;
  z-index: 999;
  filter: brightness(1.1);
}

p {
  display: inline-block;
  font-family: 'AtkinsonHyperlegibleBold';
  font-size: 26.647101746392745px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  font-weight: 560;
  color: #333;
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
  text-rendering: geometricPrecision;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 3px 10px 3px 10px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  cursor: pointer;
}

<<<<<<< HEAD:components/spinner/SpinnerPur.vue
#wl1 {
=======
#spinner-container {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

<<<<<<< HEAD:components/spinner/SpinnerPur.vue
.2ih {
=======
.spinner-parenting {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
  display: flex;
  justify-content: center;
  align-items: center !important;
  width: 100%; height: $d;
  position: relative;
}

<<<<<<< HEAD:components/spinner/SpinnerPur.vue
.7ip::after,
.g2b::after {
=======
.spinner-1::after,
.spinner-2::after {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
  backface-visibility: hidden !important;
  content: '';
  display: flex;
}

<<<<<<< HEAD:components/spinner/SpinnerPur.vue
.g2b {
=======
.spinner-2 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
  &, &:before {
    backface-visibility: hidden !important;
    width: $d; height: $d;
    z-index: 999;
    border-radius: 50%;
  }

  backface-visibility: hidden !important;
  position: relative;
  box-sizing: border-box;
  background: url('~assets/svg/Logo-aboutMob.svg') 50%/ cover padding-box !important;
}

<<<<<<< HEAD:components/spinner/SpinnerPur.vue
.7ip {
=======
.spinner-1 {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/spinner/PureSpinner.vue
  &, &:before {
    backface-visibility: hidden !important;
    width: $d; height: $d;
    z-index: 999;
    border-radius: 50%;
  }

  backface-visibility: hidden !important;
  position: relative;
  box-sizing: border-box;
  background: url('~assets/svg/Logo-indexMob.svg') 50%/ cover padding-box !important;
}

ul:after, ul:before {
  width: 100% !important;
  height: inherit !important;
}

@keyframes xAxis {
  50% {
    animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    transform: translateX(10px);
  }
}

@keyframes aura {
  25%,
  75% {
    border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
  }
  50% {
    border-radius: 40% 60% 60% 40% / 40% 60% 40% 60%;
  }
  100% {
    transform: rotate(360deg);
  }
}

ul {
  width: 100% !important;
  height: inherit !important;
  margin: 0 !important; padding: 0 !important;
  position: absolute;
  top: 0;
  list-style: none;
  li {
    z-index: 997;
    animation: xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
    list-style: none;
    position: absolute;
    width: $d; height: $d;
    top: 0;
    animation: aura 22.5s infinite linear;
    filter: blur(4.28px);
    &:nth-child(2) {
      will-change: transform;
      background-color: $m;
      animation-delay: -7.5s;
      backface-visibility: hidden;
    }
    &:nth-child(3) {
      will-change: transform;
      background-color: $c;
      animation-direction: reverse;
      animation-delay: -15s;
      backface-visibility: hidden;
    }
  }
}


@keyframes yAxis {
  50% {
    animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    transform: translateY(-10px);
  }
}

li::after {
  content: '';
  display: flex;
  background-color: rgba(255, 255, 255, 0.35);
  width: $d - 5px; height: $d - 5px;
  border-radius: 10%;
  animation: yAxis 2.5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);
  backface-visibility: hidden;
  will-change: transform;
}
</style>
