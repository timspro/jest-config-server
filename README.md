# jest-config-server

## Environment Variables

ROUTES_DIR: the directory to provide to the server during global setup

Additionally:

PROTOCOL and HOSTNAME will be passed as the URL for the browser environment, but these aren't really necessary. These will default to `http` and `localhost` respectively.

`process.env.PORT` is set after the server has been started to a random available port.
