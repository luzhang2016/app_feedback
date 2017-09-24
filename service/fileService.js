const fs = require('fs'),
    path = require('path'),
    uuid = require('uuid');
module.exports = function(values) {

    function save(base64value) {
        let promise = new Promise(function(resolve, reject) {
            let buff = Buffer.from(base64value, 'base64');
            let filePath = path.join('./public/uploads/', uuid.v4() + '.jpg');
            fs.writeFile(filePath, buff, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(filePath);

            });
        });
        return promise;
    }
    let result = [];
    values.forEach((e) => {
        save(e).then((p) => result.push(p)).catch(console.error);
    });
    return result;
    //Promise.all(value.map(e=>save(e)));



};