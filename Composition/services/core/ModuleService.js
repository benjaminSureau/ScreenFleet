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
                if(typeof body.nextModuleId != 'undefined')
                    module.nextModuleId = body.nextModuleId;
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

module.exports = {
    addModule,
    getAll,
    getModule,
    updateModule,
    removeModule
};
