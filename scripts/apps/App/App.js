'use strict';

import React from 'react';
import Router from 'react-router';
import Header from './components/Header';

var RouteHandler = Router.RouteHandler;

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    )
  }

}

export default App;
