const Composition = require('../../models/core/Compositions');

function addComposition() {
    let composition = new Composition();
    composition.save().then(function () {
        return composition;
    });
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

module.exports = {
    addComposition,
    getAll,
    getComposition
};