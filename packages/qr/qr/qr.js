const qrcode = require('qrcode')

exports.main = (args) => {
  console.log("ARGS", args)
  return qrcode.toDataURL(args.text).then(res => ({
    headers:  { 'content-type': 'text/html; charset=UTF-8' },
    body: args.img == undefined ? res : `<img src="${res}">`
  }))
}

if (process.env.TEST) exports.main({text:"hello"}).then(console.log)
