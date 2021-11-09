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

Example `test` command in `package.json`:

```json
"test": "ROUTES_DIR=backend node --no-warnings --experimental-vm-modules node_modules/.bin/jest",
```

## Environment Variables

`PORT`: the port to use for the test server; Node randomly assigns an available one by default or if PORT is 0

By using a random port, multiple test suites can run in parallel and there is no worry about asking for a port that is already in use.

`ROUTES_DIR`: the directory to provide to the server during global setup

Additionally:

`process.env.PORT` is set after the server has been started to the port used to start the server.
