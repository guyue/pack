define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        Hogan = require('hogan'),
        $ = require('jquery'),
        IndexView;

    IndexView = Backbone.View.extend({
        template: Hogan.compile(require('../tpl/index.tpl')),

        events: {
            'click .nav>li>a': 'navigate'
        },

        navigate: function (e) {
            e.preventDefault();

            var fragment = e.currentTarget.hash,
                dispatcher = require('../dispatcher'),
                options = {
                    trigger: true,
                    replace: true
                };

            dispatcher.trigger('router.navigate', fragment, options);
        },

        initialize: function (options) {
            this.render(options.category);
        },

        render: function (category) {
            var data = {
                nav: [{
                    category: 0,
                    title: '待产妈妈',
                    isCurrent: category === 0
                }, {
                    category: 1,
                    title: '新生宝宝',
                    isCurrent: category === 1
                }],
                category: category
            };
            this.$el.html(this.template.render(data));
            $('body').append(this.$el);
            this.renderProgress();
            this.renderGoodsList();
        },

        renderProgress: function () {
            var progressViewFactory = require('./progress'),
                progressModelFactory = require('../model/progress'),
                progressModel;

            progressModel = progressModelFactory({
                value: 10
            });

            progressViewFactory({
                model: progressModel
            });

            setInterval(function () {
                var value = progressModel.get('value');
                progressModel.set('value', ++value);
            }, 1000);
        },

        renderGoodsList: function () {
            require('./goods-list')();
        }
    });

    module.exports = function (options) {
        return new IndexView(options);
    };
});
