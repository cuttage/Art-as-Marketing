// Copyright (c) 2021 Marta Fattori
// This code is licensed under MIT license (see LICENSE-MIT for details)
export default function (ctx) {
  ctx.userAgentData = process.server && ctx.req
    ? ctx.req.headers['sec-ch-ua']
    : navigator.userAgentData.brands

  const isCompatibleServer = (item) => ['Chromium', 'Google Chrome'].includes(item.brand)
  const isNotCompatibleClient = (item) => ctx.userAgentData.indexOf(item) == -1

  if ( process.server && ctx.userAgentData && (isNotCompatibleClient('Google Chrome') || isNotCompatibleClient('Chromium')) ) {
    return ctx.redirect('/sorry')
  } else if (process.server && !ctx.userAgentData || (!process.server && !ctx.userAgentData)) {
    return ctx.redirect('/sorry')
  } else if (!process.server && ctx.userAgentData && !ctx.userAgentData.some(isCompatibleServer)) {
    return ctx.redirect('/sorry')
  }
}
