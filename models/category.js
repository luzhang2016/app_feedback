const uuid = require('uuid');

class category {



    constructor(value) {
        if (!value) return;
        this.uuid = value.uuid || uuid.v4();
        this.title = value.title || '';
        this.sortIndex = value.sortIndex || 0;
        this.flag = value.flag || 0;

    }

}

module.exports = category;