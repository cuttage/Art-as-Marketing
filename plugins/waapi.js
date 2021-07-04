export default ({ app, store }) => {
  if (process.client) {
    require('web-animations-js/web-animations.min')
  }
}
