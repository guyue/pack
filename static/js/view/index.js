define(function (require, exports, module) {
    'use strict';

    var BaseView = require('./base'),
        Hogan = require('hogan'),
        $ = require('jquery'),
        IndexView;

    IndexView = BaseView.extend({
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
            this.gc();

            this.category = options.category;

            this.render();
        },

        render: function () {
            var data = {
                nav: [{
                    category: 0,
                    title: '待产妈妈',
                    isCurrent: this.category === 0
                }, {
                    category: 1,
                    title: '新生宝宝',
                    isCurrent: this.category === 1
                }],
                category: this.category
            };
            this.$el.html(this.template.render(data));
            $('body').append(this.$el);
            this.renderProgress();
            this.renderGoodsList();
        },

        getProgress: function () {
            var goodsCollection = require('../collection/goods')(),
                category = this.category;

            return goodsCollection.getProgress(category, 'goods-list-left', 'goods-list-done');
        },

        renderProgress: function () {
            var progressViewFactory = require('./progress'),
                progressModelFactory = require('../model/progress'),
                goodsCollection = require('../collection/goods')(),
                progressModel;

            progressModel = progressModelFactory({
                value: this.getProgress()
            });

            progressViewFactory({
                model: progressModel
            });

            progressModel.listenTo(goodsCollection, 'sync', function () {
                progressModel.set('value', this.getProgress());
            }.bind(this));
        },

        renderGoodsList: function () {
            require('./goods-list')({
                category: this.category,
                dataType: 'goods-list-left',
                title: '未完成'
            });
            require('./goods-list')({
                className: 'goods-list goods-list-done',
                category: this.category,
                dataType: 'goods-list-done',
                title: '已完成'
            });
        }
    });

    module.exports = function (options) {
        return new IndexView(options);
    };
});
