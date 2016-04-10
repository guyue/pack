'use strict';

const config = require('../config/config');

module.exports = {

    index: function *() {
        this.state.title = config.title;
        yield this.render('index', {
            csrf: this.csrf,
        });
    },

};
