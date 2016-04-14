define(function (require, exports, module) {
    'use strict';

    var Base = require('./base'),
        $ = require('jquery'),
        Form;

    Form = Base.extend({
        tagName: 'form',

        template: require('../tpl/form.tpl'),

        events: {
            'submit': 'submit'
        },

        initModel: function () {
            var collection = require('../collection/goods')();
            this.model = collection.create({
                category: this.category,
                type: 2,
                isSelect: true
            }, {
                wait: true
            });
        },

        initialize: function (options) {
            var that = this;
            this.gc();
            this.category = options.category;
            this.initModel();
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            $('.define-shop').append(this.$el);
            $('.goods-list-define').addClass('form-show');
        },

        submit: function (e) {
            e.preventDefault();

            // 提交按钮点击之后在部分android手机上，软键盘不收缩
            this.$el.find('input').blur();

            var that = this,
                collection = require('../collection/goods')(),
                ToastModel = require('../model/toast'),
                toastViewFactory = require('./toast'),
                form = e.target,
                goods = this.model;

            goods.set({
                name: form.name.value,
                count: form.count.value
            });

            if (!goods.isValid()) {
                toastViewFactory(new ToastModel({
                    message: goods.validationError.message
                }));

                return;
            }

            form.querySelector('button[type=submit]').disabled = true;

            goods.on('sync', function () {
                collection.add(that.model);
                form.reset();
                form.querySelector('button[type=submit]').disabled = false;
                that.initModel();
            });

            goods.save();
            toastViewFactory(new ToastModel({
                message: '添加成功'
            }));
            $('.goods-list-define').removeClass('form-show');
            this.remove();
        }
    });

    module.exports = function (options) {
        return new Form(options);
    };
});
