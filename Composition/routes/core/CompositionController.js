const Composition = require('../../models/core/Compositions');
const CompositionService = require('../../services/core/CompositionService');


function create(req, res) {
    if (req.body.moduleId == null || req.body.multimediaLink.length === 0) {
        let composition = CompositionService.addResource();
        return res.status(201).send({composition:composition});
    } else {
        return res.status(400);
    }
}

function getAll(req, res) {
    CompositionService.getAll().then(function (compositions) {
        if (compositions == null) {
            return res.status(400);
        } else {
            return res.status(200).json({composition: compositions});
        }
    });
}

module.exports = {
    create, getAll
};