const Module = require('../../models/core/Modules');
const ModuleService = require('../../services/core/ModuleService');


function create(req, res) {
    if (req.body.type != null && req.body.mode != null && req.body.numberOfSlides != null && req.body.splitMode != null) {
        let module = ModuleService.addModule(req);
        res.status(201).send({module: module});
    } else {
        res.status(400);
    }
}

function getAll(req, res) {

}

Module.exports = {
    create,
    getAll
};