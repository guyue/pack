define(function (require, exports, module) {
    'use strict';

    var $ = require('jquery'),
        Hogan = require('hogan'),
        Backbone = require('backbone'),
        template = require('../tpl/toast.tpl'),
        ToastView;

    ToastView = Backbone.View.extend({
        className: 'toast',

        template: Hogan.compile(template),

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template.render(this.model.toJSON()));

            $(document.body).append(this.$el);

            if (this.timer) {
                clearTimeout(this.timer);
            }

            this.timer = setTimeout(this.remove.bind(this), 3000);
        }
    });

    module.exports = function (toastModel) {
        return new ToastView({
            model: toastModel
        });
    };
});
