const Resource = require('../../models/core/Resources');

function addModule(params) {
    return (new Promise((resolve, reject) => {
        if(params.test) {
            resolve({status: 'OK'});
        }
        reject({status: 'KO'});
    }));
}

module.exports = {
    addModule
};