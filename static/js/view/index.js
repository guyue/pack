define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        Hogan = require('hogan'),
        $ = require('jquery'),
        IndexView;

    IndexView = Backbone.View.extend({
        template: Hogan.compile(require('../tpl/index.tpl')),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template.render());
            $('body').append(this.$el);
            this.renderProgress();
            this.renderGoodsList();
        },

        renderProgress: function () {
            var progressViewFactory = require('./progress'),
                progressModelFactory = require('../model/progress'),
                progressModel;

            progressModel = progressModelFactory({
                value: 10
            });

            progressViewFactory({
                model: progressModel
            });

            setInterval(function () {
                var value = progressModel.get('value');
                progressModel.set('value', ++value);
            }, 1000);
        },

        renderGoodsList: function () {
            require('./goods-list')();
        }
    });

    module.exports = function () {
        return new IndexView();
    };
});
