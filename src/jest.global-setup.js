import { server } from "@tim-code/server"

export default () =>
  new Promise((resolve) => {
    global.server = server({
      routes: process.env.ROUTES_DIR,
      port: process.env.PORT || 0,
      ...JSON.parse(process.env.SERVER_OPTIONS || "{}"),
      done: () => {
        process.env.PORT = global.server.address().port
        resolve()
      },
    })
  })
