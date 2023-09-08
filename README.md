___
___
# !!!!NOT PRODUCTION READY!!!!
- I started working on this project because because `gstreamer` is broken for `tauri` on `steamos` but `chrome`, `firefox` and other prebuilt browser work fine.
- currently only supports linux 
___
___

# lite

A lightweight framework for running web apps on the desktop.

lite ~~searches for then uses~~ already installed chromium/firefox browsers, creates a new profile specific the the web app and launches your web app with a websocket server for lite specific features such as executing commands.

## Usage

Install the package:

```
npm install nanofuxion/lite
```

The package exposes 3 commands - `lite --dev` ,  `lite` and `lite-build`. 

`lite` will serve the static assets and open the browser exactly as the compiled app would run.

`lite --dev` will start the development server specified in the config. 

`lite-build` will build an AppImage of your web app. 

## Config

lite requires a `lite.config.json` file at the root of the project. 

See [config schema](schema.json) for details.

A sample config is shown below:

```json
{
  "name": "myapp",
  "app": { 
    "devServer": "npm run my_framework_dev_server",
    "devUri": "http://localhost:3000",
    "dist": "dist",
    "icon": "./assets/icons/32.png",
    "buildCommand": "yarn build"
  },
  "browser": {
    "name": "firefox"
  },
  "cmds": {
    "bins": [
        "steam"
    ]  
  }
}
```
## Using the `lite` API

The lite package exports a `sendCmd` function that allows sending commands to the running lite app over a WebSocket connection. 

First, import the `sendCmd` function:

```js
const { sendCmd } = require('lite');
```

Then call sendCmd with the command to execute:

```js
sendCmd('my-command');
```

This will send the command over the WebSocket connection to lite.

### Reconnection:

The API has built-in reconnection logic. If the WebSocket connection is lost, it will attempt to reconnect every 5 seconds.

## Compiling

Coming soon*


## TODOS:

- ~~Add linuxdeploy app image script~~
- ~~write browser finder to find a compatible chromium/Firefox based browser to launch from.~~
- Add support for `macOS` and `windows` via Os specific browser finder scripts.


## License

MIT
