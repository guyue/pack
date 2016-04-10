const router = require('koa-router')();
const controller = require('../controller/app');


router.get('/', controller.index);


module.exports = router;
