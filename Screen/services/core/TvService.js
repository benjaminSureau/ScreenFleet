const Tv = require('../../models/core/TVs');

function updateTv(tv, body) {
    return new Promise(((resolve) => {
        if (typeof body.compositionId != 'undefined')
            tv.compositionId = body.compositionId;
        resolve({status: 'UPDATED', tv: tv});
    }));
}

function initScreen(port) {
    return new Promise(((resolve, reject) => {
        Tv.find({port : port}, function(error, tv) {
            if (error) {
                reject(null);
            }
            resolve({tv});
        });
    }));
}

function getInformations(port) {
    return new Promise(((resolve, reject) => {
        Tv.find({port : port}, function(error, tv) {
            if (error) {
                reject(null);
            }
            resolve({tv});
        });
    }));
}

module.exports = {
    updateTv,
    initScreen,
    getInformations
};