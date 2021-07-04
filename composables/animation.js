import { reactive, computed } from '@vue/composition-api';

const jlt = [
  { transform: 'scale(0.98) scaleX(1.022) translateY(1.02px) translateZ(0)' },
  { transform: 'scale(0.965) scaleX(1.02) translateY(1.22px) translateZ(0)', fill: 'rgba(137, 137, 137, 0.7)', offset: 0.125 },
  { transform: 'scale(0.98) scaleX(1.022) translateY(1.02px) translateZ(0)', offset: 0.25 },
  { transform: 'scale(1) scaleX(1) translateY(0px) translateZ(0)', offset: 0.5 },
  { transform: 'scale(1) scaleX(1) translateY(0px) translateZ(0)', offset: 0.625 },
  { transform: 'scale(1) scaleX(1) translateY(0px) translateZ(0)', fill: 'rgba(158, 158, 158, 1)' }
];
const tgs = {
  delay: 0,
  duration: 4000,
  iterations: 1,
  easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  fill: 'forwards'
};

const animations = reactive({
  plet: computed(() => jlt),
  ings: computed(() => tgs)
})

const jumplet = computed(() => animations.plet)
const timings = computed(() => animations.ings)

export function anis () {
  return {
    jumplet,
    timings
  }
}
