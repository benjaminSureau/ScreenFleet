const Composition = require('../../models/core/Compositions');

function addComposition() {
    let composition = new Composition();
    composition.save().then(function () {
        return composition;
    });
}

function getAll() {
    Composition.find({}, function (error, compositions) {
        if(error) {
            return null;
        }
        return compositions;
    });
}

module.exports = {
    addComposition,
    getAll
};