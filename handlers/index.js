// const models = require('../models');
const service = require('../service'),
    fileService = require('../service/fileService');

// let categories = [];
// let qas = [];


// (async function() {
//     for (let i = 0; i < 5; i++) {
//         let c = new models.category({ title: '类型-' + i, sortIndex: i });
//         await service.insertCategory(c);
//         for (let j = 0; j < 5; j++) {
//             await service.insertQA(
//                 new models.qa({
//                     title: '类型' + i + '问题-' + j,
//                     content: '类型' + i + '的问题内容-' + j,
//                     categoryID: c.uuid,
//                     sortIndex: j,
//                 }));
//         }
//     }

// })();

module.exports = class {

    static async findCategories(ctx, next) {

        ctx.body = await service.findCategories({ flag: 0 }); // categories;
    }

    static async findDirections(ctx, next) {

        ctx.body = await service.findDirections({ flag: 1 }); // directions;
    }

    static async findCategoryDetail(ctx, next) {
        let p = ctx.params;
        let category = await service.findCategory({ uuid: p.id });
        ctx.body = category || {};

    }

    static async findQAsByCategory(ctx, next) {
        let p = ctx.params;
        console.log('params:%j', p);
        // let result = [];
        // qas.forEach((e) => {
        //     if (e.categoryID == p.categoryID)
        //         result.push(e);
        // })

        ctx.body = await service.findQAs({ categoryID: p.categoryID }); //  result;
    }

    static async findQADetail(ctx, next) {
        let p = ctx.params;
        // let qa = qas.find((e) => {
        //     return e.uuid == q.id;
        // });
        let qa = await service.findQA({ uuid: p.id });
        if (qa)
        // let viewCount = qa.viewCount;
            service.updateQA({ uuid: qa.uuid }, { viewCount: qa.viewCount + 1 })
        ctx.body = qa || {};
    }

    static async findQAByCount(ctx, next) {
        ctx.body = await service.findHotQA();
    }

    static async searchQAs(ctx, next) {
        let q = ctx.query;
        ctx.body = await service.searchQAs({ title: { $regex: eval("/.*" + q.wd + ".*/") } }); //  result;
    }

    static async findRelateQA(ctx, next) {
        let q = ctx.query;
        // let index = Number(q.sortIndex);
        // let res = await service.relateQA({ categoryID: q.categoryID, sortIndex: { $gt: index } });
        // if (!res) res = await service.relateQA({ categoryID: q.categoryID, sortIndex: { $gt: 0 } });
        ctx.body = await service.findQA({ uuid: q.uuid });
    }

    static async submitS(ctx, next) {
        let q = ctx.request.body;
        service.submitSuggestion({
            suggestion: q.opinion || {},
            CreateDate: q.date || {},
            CreateUser: q.name || {},
            Mobile: q.mobile || '',
            Images: q.images || [],
            errorTime: q.errortime || ''
        });
        ctx.body = {};
    }


}