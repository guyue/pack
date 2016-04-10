'use strict';

const fs = require('fs');

module.exports = {

    goods: function *() {
        this.type = 'application/json';
        this.body = fs.readFileSync('data/goods.json');
    },

};
