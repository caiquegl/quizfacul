import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './History';
import Home from '../pages/Home';
import Apresentacao from '../pages/Apresentacao';

const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/apresentacao" exact component={Apresentacao} />
    </Switch>
  </Router>
);
export default Routes;
