import browser from "browser-env"
import fetch from "node-fetch"

browser({ url: `${process.env.PROTOCOL}://${process.env.HOSTNAME}:${process.env.PORT}` })
global.fetch = fetch
