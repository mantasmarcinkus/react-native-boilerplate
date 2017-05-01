import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ActionCreators, HomeState } from '../modules';
import Home, { Props } from '../components';

const mapStateToProps = ({ data }: { data: HomeState }) => {
  return {
    isFetching: data.isFetching,
    isFetchingApi: data.isFetchingApi,
    message: data.message,
    data: data.data
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({ ...bindActionCreators(ActionCreators, dispatch) });

// TO DO: fix second argument type
export default connect<HomeState, {}, Props>(mapStateToProps, mapDispatchToProps)(Home);