<template>
  <div>
    <section class="container2p">
      <section class="blocco_start">
        <img
          v-if="isSub1Active"
          v-bind:class="[(isSub1Active === true ? blocco_start_img_1 : ''), (isSub1Active === true ? blocco_start_img_anim_1 : ''),
          (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/image5.jpg"
          alt="marta-fattori"
          class="will-change-op"
        >
        <img
          v-if="isSub2Active"
          v-bind:class="[(isSub2Active === true ? variance1A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/image5.jpg"
          alt="marta-fattori"
          class="will-change-op"
        >
        <img
          v-if="isSub3Active"
          v-bind:class="[(isSub3Active === true ? variance1A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/image5.jpg"
          alt="marta-fattori"
          class="will-change-op"
        >

        <img
          v-if="isSub2Active"
          v-bind:class="[(isSub2Active === true ? blocco_start_img_2 : ''), (isSub2Active === true ? blocco_start_img_anim_2 : ''),
          (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/image6.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />
        <img
          v-if="isSub1Active"
          v-bind:class="[(isSub1Active === true ? variance2A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/image6.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />
        <img
          v-if="isSub3Active"
          v-bind:class="[(isSub3Active === true ? variance2A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/image6.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />

        <img
          v-if="isSub3Active"
          v-bind:class="[(isSub3Active === true ? blocco_start_img_3 : ''), (isSub3Active === true ? blocco_start_img_anim_3 : ''),
          (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/image7.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />
        <img
          v-if="isSub1Active"
          v-bind:class="[(isSub1Active === true ? variance3A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/image7.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />
        <img
          v-if="isSub2Active"
          v-bind:class="[(isSub2Active === true ? variance3A : ''), (isNoneActive === true ? noneClass : '')]"
          src="~/static/img/image7.jpg"
          alt="marta-fattori"
          class="will-change-op"
        />
      </section>
    </section>
    <div class="double-container-gallery2">
      <div class="galler-grid-container2">
        <div class="container-test-galler2">
          <div class="itemg2" @mouseover="toggleSub1" />
          <div class="itemg2" @mouseover="toggleSub2" />
          <div class="itemg2" @mouseover="toggleSub3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const DIALOG_TYPE = {
  NONE: null,
  SUB1: 1,
  SUB2: 2,
  SUB3: 3
};
export default {
  data() {
    return {
      blocco_start_img_1: 'blocco_start_img_1',
      blocco_start_img_anim_1: 'blocco_start_img_anim_1',
      blocco_start_img_2: 'blocco_start_img_2',
      blocco_start_img_3: 'blocco_start_img_3',
      blocco_start_img_anim_2: 'blocco_start_img_anim_2',
      blocco_start_img_anim_3: 'blocco_start_img_anim_3',
      variance1A: 'variance1A',
      variance2A: 'variance2A',
      variance3A: 'variance3A',
      noneClass: 'none-class',
      activeDialog: DIALOG_TYPE.NONE
    }
  },
  components: {
    Logo: () => import("~/components/Logo.vue"),
  },
  computed: {
    isSub1Active() {
      return this.activeDialog === DIALOG_TYPE.SUB1;
    },
    isSub2Active() {
      return this.activeDialog === DIALOG_TYPE.SUB2;
    },
    isSub3Active() {
      return this.activeDialog === DIALOG_TYPE.SUB3;
    },
    isNoneActive() {
      return this.activeDialog === DIALOG_TYPE.NONE;
    },
    isGallery3Active() {
      return this.activeDialog === DIALOG_TYPE.GALLEY3;
    }
  },
  methods: {
    resetDialog() {
      this.activeDialog = DIALOG_TYPE.NONE;
    },
    toggleSub1() {
      if (this.activeDialog === DIALOG_TYPE.SUB1) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.SUB1;
    },
    toggleSub2() {
      if (this.activeDialog === DIALOG_TYPE.SUB2) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.SUB2;
    },
    toggleSub3() {
      if (this.activeDialog === DIALOG_TYPE.SUB3) {
        return this.resetDialog();
      }
      this.activeDialog = DIALOG_TYPE.SUB3;
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  border: 0;
  -ms-interpolation-mode: bicubic;
  vertical-align: middle;
}
canvas {
  opacity: 1;
}
.will-change-op {
  will-change: transform;
  will-change: opacity;
}
.none-class {
  display: none;
}
.double-container-gallery2 {
  overflow: hidden;
  display: flex; // opt
  flex-wrap: wrap; // opt
  justify-content: center; // opt
  padding: 0 20px 0 20px;
}
.galler-grid-container2 {
  position: absolute;
  height: calc(70vw + 50px);
  display: grid;
  grid-template-columns: 30px 8.5vw 27vw 7.5vw 15vw 25vw 1fr;
  grid-template-rows: repeat(10, 1fr);
}
@media only screen and (max-width: 572px) {
  .galler-grid-container2 {
    top: calc(77vw - 8vw + 50px);
  }
}
@media only screen and (min-width: 573px) {
  .galler-grid-container2 {
    top: calc(70vw - 8vw + 50px);
  }
}
.container-test-galler2 {
  position: absolute;
  top: 0;
  display: flex;
  height: inherit;
  width: 100%;
  z-index: 5;
}
.itemg2 {
  opacity: 0;
  flex-grow: 1;
  height: inherit;
  margin-right: 0;
  margin-left: 0;
}
.info {
  position: fixed;
  left: 35vw;
  top: 0;
}
.info2 {
  position: fixed;
  left: 55vw;
  top: 0;
}

.blocco_2 {
  height: auto;
  display: grid;
  grid-template-columns: 5vw 30vw 30vw 30vw 1fr;
  grid-template-rows: 15vh 70vh 15vh auto 110vh auto 110vh auto 110vh;
}

.blocco_2 img {
  max-height: 100%;
}

@media only screen and (min-width: 525px) {
  .container2p:hover {
    transition: all 0.3s ease-out-in;
    text-shadow: none !important;
  }
}
.container2p {
  /*position: absolute;
  top: calc(70vw - 8vw + 50px);*/
  min-height: 70vw;
  width: 100%;
  left: 0;
  overflow: hidden;
  display: flex; // opt
  flex-wrap: wrap; // opt
  justify-content: center; // opt
  padding: 50px 20px 0 20px;
}

#container2p1 {
  grid-area: 4/3/5/5;
}
#container2p2 {
  grid-area: 6/2/7/4;
}
#container2p3 {
  grid-area: 8/3/9/5;
}

.blocco_start {
  height: 70vw;
  display: grid;
  grid-template-columns: 30px 8.5vw 27vw 7.5vw 15vw 25vw 1fr;
  grid-template-rows: repeat(10, 1fr);
}
.variance1A {
  grid-area: 3/1/10/5;
  max-width: 100%;
  align-self: end;
  padding-left: 20px;
  z-index: 1;
  opacity: 1;
}
.blocco_start_img_1 {
  grid-area: 3/1/10/5;
  max-width: 100%;
  align-self: end;
  padding-left: 20px;
  z-index: 4;
}
.variance2A {
  grid-area: 4/6/9/3;
  z-index: 3;
  max-width: 100%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
  opacity: 1;
}
.blocco_start_img_2 {
  grid-area: 4/6/9/3;
  z-index: 3;
  max-width: 100%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 33vw;
}
.variance3A {
  grid-area: 1/5/7/7;
  z-index: 2;
  max-width: 100%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 32vw;
  opacity: 1;
}
.blocco_start_img_3 {
  grid-area: 1/5/7/7;
  z-index: 4;
  max-width: 100%;
  align-self: end;
  overflow: hidden;
  height: 100%;
  max-height: 32vw;
}
.blocco_start_img_anim_1 {
  animation: blocco_start_img_anim_1 1s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}

@keyframes blocco_start_img_anim_1 {
  /* 0%{
		transform: translateX(-100%); opacity: 0;
	} */
  0% {
    transform: translateX(-5%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.blocco_start_img_anim_2 {
  animation: blocco_start_img_anim_2 1.2s 0.8s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}

@keyframes blocco_start_img_anim_2 {
  /* 0%{
		transform: translateX(-100%); opacity: 0;
	} */
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

.blocco_start_img_anim_3 {
  animation: blocco_start_img_anim_3 1.2s 0.8s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}

@keyframes blocco_start_img_anim_3 {
  /* 0%{
		transform: translateX(-100%); opacity: 0;
	} */
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
