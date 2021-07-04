<template>
  <div class="no-vis-text-cont">
    <div class="no-vis-text">🚧<br/>Resize the window to view the page</div>
  </div>
</template>

<script>
export default {
  name: 'None'
}
</script>

<style lang="scss" scoped>
.no-vis-text-cont {
  display: none;
  visibility: hidden;
}
.no-vis-text {
  display: none;
  visibility: hidden;
}
@media only screen and (max-width: 524px),
only screen and (min-width: 1441px),
only screen and (min-height: 822px),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
  .no-vis-text-cont {
    display: flex;
    visibility: visible;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  }
  .no-vis-text {
    display: flex;
    visibility: visible;
    width: auto;
    height: auto;
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
</style>
