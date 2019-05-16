const Module = require('../../models/core/Modules');
const mongoose = require('mongoose');

function addModule(params) {
    return new Promise((resolve, reject) => {{
        let module = new Module();
        module.type = params.type;
        module.mode = params.mode;
        module.numberOfSlides = params.numberOfSlides;
        module.splitMode = params.splitMode;
        module.resources = params.resources;
        if(params.nextModuleId == null)
            module.nextModuleId = null;
        else
            module.nextModuleId = mongoose.Types.ObjectId(params.nextModuleId);
        module.save()
            .then((mod) => {
                resolve(mod);
            })
            .catch((error) => {
                reject(error);
            });
    }});
}

function getAll() {
    return new Promise(((resolve, reject) => {
        Module.find({}, function (error, modules) {
            if(error) {
                reject(null);
            }
            resolve({modules});
        });
    }));
}

function getModule(id){
    return new Promise(((resolve, reject) => {
        Module.findById(id, function(error, module) {
            if(error) {
                reject(null);
            }
            resolve({module});
        });
    }));
}

function updateModule(id, body){
    return new Promise(((resolve, reject) => {
        Module.findById(id)
            .then((module) => {
                if(typeof body.type != 'undefined')
                    module.type = body.type;
                if(typeof body.mode != 'undefined')
                    module.mode = body.mode;
                if(typeof body.numberOfSlides != 'undefined')
                    module.numberOfSlides = body.numberOfSlides;
                if(typeof body.splitMode != 'undefined')
                    module.splitMode = body.splitMode;
                if(typeof body.resources != 'undefined')
                    module.resources = body.resources;
                if(typeof body.nextModuleId != 'undefined') {
                    if(body.nextModuleId == null)
                        module.nextModuleId = null;
                    else {
                        module.nextModuleId = [];
                        body.nextModuleId.forEach(function(mod) {
                            module.nextModuleId.push(mongoose.Types.ObjectId(mod));
                        });
                    }
                }
                module.save()
                    .then((object) => {
                        resolve({status: 'UPDATED', module: object});
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

function removeModule(id){
    return new Promise(((resolve, reject) => {
        Module.findById(id)
            .then((module) => {
                module.deleteOne({_id: id})
                    .then((object) => {
                        resolve({status: 'DELETED', module: object});
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

function getModuleParents(id) {
    return new Promise(((resolve, reject) => {
        Module.findByNextModId(id, (err, module) => {
            if (!err) {
                resolve({module});
            } else {
                reject({status: 'KO', error: err});
            }
        })
    }));
}

module.exports = {
    addModule,
    getAll,
    getModule,
    updateModule,
    removeModule,
    getModuleParents
};
