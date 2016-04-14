define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        GoodsModel;

    GoodsModel = Backbone.Model.extend({
        defaults: function () {
            return {
                //id: id, 
                name: '', // string
                count: '', // string
                type: 1, // int [0, 1, 2] 0表示推荐信息，1表示默认信息，2表示自定义信息
                category: 0, // int [0, 1] 0表示待产妈妈，1表示新生宝宝
                description: '', // string
                timestamp: 0, //用于排序
                isDone: false,  // 是否已经完成
                isSelect: false  // 是否添加到首页（只针对推荐信息）
            };
        },

        initialize: function (options) {
            if (!this.get('timestamp')) {
                this.set('timestamp', (new Date()).getTime());
            }
        },

        validate: function (attrs, options) {
            if (!attrs.name || attrs.name.trim().length === 0) {
                return {
                    attrName: 'name',
                    message: '请填写名称'
                };
            }
            if (attrs.count.trim().length > 5) {
                return {
                    attrName: 'count',
                    message: '数量最多输入5个字'
                };
            }
        },

        parse: function (response, options) {
            response.category = parseInt(response.category, 10);
            response.type = parseInt(response.type, 10);
            return response;
        }
    });

    module.exports = GoodsModel;
});
