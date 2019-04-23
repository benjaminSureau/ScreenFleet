const Module = require('../../models/core/Modules');
const ModuleService = require('../../services/core/ModuleService');


function create(req, res) {
    if (req.type != null && req.mode != null && req.numberOfSlides != null && res.splitMode != null) {
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