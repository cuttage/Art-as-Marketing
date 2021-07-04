<template>
  <div id="myMenu">
    <transition
      ease="out-in"
      @before-enter="beforeEnterMob"
      @enter="enterMob"
      @after-enter="afterEnterMob"
      @before-leave="beforeLeaveMob"
      @leave="leaverMob"
      :css="false"
    >
      <div
        v-if="toggleSidebar === true"
        v-bind:class="(toggleSidebar === true ? sidenav : '')"
        :key="sidenavKey"
      >
        <AppLinksMobile :key="appLinkKey" />
      </div>
    </transition>
    <div
      v-if="bkopen === true"
      class="blur bk"
      @click="WaitToDoMob"
      :key="componentKey"
      v-once
    />
  </div>
</template>

<script>
import { TweenMax } from 'gsap/dist/gsap'
import { mapState, mapMutations, mapActions } from 'vuex'
import AppLinksMobile from '~/components/AppLinksMobile.vue'

export default {
  name: 'TheSideNavMobile',
  props: ['TheSideNavMobile'],
  serverCacheKey: props => props.TheSideNavMobile,
  render (h) {
    return h('div', this.TheSideNavMobile)
  },
  data() {
    return {
      componentKey: "shm" + 0,
      sidenav: 'sidenav',
      appLinkKey: "ghm" + 0,
      sidenavKey: "mfhm" + 0,
      smallTime: 250
    }
  },
  computed: mapState(['toggleSidebar', 'bkopen']),
  components: {
    AppLinksMobile
  },
  methods: {
    ...mapActions({
      toggleTimersMob: 'toggleTimersMob'
    }),
    ...mapMutations({
      sidenavChange: 'TOGGLE_SIDEBAR',
      martaChange: 'TOGGLE_MARTA',
      changeTimerG: 'CHANGE_TIMER_G',
      changeBkopen: 'TOGGLE_BKOPEN',
      changeRtm: 'TOGGLE_RTM'
    }),
    flushQueue() {
      return new Promise((resolve) => setTimeout(resolve, 0));
    },
    promiseaMob() {
      return this.changeRtm();
    },
    sidenavChangeaMob() {
      return this.sidenavChange();
    },
    async WaitToDoMob() {
      const promiseaMob = await this.promiseaMob();
      const sidenavChangeaMob = await this.sidenavChangeaMob(promiseaMob);
      return sidenavChangeaMob;
    },
    beforeEnterMob: function(el) {
      TweenMax.set(
        el,
        {
          transformOrigin: '50% 50%'
        }
      )
    },
    enterMob: function(el, done) {
      TweenMax.fromTo(
        el,
        0.005,
        {
          autoAlpha: 0,
          rotation:0,
          z:0
        },
        {
          autoAlpha: 1,
          rotation:0.01,
          z:0.01,
          delay: 0.26,
          force3D: true,
          onComplete:done
        }
      );
      done();
    },
    async promiseyMob() {
      await this.flushQueue()
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.$nextTick(() => {
            this.changeBkopen()
          }));
        }, 220);
      });
    },
    doeyMob() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.$nextTick(() => this.changeRtm()));
        }, 720);
      });
    },
    async afterEnterMob() {
      const [promiseyMob, doeyMob] = await Promise.all([this.promiseyMob(), this.doeyMob()]);
      promiseyMob && doeyMob;
    },
    beforeLeaveMob: function() {
      this.changeBkopen();
    },
    async leaverMob(el, done) {
      await this.flushQueue()
      this.changeTimerG(await setImmediate(async () => {
        await this.leaveMob(el, done);
      }, this.smallTime))
    },
    leaveMob: function(el, done) {
      TweenMax.fromTo(el, 0.005,
        {
          autoAlpha: 1,
          rotation:0,
          z:0
        },
        {
          autoAlpha: 0,
          rotation:0.01,
          z:0.01,
          delay: 0.3,
          force3D: true,
          onComplete:done
        }).then(() => {this.martaGetBackVisibleMob()}); // could be .then((done) => {this.martaGetBackVisibleMob(done)}) //the last part could be like this or .then(() => {this.martaChange()})
    },
    promiseMob() {
      new Promise(resolve => {
        setTimeout(() => resolve(this.$nextTick(() => this.martaChange())), 220)
      })
    },
    async martaGetBackVisibleMob() {
      this.$nextTick(() => this.toggleTimersMob());

      let result = await this.promiseMob();

      result;
    }
  },
  beforeDestroy() {
    this.$nextTick(() => this.toggleTimersMob());
  }
}
</script>

<style lang="scss" scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.sidenav::-webkit-scrollbar {
  display: none;
}

.sidenav {
  will-change: transform;
  z-index: 10000;
  height: 100%;
  width: 174.825px;
  background-color: transparent;
  position: fixed;
  max-height: 100%;
  overflow: auto;
  top: 0;
  left: 50vw;
  margin-left: -87.4125px;
  box-sizing: border-box;
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  overflow: -moz-scrollbars-none; /* Hide scrollbar older versions of Firefox? */
}

.bk {
  backface-visibility: hidden;
}

.blur {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
