export default () =>
  new Promise((resolve) => {
    global.server.close(resolve)
  })
