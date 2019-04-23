const Module = require('../../models/core/Modules');
const ModuleService = require('../../services/core/ModuleService');


function create(req, res) {
    if (req.body.type != null && req.body.mode != null && req.body.numberOfSlides != null && req.body.splitMode != null) {
        let module = ModuleService.addModule(req);
        return res.status(201).send({module: module});
    } else {
        return res.status(400);
    }
}

function getAll(req, res) {
    ModuleService.getAll().then(function (modules) {
        if (modules == null) {
            return res.status(400);
        } else {
            return res.status(200).json({module: modules});
        }
    });
}

Module.exports = {
    create,
    getAll
};