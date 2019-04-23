const Resource = require('../../models/core/Resources');

function addResource(params) {
    let resource = new Resource();
    resource.multimediaLink = params.body.multimediaLink;
    resource.save().then(function () {
        return resource;
    });
}

module.exports = {
    addResource
};