define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        Toast;

    Toast = Backbone.Model.extend({
        defaults: {
            message: 'error!'
        }
    });

    module.exports = Toast;
});
