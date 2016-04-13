define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        ProgressModel;

    ProgressModel = Backbone.Model.extend({
        defaults: {
            value: 0
        }
    });

    module.exports = function (options) {
        return new ProgressModel(options);
    };
});
