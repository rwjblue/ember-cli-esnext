'use strict';

var esNext = require('broccoli-esnext');
var Regenerator = require('regenerator');
var pickFiles = require('broccoli-static-compiler');
var path = require('path');

module.exports = {
  name: 'ember-cli-esnext',
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.registry.add('js', {
      name: 'ember-cli-esnext',
      ext: 'js',
      toTree: function(tree) {
        return esNext(tree, app.options.esnextOptions);
      }
    });
  },
  treeFor: function(type) {
    if (type === 'addon') {
      return this.regeneratorRuntimeTree();
    }
  },
  regeneratorRuntimeTree: function() {
    var dirname = path.dirname(Regenerator.runtime.path)
    var file = path.basename(Regenerator.runtime.path);

    return pickFiles(dirname, {
      srcDir: '/',
      files: [file],
      destDir: '/'
    });
  }
};
