import { connect } from 'react-redux';
import { setSetupAOI } from 'redux-modules/setup';

import SetupBoundaries from 'components/setup/boundaries';

function mapStateToProps(state) {
  return {
    user: state.user.data,
    setupCountry: state.setup.country,
    countries: state.countries.data,
    area: state.setup.area
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSetupArea: (area, snapshot) => {
      dispatch(setSetupAOI(area, snapshot));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupBoundaries);
