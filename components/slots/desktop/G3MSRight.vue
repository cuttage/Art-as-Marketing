<template functional>
<<<<<<< HEAD
  <section class="c2p">
    <section class="isn">
      <section class="w7j">
=======
  <section class="container2p">
    <section class="container-bs">
      <section class="block_start">
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
        <slot></slot>
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
<<<<<<< HEAD
.isn {
=======
.container-bs {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  display: grid;
  grid-template-columns: minmax(280px, 460px);
  justify-items: center;
}

@media only screen and (min-width: 525px) {
  .container2p:hover {
    transition: all 0.3s ease-out-in;
    text-shadow: none !important;
  }
}
.container2p {
  margin-top: -14vw;
  min-height: 70vw;
  width: 100%;
  left: 0;
  overflow: visible;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 7vw 0 0 0;
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .container2p {
    margin-top: -15.34px;
    height: auto;
    min-height: 0;
    /* make 1em considering picture overflow-y */
    padding: 0 0 0 0;
  }
}
<<<<<<< HEAD
#dcp {
  grid-area: 4/3/5/5;
}
#g7d {
  grid-area: 6/2/7/4;
}
#5ya {
  grid-area: 8/3/9/5;
}

.w7j {
=======
#container2p1 {
  grid-area: 4/3/5/5;
}
#container2p2 {
  grid-area: 6/2/7/4;
}
#container2p3 {
  grid-area: 8/3/9/5;
}

.block_start {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
  height: 70vw;
  max-height: calc(460px * 0.7);
  display: grid;
  grid-template-columns: 30px 8.5vw 27vw 7.5vw 15vw 25vw;
  grid-template-rows: repeat(10, 1fr);
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
<<<<<<< HEAD
  .w7j {
=======
  .block_start {
>>>>>>> parent of 494e274... Changed mostly class naming system, intermediate step
    grid-template-columns: 30px minmax(8.5%, 1fr) minmax(27%, 1fr) minmax(7.5%, 1fr)  minmax(15%, 1fr) minmax(25%, 1fr);
  }
}
</style>
