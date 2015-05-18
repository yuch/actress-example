'use strict';

import React from 'react';
import Reflux from 'reflux';

var Item = React.createClass({
  render: function() {
    var statusClass = this.props.done ? 'done' : '';
    return <li onClick={this.props.onClick} className={statusClass}>
      {this.props.title}
    </li>
  }

});

export default Item;
