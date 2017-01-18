import React from 'react';
import Login from 'containers/login';
import Setup from 'containers/setup';
import Home from 'components/home';
import Dashboard from 'containers/dashboard';
import Alerts from 'containers/alerts';
import Map from 'components/map';

function Routes(props) {
  const navigationRoute = props.scene.route;

  switch (navigationRoute.section) {
    case 'login':
      return <Login />;
    case 'setup':
      return <Setup />;
    case 'home':
      return <Home />;
    case 'dashboard':
      return <Dashboard />;
    case 'alerts':
      return <Alerts />;
    case 'map':
      return <Map />;
    default:
      return <Login />;
  }
}

Routes.propTypes = {
  scene: React.PropTypes.shape({
    route: React.PropTypes.string
  })
};

export default Routes;
