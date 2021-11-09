import browser from "browser-env"
import fetch from "node-fetch"

// const protocol = process.env.PROTOCOL || "http"
// const hostname = process.env.HOSTNAME || "localhost"
// const port = process.env.PORT

// unclear what url is used for but appears to need to be set to something
browser({ url: `http://localhost` })
global.fetch = fetch
