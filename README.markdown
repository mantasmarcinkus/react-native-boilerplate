## react-native-redux-typescript
Project's structure depicts [**Fractal structure**](https://github.com/davezuko/react-redux-starter-kit):evergreen_tree: of Dave Zuko's starter kit.

#### Features
- ES2015 support
- ES6 Class support
- Redux with Async actions via `redux-thunk` and console logging via `redux-logger`
- Navigator & NavigationBar
- Android support
- TSLint some rules
- Gulp build with linting and transpilation

#### Getting Started

- First steps configuring your system [https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)

- Run this command `npm install`
- To build the project run `gulp` - it will lint, build and watch for `.ts`, `.tsx` file changes

#### Running IOS

Don't know if it's working.. It should?

#### Running Android

From your command line run `react-native run-android`

#### Linting

To lint your code using `TSLint` run command `gulp tslint`

### Troubleshooting
#### UnableToResolveError: Unable to resolve module node 
If some some module is not found and Emulator says it cannot find something, try running everything in this order:
- build project with `gulp`
- run android simulator `emulator -avd <name>` (get name from: `android list avd`; if nothing is in the list configure it using *Android Studio*)
- start react-native server with `react-native run-android` (or `react-native start`)