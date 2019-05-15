const Composition = require('../../models/core/Compositions');

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

module.exports = {
    getComposition
};