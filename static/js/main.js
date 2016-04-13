define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        router = require('./router');

    router();
    Backbone.history.start();
});
