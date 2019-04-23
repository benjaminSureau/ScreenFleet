const Composition = require('../../models/core/Compositions');

function addComposition() {
    let composition = new Composition();
    composition.save().then(function () {
        return composition;
    });
}

module.exports = {
    addComposition
};