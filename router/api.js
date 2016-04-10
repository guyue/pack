const router = require('koa-router')();
const controller = require('../controller/api');


router.get('/goods.json', controller.goods);


module.exports = router;
