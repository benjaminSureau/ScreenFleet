const Composition = require('../../models/core/Compositions');
const mongoose = require('mongoose');

function addComposition(params) {
    return new Promise((resolve, reject) => {{
        let composition = new Composition();
        if(params.moduleId == null)
            composition.moduleId = null;
        else
            composition.moduleId = mongoose.Types.ObjectId(params.moduleId);
        composition.save()
            .then((comp) => {
                resolve(comp);
            })
            .catch((error) => {
                reject(error);
            });
    }});
}

function getAll() {
    return new Promise(((resolve, reject) => {
        Composition.find({}, function (error, compositions) {
            if(error) {
                reject(null);
            }
            resolve({compositions});
        });
    }));
}

function getComposition(id){
    return new Promise(((resolve, reject) => {
        Composition.findById(id, function(error, composition) {
            if(error) {
                reject(null);
            }
            resolve({composition});
        });
    }));
}

function updateComposition(id, body){
    return new Promise(((resolve, reject) => {
        Composition.findById(id)
            .then((composition) => {
                if(typeof body.moduleId != 'undefined') {
                    if (body.moduleId == null)
                        composition.moduleId = null;
                    else
                        composition.moduleId = mongoose.Types.ObjectId(body.moduleId);
                }
                composition.save()
                    .then((object) => {
                        resolve({status: 'UPDATED', composition: object});
                    })
                    .catch((error) => {
                        reject({status: 'KO', error: error});
                    });
            })
            .catch((error) => {
                reject({status: 'KO', error: error});
            });
    }));
}

function removeComposition(id){
    return new Promise(((resolve, reject) => {
        Composition.findById(id)
            .then((composition) => {
                composition.deleteOne({_id: id})
                    .then((object) => {
                        resolve({status: 'DELETED', composition: object});
                    })
                    .catch((error) => {
                        reject({status: 'KO', error: error});
                    });
            })
            .catch((error) => {
                reject({status: 'KO', error: error});
            });
    }));
}

module.exports = {
    addComposition,
    getAll,
    getComposition,
    updateComposition,
    removeComposition
};