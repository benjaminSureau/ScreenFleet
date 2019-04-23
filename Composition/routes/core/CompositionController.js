const Composition = require('../../models/core/Compositions');
const CompositionService = require('../../services/core/CompositionService');


function create(req, res) {
    if (req.body.moduleId == null || req.body.multimediaLink.length === 0) {
        let composition = CompositionService.addResource();
        res.status(201).send({composition:composition});
    } else {
        res.status(400);
    }
}

function getAll(req, res) {

}

Composition.exports = {
    create,
    getAll
};