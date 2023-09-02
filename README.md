___
___
# !!!!NOT PRODUCTION READY!!!!
- I started working on this project because because `gstreamer` is broken for `tauri` on `steamos` but `chrome`, `firefox` and other prebuilt browser work fine.
___
___

# lite

A lightweight framework for running web apps on the desktop.

## Usage

Install the package:

```
npm install nanofuxion/lite
```

The package exposes two commands - `lite dev` and `lite run`. 

`lite dev` will start the development server specified in the config. 

`lite run` will serve the static assets and open the browser.

## Config

lite requires a `lite.config.json` file at the root of the project. 

See [config schema](scheme.json) for details.

A sample config is shown below:

```json
{
  "name": "myapp",
  "app": { 
    "devServer": "npm run my_framework_dev_server",
    "devUri": "http://localhost:3000",
    "dist": "dist"
  },
  "browser": {
    "name": "firefox"
  },
  "cmds": {
    "bins": []  
  }
}
```

## Compiling

Coming soon*


## TODOS:

- Add linuxdeploy app image script
- write browser finder to fine compatible chromium/Firefox based browser to launch from.
- Add support for `macOS` and `windows` via Os specific browser finder scripts.


## License

MIT