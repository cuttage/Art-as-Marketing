<template>
  <div class="no-vis-text">🚧<br/>{{ dangerMessage }}</div>
</template>

<script>
export default {
  name: 'InputParentNone',
  props: ['mob'],
  computed: {
    dangerMessage() {
      return this.mob ? 'Rotate your device to view the galley' : 'Resize the window to view the page'
    }
  }
}
</script>

<style lang="scss" scoped>
.no-vis-text {
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
  .no-vis-text {
    display: flex;
    visibility: visible;
    margin-top: calc(10vw - 8vw + 50px + 2em);
    margin-bottom: 2em;
    width: 100%;
    height: 43.125vw;
    text-align: center;
    align-items: center;
    font-size: 1.490250039119064rem;
    line-height: 1.2;
    //margin: 80px 0 80px 0;
    font-family: 'Avenir Heavy', sans-serif;
    color: #333;
    //padding: 0 40px 0 40px;
  }
}

@media only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
  .no-vis-text {
    display: flex;
    visibility: visible;
    margin-top: calc(10vw - 8vw + 50px + 2em);
    margin-bottom: 2em;
    width: 100%;
    height: 43.125vw;
    text-align: center;
    align-items: center;
    font-size: 1.490250039119064rem;
    line-height: 1.2;
    //margin: 80px 0 80px 0;
    font-family: 'Avenir Heavy', sans-serif;
    color: #333;
    //padding: 0 40px 0 40px;
    justify-content: center;
    background: black;
  }
}
</style>
