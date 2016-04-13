define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        Hogan = require('hogan'),
        $ = require('jquery'),
        DefineView;

    DefineView = Backbone.View.extend({
        template: Hogan.compile(require('../tpl/define.tpl')),

        initialize: function () {
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
