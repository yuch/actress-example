'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import config from 'app/config/app';
import App from './App';
import Wellcome from './pages/Wellcome/Wellcome';
import Counter from './pages/Counter/Counter';

var routes = (
  <Route name="App" path={config.root_path} handler={App}>
    <DefaultRoute handler={Wellcome} />
    <Route name="Counter" handler={Counter} />
  </Route>
);

export default routes;
