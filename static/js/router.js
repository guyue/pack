define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        Router,
        router;

    Router = Backbone.Router.extend({
        routes: {
            '(/)': 'index',
            'define(/)': 'define'
        },

        index: function () {
            var view = require('./view/index');

            view();
        },

        define: function () {
            require('./view/define')();
        }
    });

    router = new Router();

    module.exports = function () {
        return router;
    };
});
