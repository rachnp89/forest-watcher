import { connect } from 'react-redux';
import { navigateReset, navigatePop } from 'redux-modules/navigation';
import { setLoginModal, setLoginStatus } from 'redux-modules/user';
import App from 'components/app';

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
    loggedIn: state.user.loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    navigateReset: (routeName) => {
      dispatch(navigateReset(routeName));
    },
    navigateBack: () => {
      dispatch(navigatePop());
    },
    setLoginModal: (action) => {
      dispatch(setLoginModal(action));
    },
    setLoginStatus: (action) => {
      dispatch(setLoginStatus(action));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
