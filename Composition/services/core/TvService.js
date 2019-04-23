const Tv = require('../../models/core/TVs');

function addTv(params) {
    return (new Promise((resolve, reject) => {
        if(params.test) {
            resolve({status: 'OK'});
        }
        reject({status: 'KO'});
    }));
}

module.exports = {
    addTv
};