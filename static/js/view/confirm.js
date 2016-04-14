define(function (require, exports, module) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
        Confirm;

    Confirm = Backbone.View.extend({
        className: 'confirm',

        template: require('../tpl/confirm.tpl'),

        events: {
            'click button.btn-determine': 'determine',
            'click button.btn-cancel': 'cancel'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            $(document.body).append(this.$el);
        },

        determine: function () {
            var collection = require('../collection/goods')();
            this.model.destroy();
            collection.remove(this.model);
            this.remove();
        },

        cancel: function () {
            this.remove();
        }
    });

    module.exports = function (options) {
        return new Confirm(options);
    };
});
