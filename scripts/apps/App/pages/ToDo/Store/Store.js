var Reflux = require('reflux');
var _ = require('lodash');

var Actions = require('../Actions.js');
var Item = require('../Model/Item.js');

module.exports = Reflux.createStore({

  init: function() {
    this.listenTo(Actions.addItem, this.onAddItem);
    this.listenTo(Actions.toggleDone, this.onToggleDone);

    this._items = [];
  },

  onAddItem: function(title) {
    var item = new Item();
    item.title = title;
    item.id = this._items.length;

    this._items.push(item);
    this.trigger(this._items);
  },

  onToggleDone: function(id) {
    var item = _.find(this._items, function(item) {
      return item.id === id;
    });

    item.done = ! item.done;
    this.trigger(this._items);
  }
});
