const Mongo = require('mongodb-promises');
const dbConfig = require('../myConfig.js').dbConfig;
class Service {
    constructor() {
        let db = Mongo.db(dbConfig.server, dbConfig.database);
        this.category = db.collection('category');
        this.qa = db.collection('qas');
        this.suggestions = db.collection('Suggestions');
        console.log('mongodb connection.');
    }

    async findCategories(selector) {
        return await this.category.find(selector, { sort: { 'sortIndex': 1 } });
    }
    async findDirections(selector) {
        return await this.category.find(selector, { sort: { 'sortIndex': 1 } });
    }

    async findCategory(selector) {
        return await this.category.findOne(selector);
    }

    async insertCategory(value) {
        return await this.category.insert(value);
    }

    async updateCategory(selector, value) {
        return await this.category.update(selector, value);
    }

    async deleteCategory(selector) {
        return await this.category.remove(selector);
    }

    // await findQAs({categoryid:'ssss'})
    async findQAs(selector) {
        return await this.qa.find(selector || {}, { sort: { 'sortIndex': 1 } });

    }

    async searchQAs(selector) {
        return await this.qa.find(selector || {}, { sort: { 'sortIndex': 1 } });
    }

    async findQA(selector) {
        return await this.qa.findOne(selector);
    }

    async insertQA(value) {
        return await this.qa.insert(value);
    }

    async updateQA(selector, action) {
        return this.qa.update(selector, action);
    }

    async deleteQA(selector) {
        return await this.qa.remove(selector);
    }

    async findHotQA(selector) {
        return await this.qa.find(selector || {}, { sort: { 'viewCount': -1 }, limit: 7 });
    }

    async relateQA(selector) {
        return await this.qa.findOne(selector);
    }

    async submitSuggestion(value) {
        return await this.suggestions.insert(value);
    }
}

module.exports = new Service();