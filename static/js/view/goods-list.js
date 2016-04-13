define(function (require, exports, module) {
    'use strict';

    var BaseView = require('./base'),
        Hogan = require('hogan'),
        $ = require('jquery'),
        GoodsListView;

    GoodsListView = BaseView.extend({
        className: 'goods-list',

        template: Hogan.compile(require('../tpl/goods-list.tpl')),

        initialize: function () {
            this.gc();
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
