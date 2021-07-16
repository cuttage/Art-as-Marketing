<template>
  <div class="j86">
    <div class="uh0">🚧<br/>Rotate your device to view the page</div>
  </div>
</template>

<script>
export default {
  name: 'NoneMob'
}
</script>

<style lang="scss" scoped>
.j86 {
  display: none;
  visibility: hidden;
}
.uh0 {
  display: none;
  visibility: hidden;
}

/* experimental feature: 375px limit in layout */
@media only screen and (max-device-width: 290px) and (orientation: portrait),
only screen and (max-width: 368px),
only screen and (max-width: 375px) and (max-resolution: 2.88dppx), // limit until 375px excluding iPhone 12 mini
only screen and (max-width: 375px) and (-webkit-max-device-pixel-ratio: 2.88),
only screen and (max-width: 460px) and (max-resolution: 1.6687500000dppx), // limit until 460px devices with max-resolution: 1.6687500000dppx (especially galaxy note II)
only screen and (max-width: 460px) and (-webkit-max-device-pixel-ratio: 1.6687500000),
only screen and (max-device-width: 480px) and (max-resolution: 2dppx) and (orientation: landscape), // limit anything below iPhone 4s in landscape
only screen and (max-device-width: 480px) and (-webkit-max-device-pixel-ratio: 2) and (orientation: landscape) {
  .j86 {
    display: flex;
    visibility: visible;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  }
  .uh0 {
    display: flex;
    visibility: visible;
    width: auto;
    height: auto;
    text-align: center;
    align-items: center;
    font-size: 1.490250039119064rem;
    line-height: 1.2;
    font-family: 'Avenir Heavy', sans-serif;
    color: #333;
  }
}

@media only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
  .j86 {
    display: flex;
    visibility: visible;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  }
  .uh0 {
    display: flex;
    visibility: visible;
    width: auto;
    height: auto;
    text-align: center;
    align-items: center;
    font-size: 1.490250039119064rem;
    line-height: 1.2;
    font-family: 'Avenir Heavy', sans-serif;
    color: #333;
    justify-content: center;
    background: black;
  }
}
</style>
