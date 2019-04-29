const ModuleService = require('../../services/core/ModuleService');
const mongoose = require('mongoose');

function create(req, res) {
    if (req.body.type != null && req.body.mode != null && req.body.numberOfSlides != null && req.body.splitMode != null
    && (req.body.nextModuleId == null || mongoose.Types.ObjectId.isValid(req.body.nextModuleId))) {
        let module = ModuleService.addModule(req.body);
        return res.status(201).send({module: module});
    } else {
        return res.status(400);
    }
}

function getAll(req, res) {
    ModuleService.getAll()
        .then(function (modules) {
            if (modules == null || typeof modules == 'undefined') {
                return res.status(400);
            } else {
                return res.status(200).json({module: modules});
            }
        })
        .catch((error) => {
            return res.sendStatus(400).json({error:error});
        });
}

module.exports = {
    create,
    getAll
};