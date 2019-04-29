const Resource = require('../../models/core/Resources');

function addResource(params) {
    let resource = new Resource();
    resource.multimediaLink = params.multimediaLink;
    resource.save().then(function () {
        return resource;
    });
}

function getAll() {
    return new Promise(((resolve, reject) => {
        Resource.find({}, function (error, resources) {
            if(error) {
                reject(null);
            }
            resolve({resources});
        });
    }));
}

module.exports = {
    addResource,
    getAll
};