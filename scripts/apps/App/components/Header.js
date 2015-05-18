'use strict';

import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  /**
   * List of navigation items. The key is the `to` property and value is the
   * label text.
   *
   * @type {object}
   */
  navItems = {
    App: lang.nav.wellcome,
    Counter: lang.nav.counter,
    ToDo: 'ToDo'
  };

  /**
   * Generate navigation links.
   *
   * @return {array}
   */
  generateNav() {
    var items = [];

    for (var item in this.navItems) {
      items.push(
        <li className="Header-navItem" key={item}>
          <Link className="Header-navLink" to={item}>
            {this.navItems[item]}
          </Link>
        </li>
      );
    }

    return items;
  }

  /**
   * Render the component.
   *
   * @return {Component}
   */
  render() {
    var items = this.generateNav();

    return (
      <header className="Header">
        <p className="Header-brand">Actress Example</p>
        <ul className="Header-navList">{items}</ul>
      </header>
    );
  }

}

export default Header;
