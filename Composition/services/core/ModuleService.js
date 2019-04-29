const Module = require('../../models/core/Modules');
const mongoose = require('mongoose');

function addModule(params) {
    let module = new Module();
    module.type = params.type;
    module.mode = params.mode;
    module.numberOfSlides = params.numberOfSlides;
    module.splitMode = params.splitMode;
    module.resources = params.resources;
    module.nextModuleId = mongoose.Types.ObjectId(params.nextModuleId);
    module.save().then(function () {
        return module;
    });
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

module.exports = {
    addModule,
    getAll
};
