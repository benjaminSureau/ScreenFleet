const ResourceService = require('../../services/core/ResourceService');
const mongoose = require('mongoose');

async function create(req, res) {
    if (req.body.multimediaLink != null && req.body.multimediaLink.length !== 0) {
        let resource = await ResourceService.addResource(req.body);
        return res.status(201).send(resource);
    } else {
        return res.status(400);
    }
}

function getAll(req, res) {
    ResourceService.getAll()
        .then(function (resources) {
            if (resources == null || typeof resources == 'undefined') {
                return res.status(400);
            } else {
                return res.status(200).json(resources);
            }
        })
        .catch((error) => {
            return res.sendStatus(400).json(error);
        });
}

function getById(req, res) {
    if (req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)) {
        ResourceService.getResource(req.params.id)
            .then(function(resource){
                if(resource == null || typeof resource == 'undefined') {
                    return res.status(400);
                }else{
                    return res.status(200).json(resource);
                }})
            .catch((error) => {
                return res.sendStatus(400).json(error);
            });
    }
}

function update(req, res) {
    if (req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)) {
        ResourceService.updateResource(req.params.id, req.body)
            .then(function(resource){
                if(resource == null || typeof resource == 'undefined') {
                    return res.status(400);
                }else{
                    return res.status(200).json(resource);
                }
            })
            .catch((error) => {
                return res.sendStatus(400).json(error);
            });
    }
}

function remove(req, res) {
    if(req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)) {
        ResourceService.removeResource(req.params.id)
            .then(function(resource){
                if(resource == null || typeof resource == 'undefined') {
                    return res.status(400);
                }else{
                    return res.status(200).json(resource);
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