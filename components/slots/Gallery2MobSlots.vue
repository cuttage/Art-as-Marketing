<template functional>
<<<<<<< HEAD:components/slots/G2MSlo.vue
  <section class="ctp">
    <section class="isn">
      <section class="w7j">
=======
  <section class="containerp">
    <section class="container-bs">
      <section class="block_start">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/slots/Gallery2MobSlots.vue
        <slot></slot>
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
<<<<<<< HEAD:components/slots/G2MSlo.vue
.isn {
=======
.container-bs {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/slots/Gallery2MobSlots.vue
  display: grid;
  grid-template-columns: minmax(280px, 460px);
  justify-items: center;
}

@media only screen and (min-width: 525px) {
  .containerp:hover {
    transition: all 0.3s ease-out-in;
    text-shadow: none !important;
  }
}
.containerp {
  height: auto;
  margin-top: -8vw;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12.165450121654501vw 0 0 0;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .containerp {
    margin-top: 0;
    /* make 1em considering picture overflow-y */
    padding: calc(1em - 15.34px) 0 0 0;
  }
}
<<<<<<< HEAD:components/slots/G2MSlo.vue
#5ql {
  grid-area: 4/3/5/5;
}
#0zt {
  grid-area: 6/2/7/4;
}
#cs7 {
  grid-area: 8/3/9/5;
}

.w7j {
=======
#containerp1 {
  grid-area: 4/3/5/5;
}
#containerp2 {
  grid-area: 6/2/7/4;
}
#containerp3 {
  grid-area: 8/3/9/5;
}

.block_start {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/slots/Gallery2MobSlots.vue
  height: 70vw;
  max-height: calc(460px * 0.7);
  display: grid;
  grid-template-columns: 30px 8.5vw 27vw 7.5vw 15vw 25vw;
  grid-template-rows: repeat(10, 1fr);
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
<<<<<<< HEAD:components/slots/G2MSlo.vue
  .w7j {
=======
  .block_start {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step:components/slots/Gallery2MobSlots.vue
    grid-template-columns: 30px minmax(8.5%, 1fr) minmax(27%, 1fr) minmax(7.5%, 1fr)  minmax(15%, 1fr) minmax(25%, 1fr);
    justify-items: center;
  }
}
</style>
