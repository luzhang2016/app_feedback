"use strict";
const router = require('koa-router')()
const handler = require('../handlers/index');

router.get('/', async(ctx, next) => {
    ctx.redirect('/dist/index.html');
})

// router.get('/string', async(ctx, next) => {
//     await ctx.render('index', {
//         title: 'Hello Koa 2!'
//     })
// })

// router.get('/api/json', async(ctx, next) => {
//     ctx.body = {
//         title: 'koa2 json'
//     }
// })


router.get('/api/categories', handler.findCategories);
router.get('/api/directions', handler.findDirections);
router.get('/api/category/:id', handler.findCategoryDetail);

router.get('/api/:categoryID/qas', handler.findQAsByCategory);
router.get('/api/qa/:id', handler.findQADetail);

router.get('/api/hot', handler.findQAByCount);
router.get('/api/search', handler.searchQAs);
router.get('/api/relate', handler.findRelateQA);
router.post('/api/submit', handler.submitS);

module.exports = router;