define(function (require, exports, module) {
    'use strict';

    var BaseView = require('./base'),
        Hogan = require('hogan'),
        $ = require('jquery'),
        DefineView;

    DefineView = BaseView.extend({
        template: Hogan.compile(require('../tpl/define.tpl')),

        events: {
            'click .btn-back': 'back',
            'click .btn-add': 'add'
        },

        back: function () {
            history.back();
        },

        add: function () {
            require('./form')({
                category: this.category
            });
        },

        initialize: function (options) {
            this.gc();
            this.category = options.category;
            this.render();
        },

        render: function () {
            this.$el.html(this.template.render());
            $('body').append(this.$el);
            require('./goods-list')({
                className: 'goods-list goods-list-define',
                category: this.category,
                dataType: 'goods-list-define'
            });
        }
    });

    module.exports = function (options) {
        return new DefineView(options);
    };
});
