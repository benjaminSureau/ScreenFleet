const Resource = require('../../models/core/Resources');

function addResource(params) {
    let resource = new Resource();
    resource.multimediaLink = params.body.multimediaLink;
    resource.save().then(function () {
        return resource;
    });
}

function getAll() {
    Resource.find({}, function (error, resources) {
        if(error) {
            return null;
        }
        return resources;
    });
}

module.exports = {
    addResource,
    getAll
};