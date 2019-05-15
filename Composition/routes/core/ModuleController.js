const ModuleService = require('../../services/core/ModuleService');
const mongoose = require('mongoose');

async function create(req, res) {
    if (req.body.type != null && req.body.mode != null && req.body.numberOfSlides != null && req.body.splitMode != null
    && (req.body.nextModuleId == null || mongoose.Types.ObjectId.isValid(req.body.nextModuleId))) {
        let module = await ModuleService.addModule(req.body);
        return res.status(201).send(module);
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
                return res.status(200).json(modules);
            }
        })
        .catch((error) => {
            return res.sendStatus(400).json(error);
        });
}

function update(req, res) {
    if (req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)
        && req.body.type != null && req.body.mode != null && req.body.splitMode != null
        && req.body.numberOfSlides != null
        && (req.body.nextModuleId == null || mongoose.Types.ObjectId.isValid(req.body.nextModuleId))) {
        ModuleService.updateModule(req.params.id, req.body)
            .then(function(module){
                if(module == null || typeof module == 'undefined') {
                    return res.status(400);
                }else{
                    return res.status(200).json(module);
                }
            })
            .catch((error) => {
                return res.sendStatus(400).json(error);
            });
    }
}

function getById(req, res) {
    if (req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)) {
        ModuleService.getModule(req.params.id)
            .then(function(module){
                if(module == null || typeof module == 'undefined') {
                    return res.status(400);
                }else{
                    return res.status(200).json(module);
                }})
            .catch((error) => {
                return res.sendStatus(400).json(error);
            });
    }
}

function remove(req, res) {
    if(req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)) {
        ModuleService.removeModule(req.params.id)
            .then(function(module){
                if(module == null || typeof module == 'undefined') {
                    return res.status(400);
                }else{
                    return res.status(200).json(module);
                }
            })
            .catch((error) => {
                return res.sendStatus(400).json(error);
            });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};