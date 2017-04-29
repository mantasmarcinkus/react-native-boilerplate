import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../modules';

interface Props {
  // TODO: fix anya
  dispatch(func: any): void;
  isFetching: boolean;
  message: string;
}

class App extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }
  render() {
    const { dispatch = () => {}, isFetching = false, message = '' } = this.props;
    return (
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>{this.props.isFetching ? 'Loading' : this.props.message}</Text>
      </ScrollView>
    );
  }
}

export default connect((state) => ({
  isFetching: state.data.isFetching,
  message: state.data.message
}))(App);
