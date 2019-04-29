const Composition = require('../../models/core/Compositions');

function addComposition(params) {
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

module.exports = {
    addComposition,
    getAll
};