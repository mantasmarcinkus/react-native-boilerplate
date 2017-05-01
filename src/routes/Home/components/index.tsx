import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import { HomeActionCreators, HomeState } from '../modules';

export interface Props extends HomeActionCreators, HomeState { }

export default class Home extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchData();
    this.props.fetchApiData();
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>{this.props.isFetching ? 'Loading' : this.props.message}</Text>
        <Text>{this.props.isFetchingApi ? 'Loading' : this.props.data}</Text>
      </ScrollView>
    );
  }
}
