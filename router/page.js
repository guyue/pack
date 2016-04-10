const router = require('koa-router')();
const controller = require('../controller/page');


router.get('/index', controller.index);
router.get('/define', controller.define);


module.exports = router;
