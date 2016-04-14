define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        ToastModel;

    ToastModel = Backbone.Model.extend({
        defaults: {
            message: 'error!'
        }
    });

    module.exports = ToastModel;
});
