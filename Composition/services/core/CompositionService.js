const Composition = require('../../models/core/Compositions');

function addComposition(params) {
    return (new Promise((resolve, reject) => {
        if(params.test) {
            resolve({status: 'OK'});
        }
        reject({status: 'KO'});
    }));
}

module.exports = {
    addComposition
};