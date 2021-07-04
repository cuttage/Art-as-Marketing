<template functional>
  <section class="container2p">
    <section class="container-bs">
      <section class="block_start">
        <slot></slot>
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.container-bs {
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
  /*position: absolute;
  top: calc(70vw - 8vw + 50px);*/
  margin-top: -14vw;
  min-height: 70vw;
  width: 100%;
  left: 0;
  overflow: visible;
  display: flex; // opt
  flex-wrap: wrap; // opt
  justify-content: flex-start; // opt
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
  height: 70vw;
  max-height: calc(460px * 0.7);
  display: grid;
  grid-template-columns: 30px 8.5vw 27vw 7.5vw 15vw 25vw;
  grid-template-rows: repeat(10, 1fr);
}
/* experimental feature: 460px limit in layout */
@media only screen and (min-width: 460px) {
  .block_start {
    grid-template-columns: 30px minmax(8.5%, 1fr) minmax(27%, 1fr) minmax(7.5%, 1fr)  minmax(15%, 1fr) minmax(25%, 1fr);
  }
}
</style>
