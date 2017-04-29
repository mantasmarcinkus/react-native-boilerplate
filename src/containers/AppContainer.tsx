import * as React from 'react';
import { Provider } from 'react-redux';
import { Navigator, View } from 'react-native';
import { scene } from '../layouts/scene';
import { initReducer } from '../routes/Home';
import App from '../routes/Home/containers';

// DONE
export default class AppContainer extends React.Component<{ store: any }, {}> {
  constructor(props: any) {
    super(props);
    initReducer(this.props.store);
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <Navigator
          sceneStyle={{ flex: 1 }}
          renderScene={scene}
          initialRoute={{
            component: App,
            title: 'React native app'
          }}
        />
      </Provider>
    );
  }
}
