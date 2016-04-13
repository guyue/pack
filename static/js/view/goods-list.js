define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        Hogan = require('hogan'),
        $ = require('jquery'),
        GoodsListView;

    GoodsListView = Backbone.View.extend({
        className: 'goods-list',

        template: Hogan.compile(require('../tpl/goods-list.tpl')),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template.render());
            $('.container').append(this.$el);
        }
    });

    module.exports = function () {
        return new GoodsListView();
    };
});
