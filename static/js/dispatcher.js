define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        _ = require('underscore');

    module.exports = _.clone(Backbone.Events);
});
