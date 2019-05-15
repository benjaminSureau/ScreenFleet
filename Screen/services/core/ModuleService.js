const Module = require('../../models/core/Modules');

function getModule(id){
    return new Promise(((resolve, reject) => {
        Module.findById(id, function(error, module) {
            if (error) {
                reject(null);
            }
            resolve({module});
        });
    }));
}

module.exports = {
    getModule
};