import browser from "browser-env"
import fetch from "node-fetch"

const protocol = process.env.PROTOCOL || "http"
const hostname = process.env.HOSTNAME || "localhost"
const port = process.env.PORT

browser({
  url: `${protocol}://${hostname}:${port}`,
})
global.fetch = fetch
