'use strict';

const config = require('../config/config');

module.exports = {

    index: function *() {
        this.state.title = '页面制作——首页';
        yield this.render('page/index');
    },

    define: function *() {
        this.state.title = '页面制作——自定义';
        yield this.render('page/define');
    }

};
