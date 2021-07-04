<!-- A Marta Fattori adaptation from Copyright (c) 2020 by Jon Kantner (https://codepen.io/jkantner/pen/bGbRQRy)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->
<template>
  <div class="base" v-bind:class="(toggleSidebar === true ? stopClass : '')">
      <div class="hole"></div>
      <div class="plate"></div>
      <div class="plate"></div>
      <div class="plate"></div>
      <div class="plate"></div>
      <div class="plate"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      stopClass: 'stop-class'
    }
  },
  computed: mapState(['toggleSidebar'])
}
</script>

<style scoped lang="scss">
// Animation
$dur: 2s;
$timing: ease-out;

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
  animation-play-state:paused !important;
  cursor: default;
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
    image: url('~assets/img/grey-1.jpg') !important;
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
		transform: translate(-4%,-4%);
	}
	&:after {
		transform: translate(-4.5%,-4.5%);
	}
}
.base {
  background:
    radial-gradient(100% 100% at bottom left,$black3,$black1 50%),
    radial-gradient(100% 100% at bottom right,$black3,$gold6T 50%),
    linear-gradient($black3,$gold4) !important;
	position: relative;
  right: 0;
	width: 6.5em;
	height: 6.5em;
	transform: rotateX(30deg) rotateZ(45deg);
	z-index: 1;
	&:after {
		background-size: 100% 100%;
		box-shadow: 0.1em 0.1em 0 $black1 inset;
	}
}
.hole {
	box-shadow:
		0 0 0.1em 0.1em hsla(0,0%,0%,0.5) inset,
		0.1em 0.1em 0.2em 0.2em hsla(0,0%,0%,0.5);
	width: 70%;
	height: 70%;
	transform: translate(-0.45em,-0.45em);
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
		animation: blurOutIn $dur $timing infinite;
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
      image: url('~assets/svg/Logo-index.svg') !important;
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
		animation: jump1 $dur $timing infinite;
		background-image:
			linear-gradient(45deg,$gold1 8%,$gold2 12% 30%,$gold3 50%,$gold2 70% 88%,$gold1 92%);
      border-radius: 50% !important;
	}
	&:nth-child(3), &:nth-child(4) {
		width: 50%;
		height: 50%;
	}
	&:nth-child(3), &:nth-child(5) {
		filter: blur(1px);
		opacity: 0.7;
		&:after {
			background: $gold1 !important;
			box-shadow: 1.5em 1.5em 0.3em $gold2 inset;
		}
	}
	&:nth-child(3) {
		animation: jump2 $dur $timing infinite;
		transform: translate(-0.7em,-0.7em);
		z-index: 4;
	}
	&:nth-child(4) {
		animation: jump3 $dur $timing infinite;
		transform: translate(-0.95em,-0.95em);
		z-index: 5;
	}
	&:nth-child(5), &:nth-child(6) {
		width: 35%;
		height: 35%;
	}
	&:nth-child(5) {
		animation: jump4 $dur $timing infinite;
		transform: translate(-1.2em,-1.2em);
		z-index: 6;
	}
	&:nth-child(6) {
		animation: jump5 $dur $timing infinite;
		transform: translate(-1.4em,-1.4em);
		z-index: 7;
	}
}

/* Animations */
@keyframes blurOutIn {
	from, 40%, to {
		filter: blur(0px);
		opacity: 1;
	}
	10%, 30% {
		filter: blur(3px);
		opacity: 0.5;
	}
}
@keyframes jump1 {
	from, 40%, to {
		transform: translate(-0.45em,-0.45em);
	}
	10%, 30% {
		transform: translate(-0.95em,-0.95em);
	}
}
@keyframes jump2 {
	from, 50%, to {
		filter: blur(1px);
		transform: translate(-0.7em,-0.7em);
	}
	10% {
		filter: blur(1px);
		transform: translate(-1.2em,-1.2em);
	}
	20%, 30% {
		filter: blur(4px);
		transform: translate(-0.95em,-0.95em);
	}
	40% {
		filter: blur(7px);
		transform: translate(-0.2em,-0.2em);
	}
}
@keyframes jump3 {
	from, 50%, to {
		transform: translate(-0.95em,-0.95em);
	}
	10% {
		transform: translate(-1.45em,-1.45em);
	}
	20%, 40% {
		transform: translate(-1.95em,-1.95em);
	}
}
@keyframes jump4 {
	from, 60%, to {
		filter: blur(1px);
		transform: translate(-1.2em,-1.2em);
	}
	10% {
		transform: translate(-1.7em,-1.7em);
	}
	20% {
		filter: blur(1px);
		transform: translate(-2.2em,-2.2em);
	}
	30%, 40% {
		filter: blur(4px);
		transform: translate(-1.95em,-1.95em);
	}
	50% {
		filter: blur(7px);
		transform: translate(-0.7em,-0.7em);
	}
}
@keyframes jump5 {
	from, 60%, to {
		transform: translate(-1.4em,-1.4em);
	}
	10% {
		transform: translate(-1.9em,-1.9em);
	}
	20% {
		transform: translate(-2.4em,-2.4em);
	}
	30%, 50% {
		transform: translate(-2.9em,-2.9em);
	}
}
</style>
