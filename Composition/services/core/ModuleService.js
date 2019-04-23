const Module = require('../../models/core/Modules');

function addModule(params) {
    let module = new Module();
    module.type = params.type;
    module.mode = params.mode;
    module.numberOfSlides = params.numberOfSlides;
    module.splitMode = params.splitMode;
    module.nextModuleId = params.nextModuleId;
    module.save().then(function () {
        return module;
    });
}

function getAll() {
    Module.find({}, function (error, modules) {
        if(error) {
            return null;
        }
        return modules;
    });
}

module.exports = {
    addModule,
    getAll
};