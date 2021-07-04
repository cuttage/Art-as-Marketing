<template>
  <div class="container-users">
    <p>CSS Grid Method</p>
    <div class="image-stack">
      <div class="image-stack__item image-stack__item--top">
        <img src="~/assets/img/image1.jpg" alt="">
      </div>
      <div class="image-stack__item image-stack__item--bottom">
        <img src="~/assets/img/shirt.jpg" alt="">
      </div>
    </div>
    <p>Text can go down here yabba dabba do</p>
  </div>
</template>

<style lang="scss" scoped>
// Non relevant styles
body { overflow-x: hidden }

* {
  box-sizing: border-box;
  margin: 0;
}

p {
  display: none;
  font-size: 20px;
  font-family: sans-serif;
  color: #6439a9;
}

.container-users {
  --n: 1;
  padding: 100px 30px;
  width: 100%; // fallback
	width: calc(var(--n)*100%);
  height: 100vh;
  max-width: 900px;
  overflow-y: hidden;
  transform: translate(calc(var(--i, 0)/var(--n)*(-100%)));
}

// Relevant styles
.image-stack {
  display: grid;
  position: relative; // imperative for the overlapping to work
  grid-template-columns: repeat(12, 1fr);
}

.image-stack__item--bottom {
  grid-column: 4 / -1;
  grid-row: 1;
}

.image-stack__item--top {
  grid-row: 1;
  grid-column: 1 / span 8;
  padding-top: 20%; // slightly arbitrary, keeps proportion once resized
  z-index: 1; // tells the browser to make this image on top
}

img {
  width: 100%; //fallback
  width: calc(100%/var(--n));
  user-select: none;
  pointer-events: none;
  display: block;
}
</style>
