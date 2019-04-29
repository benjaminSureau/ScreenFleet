const ResourceService = require('../../services/core/ResourceService');

function create(req, res) {
    if (req.body.multimediaLink != null && req.body.multimediaLink.length !== 0) {
        let resource = ResourceService.addResource(req.body);
        return res.status(201).send({resource:resource});
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
                return res.status(200).json({resource: resources});
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