'use strict';

const koa = require('koa');
const path = require('path');
const config = require('./config/config');


const app = koa();


const less = require('koa-less');
app.use(less(config.staticDir, {
    force: true,
}));


const staticCache = require('koa-static-cache');
app.use(staticCache(config.staticDir, {
    dynamic: true,
}));


const ejs = require('koa-ejs');
ejs(app, {
    root: config.viewDir,
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: true
});


const router = require('koa-router')();

const apiRouter = require('./router/api');
router.use('/api', apiRouter.routes());

const appRouter = require('./router/app');
router.use('/', appRouter.routes());

app.use(router.routes());


app.listen(config.port);
