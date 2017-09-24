const uuid = require('uuid');
class qa {
    constructor(value) {
        if (!value) return;
        this.uuid = value.uuid || uuid.v4();
        this.categoryID = value.categoryID || '';
        this.title = value.title || '';
        this.content = value.content || '';
        this.sortIndex = value.sortIndex || 0;
        this.createAt = value.createAt || Date.now();
        this.viewCount = value.viewCount || 0;

    }

}

module.exports = qa;