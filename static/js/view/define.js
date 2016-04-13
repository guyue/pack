define(function (require, exports, module) {
    'use strict';

    var BaseView = require('./base'),
        Hogan = require('hogan'),
        $ = require('jquery'),
        DefineView;

    DefineView = BaseView.extend({
        template: Hogan.compile(require('../tpl/define.tpl')),

        initialize: function () {
            this.gc();
            this.render();
        },

        render: function () {
            this.$el.html(this.template.render());
            $('body').append(this.$el);
        }
    });

    module.exports = function () {
        return new DefineView();
    };
});
