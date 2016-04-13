define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        BaseView;

    BaseView = Backbone.View.extend({
        gc: function () {
            var that = this;
            this.listenTo(Backbone.history, 'route', function () {
                that.listenTo(Backbone.history, 'route', that.remove);
            });
        },

        remove: function () {
            this.trigger('remove');
            Backbone.View.prototype.remove.apply(this, arguments);
        }
    });

    module.exports = BaseView;
});
