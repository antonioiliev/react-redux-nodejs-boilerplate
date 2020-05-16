import React from 'react';
import { Route } from 'react-router-dom';
import routes from '../constants/routes.json';
import DashboardPage from './DashboardPage';

const App = () => {

  return (
    <div className="App">
      <Route exact path={routes.HOME} component={DashboardPage} />
    </div>
  );
}

export default App;
