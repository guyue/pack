define(function (require, exports, module) {
    'use strict';

    var BaseView = require('./base'),
        Hogan = require('hogan'),
        $ = require('jquery'),
        ProgressView;

    ProgressView = BaseView.extend({
        className: 'progress-bar',

        template: Hogan.compile(require('../tpl/progress.tpl')),

        initialize: function () {
            this.gc();
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
