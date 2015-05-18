'use strict';

import React from 'react';
import ToDoList from './ItemList.js';
import Actions from '../Actions.js';

var Main = React.createClass({

  render: function() {
    return (
      <div>
        <input ref="inputText" type="text"/>
        <button onClick={this.onClick}>Add</button>

        <ToDoList/>
      </div>
    )
  },

  onClick: function() {
    var text = this.refs.inputText.getDOMNode().value;
    Actions.addItem(text);
  }

});

export default Main;
