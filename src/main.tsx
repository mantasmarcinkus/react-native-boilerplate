import * as React from 'react';
import configureStore from "./store/store";
import AppContainer from './containers/AppContainer';

const store = configureStore();

export default class Main extends React.Component<{}, {}> {
  render() {
    return <AppContainer store={store} />;
  }
}
