import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './History';
import Home from 'pages/Home';
import Apresentacao from 'pages/Apresentacao';
import HomeLogado from 'pages/HomeLogado';
import Random from 'pages/Random';

const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/apresentacao" exact component={Apresentacao} />
      <Route path="/homeLogado" exact component={HomeLogado} />
      <Route path="/random" exact component={Random} />
    </Switch>
  </Router>
);
export default Routes;
