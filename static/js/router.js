define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        Router,
        router;

    Router = Backbone.Router.extend({
        routes: {
            '(/)': 'index'
        },

        index: function () {
            var view = require('./view/index');

            view();
        }
    });

    router = new Router();

    module.exports = function () {
        return router;
    };
});
