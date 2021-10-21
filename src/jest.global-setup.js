import { server } from "@tim-code/server"

export default () => {
  process.env.HOSTNAME = "localhost"
  process.env.PROTOCOL = "http"
  return new Promise((resolve) => {
    global.server = server({
      dir: process.env.CODE_DIR,
      port: 0,
      done: () => {
        process.env.PORT = global.server.address().port
        resolve()
      },
    })
  })
}
