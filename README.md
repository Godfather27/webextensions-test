# webextensions-test

## Getting Started

__Install dependencies__

```shell
  npm install
```

__Build Extensions__

install Grunt

```shell
  npm install -g grunt-cli
```

```shell
  grunt build
```

__add Extension to browser__

the built versions are in the `build` folder

`browser_actions` holds only tests for browserActions
`general` holds all APIs except for browserActions (because chrome doesn't allow browserActions and pageActions at the same time)

- [chrome](https://developer.chrome.com/extensions/getstarted#unpacked)
- [firefox](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Debugging#The_Add-on_Debugger)
- [opera](https://dev.opera.com/extensions/testing/#developer-mode)
- [edge](https://docs.microsoft.com/en-us/microsoft-edge/extensions/guides/debugging-extensions#background-script-debugging)
