define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        Hogan = require('hogan'),
        $ = require('jquery'),
        ProgressView;

    ProgressView = Backbone.View.extend({
        className: 'progress-bar',

        template: Hogan.compile(require('../tpl/progress.tpl')),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template.render());
            this.$el.css('width', '30%');
            $('.progress-container').html(this.$el);
        }
    });

    module.exports = function () {
        return new ProgressView();
    };
});
