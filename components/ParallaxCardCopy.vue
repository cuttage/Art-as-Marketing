<!-- A Marta Fattori adaptation from Copyright (c) 2020 by Jon Kantner (https://codepen.io/jkantner/pen/bGbRQRy)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->
<template>
  <div class="base" v-bind:class="(toggleSidebar === true ? stopClass : '')">
      <div class="hole"></div>
      <div class="plate" ref="hole"></div>
      <div class="plate" ref="hole2"></div>
      <div class="plate" ref="hole3"></div>
      <div class="plate" ref="hole4"></div>
      <div class="plate" ref="hole5"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
/*import { gsap } from 'gsap/dist/gsap';*/

export default {
  name: 'ParallaxCardCopy',
  data() {
    return {
      stopClass: 'stop-class'
    }
  },
  computed: mapState(['toggleSidebar']),
  mounted() {
    //WAAPI

    var hole = [
      { transform: 'translate(-0.45em, -0.45em)' },
      { transform: 'translate(-0.95em,-0.95em)', offset: 0.1 },
      { transform: 'translate(-0.95em,-0.95em)', offset: 0.3 },
      { transform: 'translate(-0.45em, -0.45em)', offset: 0.4 },
      { transform: 'translate(-0.45em, -0.45em)' }
    ];

    var holeTiming = {
      duration: 2000,
      iterations: Infinity
    }

    this.$refs.hole.animate(
      hole,
      holeTiming
    )

    var hole2 = [
      { transform: 'translate(-0.7em,-0.7em)' },
      { transform: 'translate(-1.2em,-1.2em)', offset: 0.1 },
      { transform: 'translate(-0.95em,-0.95em)', offset: 0.2 },
      { transform: 'translate(-0.95em,-0.95em)', offset: 0.3 },
      { transform: 'translate(-0.2em,-0.2em)', offset: 0.4 },
      { transform: 'translate(-0.7em,-0.7em)', offset: 0.5 },
      { transform: 'translate(-0.7em,-0.7em)' }
    ];

    var hole2Timing = {
      duration: 2000,
      iterations: Infinity
    }

    this.$refs.hole2.animate(
      hole2,
      hole2Timing
    )

    var hole3 = [
      { transform: 'translate(-0.95em,-0.95em)' },
      { transform: 'translate(-1.45em,-1.45em)', offset: 0.1 },
      { transform: 'translate(-1.95em,-1.95em)', offset: 0.2 },
      { transform: 'translate(-1.95em,-1.95em)', offset: 0.4 },
      { transform: 'translate(-0.95em,-0.95em)', offset: 0.5 },
      { transform: 'translate(-0.95em,-0.95em)' }
    ];

    var hole3Timing = {
      duration: 2000,
      iterations: Infinity
    }

    this.$refs.hole3.animate(
      hole3,
      hole3Timing
    )

    var hole4 = [
      { transform: 'translate(-1.2em,-1.2em)' },
      { transform: 'translate(-1.7em,-1.7em)', offset: 0.1 },
      { transform: 'translate(-2.2em,-2.2em)', offset: 0.2 },
      { transform: 'translate(-1.95em,-1.95em)', offset: 0.3 },
      { transform: 'translate(-1.95em,-1.95em)', offset: 0.4 },
      { transform: 'translate(-0.7em,-0.7em)', offset: 0.5 },
      { transform: 'translate(-1.2em,-1.2em)', offset: 0.6 },
      { transform: 'translate(-1.2em,-1.2em)' }
    ];

    var hole4Timing = {
      duration: 2000,
      iterations: Infinity
    }

    this.$refs.hole4.animate(
      hole4,
      hole4Timing
    )

    var hole5 = [
      { transform: 'translate(-1.4em,-1.4em)' },
      { transform: 'translate(-1.9em,-1.9em)', offset: 0.1 },
      { transform: 'translate(-2.4em,-2.4em)', offset: 0.2 },
      { transform: 'translate(-2.9em,-2.9em)', offset: 0.3 },
      { transform: 'translate(-2.9em,-2.9em)', offset: 0.5 },
      { transform: 'translate(-1.4em,-1.4em)', offset: 0.6 },
      { transform: 'translate(-1.4em,-1.4em)' }
    ];

    var hole5Timing = {
      duration: 2000,
      iterations: Infinity
    }

    this.$refs.hole5.animate(
      hole5,
      hole5Timing
    )

    /*HOW TO CREATE WAAPI ANIMATION TO PAUSE
    const element = document.getElementById("hole5");
    const myAnimation = element.animate(
      hole5,
      hole5Timing
    );

    myAnimation.pause();*/

    /*var currentTimeScale = tl1.timeScale(); //gets current timeScale
    tl1.timeScale( 0.75 ); //sets timeScale to half-speed
    var currentTimeScale = tl2.timeScale(); //gets current timeScale
    tl2.timeScale( 0.75 ); //sets timeScale to half-speed*/
    /*gsap.defaults({
      ease: "sine.out",
    });
    function part1() {
      var tl1 = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.2
      });
      tl1.set("#hole", {x:'-0.45em', y:'-0.45em'});
      tl1.to("#hole", { x: '-0.95em', y: '-0.95em', duration: 0.2});
      tl1.to("#hole", { x: '-0.45em', y: '-0.45em', duration: 0.2}, "+=0.4");
      return tl1;
    }

    function part2() {
      var tl2 = gsap.timeline({
        repeat: -1,
        repeatDelay: 1
      });
      tl2.set("#hole2", {x:'-0.7em', y:'-0.7em', filter:'blur(1px)'});
      tl2.to("#hole2", { x: '-1.2em', y: '-1.2em', duration: 0.2, filter:'blur(1px)'});
      tl2.to("#hole2", { x: '-0.95em', y: '-0.95em', duration: 0.2, filter:'blur(4px)'});
      tl2.to("#hole2", { x: '-0.2em', y: '-0.2em', duration: 0.2, filter:'blur(7px)'}, "+=0.2" );
      tl2.to("#hole2", { x: '-0.7em', y: '-0.7em', duration: 0.2, filter:'blur(1px)'});
      return tl2;
    }

    function part3() {
      var tl3 = gsap.timeline({
        repeat: -1,
        repeatDelay: 1
      });
      tl3.set("#hole3", {x:'-0.95em', y:'-0.95em'});
      tl3.to("#hole3", { x: '-1.45em', y: '-1.45em', duration: 0.2});
      tl3.to("#hole3", { x: '-1.95em', y: '-1.95em', duration: 0.2});
      tl3.to("#hole3", { x: '-0.95em', y: '-0.95em', duration: 0.2}, "+=0.4" );
      return tl3;
    }

    function part4() {
      var tl4 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8
      });
      tl4.set("#hole4", {x:'-1.2em', y:'-1.2em', filter:'blur(1px)'});
      tl4.to("#hole4", { x: '-1.7em', y: '-1.7em', duration: 0.2});
      tl4.to("#hole4", { x: '-2.2em', y: '-2.2em', duration: 0.2, filter:'blur(1px)'});
      tl4.to("#hole4", { x: '-1.95em', y: '-1.95em', duration: 0.2, filter:'blur(4px)'});
      tl4.to("#hole4", { x: '-0.7em', y: '-0.7em', duration: 0.2, filter:'blur(7px)'}, "+=0.2" );
      tl4.to("#hole4", { x: '-1.2em', y: '-1.2em', duration: 0.2, filter:'blur(1px)'});
      return tl4;
    }

    function part5() {
      var tl5 = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8
      });
      tl5.set("#hole5", {x:'-1.4em', y:'-1.4em'});
      tl5.to("#hole5", { x: '-1.9em', y: '-1.9em', duration: 0.2});
      tl5.to("#hole5", { x: '-2.4em', y: '-2.4em', duration: 0.2});
      tl5.to("#hole5", { x: '-2.9em', y: '-2.9em', duration: 0.2});
      tl5.to("#hole5", { x: '-1.4em', y: '-1.4em', duration: 0.2}, "+=0.4" );
      return tl5;
    }*/

    /*function blurOutIn() {
      var blurOutIn = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.2
      });
      blurOutIn.set(".hole:after", {autoAlpha: 1, filter:'blur(0px)'});
      blurOutIn.to(".hole:after", {autoAlpha: 0.5, filter:'blur(3px)', duration: 0.2});
      blurOutIn.to(".hole:after", {autoAlpha: 1, filter:'blur(0px)', duration: 0.2}, "+=0.4");
      return blurOutIn
    }*/

    //var masterTimeline = gsap.timeline(/*{paused: true}*/);
    /*masterTimeline.set(".base", {transform: "rotateX(30deg) rotateZ(45deg)"});
    masterTimeline.set(".hole", {x: "-0.45em", y: "-0.45em"});
    masterTimeline.set("#hole2", {x: "-0.7em", y: "-0.7em", filter:'blur(1px)', autoAlpha: 0.7});
    masterTimeline.set("#hole3", {x: "-0.95em", y: "-0.95em"});
    masterTimeline.set("#hole4", {x: "-1.2em", y: "-1.2em", filter:'blur(1px)', autoAlpha: 0.7});
    masterTimeline.set("#hole5", {x: "-1.4em", y: "-1.4em"});
    masterTimeline
      //.add(blurOutIn())
      .add(part1())
      .add(part2(), 0)
      .add(part3(), 0)
      .add(part4(), 0)
      .add(part5(), 0);*/

    /*this.$bus.$on("tell-card-stop", () => {
      masterTimeline.pause();
    });
    this.$bus.$on("tell-card-start", () => {
      masterTimeline.play();
    });*/

    /*const button = document.querySelectorAll('.plate');

    button.forEach(button => {
      button.addEventListener('mouseenter', () => {
        masterTimeline.pause();
      });
      button.addEventListener('mouseleave', () => {
        masterTimeline.play();
      });
    })*/

      /*document.addEventListener("DOMContentLoaded", function(event) {

        // wait until external stylesheets, links, images, and other external assets are loaded in the window
        window.addEventListener("load", function(){

          masterTimeline.play()

        }, false);

      });*/
  }
}
</script>

<style scoped lang="scss">
// Animation
$dur: 2s; //switch to gsap
$timing: ease-out; //switch to gsap

// Colors
$blackHue: 200;
$blackSat: 20%;
$black1: hsl($blackHue,$blackSat,15%);
$black2: hsl($blackHue,$blackSat,20%);
$black3: hsl($blackHue,$blackSat,30%);
$black4: hsl($blackHue,$blackSat,50%);
$black4T: hsla($blackHue,$blackSat,50%,0);

$goldHue: 324;
$goldSat: 61%;
$gold1: hsl($goldHue,$goldSat,20%);
$gold2: hsl($goldHue,$goldSat,30%);
$gold3: hsl($goldHue,$goldSat,45%);
$gold4: hsl($goldHue,$goldSat,50%);
$gold5: hsl($goldHue,$goldSat,60%);
$gold5T: hsla($goldHue,$goldSat,60%,0);
$gold6: hsl($goldHue,$goldSat,80%);
$gold6T: hsla($goldHue,$goldSat,80%,0);

.base:hover > *,
.stop-class > * {
  animation-play-state:paused !important; //switch to gsap
  cursor: default;
}

.base { //very important css avoiding reflow for assuming 100% width height. see if scrollbar appears continuously. if yes reduce.
  width: 6.5em;
  height: 6.5em;
}

* {
	border: 0;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
body, .base {
	display: flex;
}
body {
	background: hsl(0,0%,85%) !important;
	font-size: calc(16px + (20 - 16) * (100vw - 320px)/(1024 - 320));
	height: 100vh;
	overflow-x: hidden;
}
.base:before, .base:after, .hole:before, .hole:after, .plate, .plate:before, .plate:after {
	position: absolute;
};
.base, .hole, .plate {
	margin: auto;
	&, &:before, &:after {
		border-radius: 50% !important;
	}
	&:before, &:after {
		content: "";
		display: block;
	}
}
.base:before, .hole {
	background:
		radial-gradient(100% 100% at bottom left,$black4,$black4T 50%),
		radial-gradient(100% 100% at bottom right,$black4,$black4T 50%),
		linear-gradient($black2,$black3) !important;
}
.base:after, .hole:before {
	background: {
    image: url('~assets/img/grey-1.jpg?original&format=webp') !important;
		color: $black1 !important;
		blend-mode: overlay;
	};
}
.base, .plate {
	&:before, &:after {
		width: 100%;
		height: 100%;
	}
	&:before {
		transform: translate(-4%,-4%); //switch to gsap
	}
	&:after {
		transform: translate(-4.5%,-4.5%); //switch to gsap
	}
}
.base {
  background:
    radial-gradient(100% 100% at bottom left,$black3,$black1 50%),
    radial-gradient(100% 100% at bottom right,$black3,$gold6T 50%),
    linear-gradient($black3,$gold4) !important;
	position: absolute;
  right: 20px; //WAS 0. IT WAS CAUSING THE PAGE TO PUSH TO THE RIGHT ON EACH ANIMATION CAUSING REPAINT
  top: 230px;
	width: 6.5em;
	height: 6.5em;
	transform: rotateX(30deg) rotateZ(45deg); //switch to gsap
	z-index: 1;
	&:after {
		background-size: 100% 100%;
		box-shadow: 0.1em 0.1em 0 $black1 inset;
	}
}
@media only screen and (max-width: 1000px) {
  .base {
    top: 16em;
  }
  @media only screen and (max-width: 873px) {
    .base {
      top: calc(20.2rem - 12vw);
    }
  }
}
.hole {
	box-shadow:
		0 0 0.1em 0.1em hsla(0,0%,0%,0.5) inset,
		0.1em 0.1em 0.2em 0.2em hsla(0,0%,0%,0.5);
	width: 70%;
	height: 70%;
	transform: translate(-0.45em,-0.45em); //switch to gsap
	z-index: 2;
	&:before, &:after {
		top: 2%;
		left: 2%;
		width: 96%;
		height: 96%;
	}
	&:before {
		background-size: 143% 143%;
		box-shadow:
			0.3em 0.3em 0.1em 0.1em hsla(0,0%,0%,0.7) inset,
			-0.1em -0.1em 0.1em 0.1em hsla(0,0%,0%,0.7) inset;
	}
	&:after {
		animation: blurOutIn $dur $timing infinite; //switch to gsap
    filter: blur(3px);
		background: hsl(0,0%,0%) !important;
	}
}
.plate {
	background-image:
		radial-gradient(8% 10% at 18% 102%,$gold6 33%, $gold6T),
		radial-gradient(16% 8% at 106% 10%,$gold6 50%, $gold6T),
		linear-gradient(45deg,$gold2 8%,$gold3 16% 43%,$gold6 46% 50%,$gold3 53% 56%,$gold2 60% 62%,$gold4 65% 87%,$gold2 92%) !important;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 65%;
	height: 65%;
	z-index: 3;
	&:before {
		background:
			radial-gradient(100% 100% at bottom left,$gold6,$gold6T 50%),
			radial-gradient(100% 100% at bottom right,$gold6,$gold6T 50%),
			linear-gradient($gold3,$gold4) !important;
      border-radius: 50% !important;
	}
	&:after {
		background: {
      image: url('~assets/svg/Logo-index.svg'); //was: !important
      color: $gold5 !important;
      blend-mode: normal;
      border-radius: 50% !important;
    };
    background-size: 42% 42%;
    background-position: center;
    background-repeat: no-repeat;
		box-shadow:
			0 0.05em 0 $gold2 inset,
			0 0 0 0.055em $gold6 inset;
	}
	&:nth-child(2) {
		//animation: jump1 $dur $timing infinite; //switch to gsap
		background-image:
			linear-gradient(45deg,$gold1 8%,$gold2 12% 30%,$gold3 50%,$gold2 70% 88%,$gold1 92%);
      border-radius: 50% !important;
	}
	&:nth-child(3), &:nth-child(4) {
		width: 50%;
		height: 50%;
	}
	&:nth-child(3), &:nth-child(5) {
		filter: blur(1px); //switch to gsap
		opacity: 0.7; //switch to gsap
		&:after {
			background: $gold1 !important;
			box-shadow: 1.5em 1.5em 0.3em $gold2 inset;
		}
	}
	&:nth-child(3) {
		//animation: jump2 $dur $timing infinite; //switch to gsap
		transform: translate(-0.7em,-0.7em); //switch to gsap
    filter: blur(4px);
		z-index: 4;
	}
	&:nth-child(4) {
		//animation: jump3 $dur $timing infinite; //switch to gsap
		transform: translate(-0.95em,-0.95em); //switch to gsap
		z-index: 5;
	}
	&:nth-child(5), &:nth-child(6) {
		width: 35%;
		height: 35%;
	}
	&:nth-child(5) {
		//animation: jump4 $dur $timing infinite; //switch to gsap
		transform: translate(-1.2em,-1.2em); //switch to gsap
    filter: blur(5px);
		z-index: 6;
	}
	&:nth-child(6) {
		//animation: jump5 $dur $timing infinite; //switch to gsap
		transform: translate(-1.4em,-1.4em); //switch to gsap
		z-index: 7;
	}
}

/* Animations */
@keyframes blurOutIn { //switch to gsap
	from, 40%, to {
		opacity: 1;
	}
	10%, 30% {
		opacity: 0.5;
	}
}
@keyframes jump1 { //switch to gsap
	from, 40%, to {
		transform: translate(-0.45em,-0.45em); //switch to gsap
	}
	10%, 30% {
		transform: translate(-0.95em,-0.95em); //switch to gsap
	}
}
@keyframes jump2 { //switch to gsap
	from, 50%, to {
		transform: translate(-0.7em,-0.7em); //switch to gsap
	}
	10% {
		transform: translate(-1.2em,-1.2em); //switch to gsap
	}
	20%, 30% {
		transform: translate(-0.95em,-0.95em); //switch to gsap
	}
	40% {
		transform: translate(-0.2em,-0.2em); //switch to gsap
	}
}
@keyframes jump3 { //switch to gsap
	from, 50%, to {
		transform: translate(-0.95em,-0.95em); //switch to gsap
	}
	10% {
		transform: translate(-1.45em,-1.45em); //switch to gsap
	}
	20%, 40% {
		transform: translate(-1.95em,-1.95em); //switch to gsap
	}
}
@keyframes jump4 { //switch to gsap
	from, 60%, to {
		transform: translate(-1.2em,-1.2em); //switch to gsap
	}
	10% {
		transform: translate(-1.7em,-1.7em); //switch to gsap
	}
	20% {
		transform: translate(-2.2em,-2.2em); //switch to gsap
	}
	30%, 40% {
		transform: translate(-1.95em,-1.95em); //switch to gsap
	}
	50% {
		transform: translate(-0.7em,-0.7em); //switch to gsap
	}
}
@keyframes jump5 { //switch to gsap
	from, 60%, to {
		transform: translate(-1.4em,-1.4em); //switch to gsap
	}
	10% {
		transform: translate(-1.9em,-1.9em); //switch to gsap
	}
	20% {
		transform: translate(-2.4em,-2.4em); //switch to gsap
	}
	30%, 50% {
		transform: translate(-2.9em,-2.9em); //switch to gsap
	}
}
</style>
