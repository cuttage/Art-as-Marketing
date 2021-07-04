export default function (ctx) {
  let userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent
  ctx.isMobile = /mobile/i.test(userAgent)

  if (ctx.isMobile) {
    if (ctx.route.fullPath === '/') {
      return ctx.redirect('/touch')
    } else if (ctx.route.fullPath === '/portfolio') {
      return ctx.redirect('/touchportfolio')
    } else if (ctx.route.fullPath === '/about') {
      return ctx.redirect('/touchabout')
    }
  }
}
