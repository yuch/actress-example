'use strict';

import React from 'react';
import Reflux from 'reflux';
import ToDoStore from '../Store/Store.js';
import ToDoItem from './Item.js';
import Actions from '../Actions.js';

var ItemList = React.createClass({
  mixins: [Reflux.connect(ToDoStore, "items")],

  getInitialState: function() {
    return {
      items: []
    };
  },

  render: function() {
    var items = this.state.items;
    return (
      <ul>
        {items.map(function(item) {
          var onClick = this.onClick.bind(this, item.id);
          return <ToDoItem key={item.id} title={item.title} done={item.done}
                           onClick={onClick}/>;
        }, this)}
      </ul>
    )
  },

  onClick: function(id) {
    Actions.toggleDone(id);
  }

});

export default ItemList;
