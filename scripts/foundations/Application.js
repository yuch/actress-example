'use strict';

import React from 'react';
import Router from 'react-router';
import _ from 'lodash';

class Application {

  /**
   * Modules object.
   *
   * @var {object}
   */
  modules;

  /**
   * Create application instance.
   *
   * @param  {object} modules
   */
  constructor(modules) {
    this.modules = modules;
  }

  /**
   * Start the application.
   *
   * @return {void}
   */
  start() {
    this.attachModules();
  }

  /**
   * Attach modules to teh DOM.
   *
   * @return {void}
   */
  attachModules() {
    _.forEach(this.modules, (module, key) => {

      // If routes are not defined, simply render it.
      if (module.withoutRoute) {
        return this.render(module.module, key);
      }

      // If route is defined, we call Router to attach it and then render it to
      // the DOM.
      Router.run(module.module, Router.HistoryLocation, (Handler) => {
        this.render(Handler, key);
      });
    });
  }

  /**
   * Render ReactComponent.
   *
   * @param  {ReactElement} component
   * @param  {string} id
   * @return {void}
   */
  render(component, id) {
    if (document.getElementById(id)) {
      React.render(React.createElement(component), document.getElementById(id));
    }
  }

}

export default Application;
