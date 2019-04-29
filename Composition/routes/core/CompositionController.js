const CompositionService = require('../../services/core/CompositionService');

function create(req, res) {
    if (req.body.moduleId == null) {
        let composition = CompositionService.addComposition(req.body);
        return res.status(201).send({composition:composition});
    } else {
        return res.status(400);
    }
}

function getAll(req, res) {
    CompositionService.getAll()
        .then(function (compositions) {
            if (compositions == null || typeof compositions == 'undefined') {
                return res.status(400);
            } else {
                return res.status(200).json({composition: compositions});
            }
        })
        .catch((error) => {
            return res.sendStatus(400).json({error:error});
        });
}

module.exports = {
    create, getAll
};