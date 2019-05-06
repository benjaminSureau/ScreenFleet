const Tv = require('../../models/core/TVs');
//const axios = require('axios');
const mongoose = require('mongoose');

function addTv(params) {
    let tv = new Tv();
    tv.port = getAvailablePort();
    tv.compositionId = mongoose.Types.ObjectId(params.compositionId);
    tv.save().then(function () {
        return tv;
    });
}

function getAvailablePort() {
    /*axios({
        method:'get',
        url:'localhost:3001/tvs/newPort/',
        responseType:'Number'
    }).then (function (res) {
        return res;
    });*/
    return 3001;
}

function getAll() {
    return new Promise(((resolve, reject) => {
        Tv.find({}, function (error, tvs) {
            if(error) {
                reject(null);
            }
            resolve({tvs});
        });
    }));
}

function getTv(id){
    return new Promise(((resolve, reject) => {
        Tv.findById(id, function(error, tv) {
            if(error) {
                reject(null);
            }
            resolve({tv});
        });
    }));
}

function updateTv(id, body){
    return new Promise(((resolve, reject) => {
        Tv.findById(id)
            .then((tv) => {
                if(typeof body.port != 'undefined')
                    tv.port = body.port;
                if(typeof body.compositionId != 'undefined')
                    tv.compositionId = body.compositionId;
                tv.save()
                    .then((object) => {
                        resolve({status: 'UPDATED', tv: object})
                    })
                    .catch((error) => {
                        reject({status: 'KO', error: error})
                    });
            })
            .catch((error) => {
                reject({status: 'KO', error: error});
            })
    }));
}

function removeTv(id){
    return new Promise(((resolve, reject) => {
        Tv.findById(id)
            .then((tv) => {
                tv.deleteOne({_id: id})
                    .then((object) => {
                        resolve({status: 'DELETED', tv: object})
                    })
                    .catch((error) => {
                        reject({status: 'KO', error: error})
                    });
            })
            .catch((error) => {
                reject({status: 'KO', error: error});
            })
    }));
}

module.exports = {
    addTv,
    getAll,
    getTv,
    updateTv,
    removeTv
};