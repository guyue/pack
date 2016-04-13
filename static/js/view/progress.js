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
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template.render(this.model.toJSON()));
            this.$el.css('width', this.model.get('value') + '%');
            $('.progress-container').html(this.$el);
        }
    });

    module.exports = function (options) {
        return new ProgressView(options);
    };
});
