const Resource = require('../../models/core/Resources');
const ResourceService = require('../../services/core/ResourceService');


function create(req, res) {
    if (req.body.multimediaLink != null && req.body.multimediaLink.length !== 0) {
        let resource = ResourceService.addResource(req);
        res.status(201).send({resource:resource});
    } else {
        res.status(400);
    }
}

function getAll(req, res) {

}

Resource.exports = {
    create,
    getAll
};