# jest-config-server

```
npm install @tim-code/jest-config-server
```

Usage in including project:

```js
// jest.config.js
import config from "@tim-code/jest-config-server"

export default {
  ...config,
}
```

## Environment Variables

ROUTES_DIR: the directory to provide to the server during global setup

Additionally:

`process.env.PORT` is set after the server has been started to a random available port.
