import { connect } from 'react-redux';
import { navigateReset } from 'redux-modules/navigation';

import Setup from 'components/setup';

function mapStateToProps(state) {
  return {
    user: state.user.data,
    countries: state.countries.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFinishSetup: () => {
      dispatch(navigateReset('Dashboard'));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);
