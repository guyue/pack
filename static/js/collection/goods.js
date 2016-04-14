define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone'),
        _ = require('underscore'),
        Filters,
        GoodsCollection,
        goodsCollection;

    Filters = {
        'goods-list-define': function (category) {
            return function (value) {
                if (value.category === category &&
                        value.type !== 1) {
                    return true;
                }
                return false;
            };
        },

        'goods-list-left': function (category) {
            return function (value) {
                if (value.category === category &&
                        !value.isDone &&
                        (value.type !== 0 || value.isSelect)) {
                    return true;
                }
                return false;
            };
        },

        'goods-list-done': function (category) {
            return function (value) {
                if (value.category === category &&
                        value.isDone &&
                        (value.type !== 0 || value.isSelect)) {
                    return true;
                }
                return false;
            };
        }
    };

    GoodsCollection = Backbone.Collection.extend({
        model: require('../model/goods'),

        url: '/api/goods.json',

        getData: function (category, dataType) {
            var filter = Filters[dataType](category);
            return _.filter(this.toJSON(), filter);
        },

        comparator: function (goods1, goods2) {
            if (goods1.get('timestamp') > goods2.get('timestamp')) {
                return -1;
            }
            if (goods1.get('timestamp') < goods2.get('timestamp')) {
                return 1;
            }
            return 0;
        }
    });

    module.exports = function () {
        if (!goodsCollection) {
            goodsCollection = new GoodsCollection();
            goodsCollection.fetch();
        }
        return goodsCollection;
    };
});
