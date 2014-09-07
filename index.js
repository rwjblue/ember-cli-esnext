'use strict';

var esNext = require('broccoli-esnext');

module.exports = {
  name: 'ember-cli-esnext',
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.registry.registry[type] = app.registry.registry[type] || [];

    app.registry.registry[type].unshift({
      name: 'ember-cli-esnext',
      ext: 'js',
      toTree: function(tree) {
        return esNext(tree, app.options.esnextOptions);
      }
    });
  }
};
