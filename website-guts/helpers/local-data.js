var plasma = require('plasma');
var _ = require('lodash');

module.exports.register = function (Handlebars, opts, params) {
  console.log('registering helper');
  Handlebars.registerHelper('local-data', function (path, key, options) {
    if (arguments.length < 3) {
      options = key;
      key = undefined;
    }
    console.log('path', path);
    console.log('key', key);
    var ctx = this[key] || {};
    var data = plasma.load(path).data;
    console.log('data', data);
    this.page = _.extend({}, this.page, ctx, data);
    console.log('this.page', this.page);

    return options.fn(this);
  });
};