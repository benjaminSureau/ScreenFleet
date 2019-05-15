const Resource = require('../../models/core/Resources');

function addResource(params) {
    return new Promise((resolve, reject) => {{
        let resource = new Resource();
        resource.multimediaLink = params.multimediaLink;
        resource.save()
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    }});
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

function getResource(id){
    return new Promise(((resolve, reject) => {
        Resource.findById(id, function(error, resource) {
            if(error) {
                reject(null);
            }
            resolve({resource});
        });
    }));
}

function updateResource(id, body){
    return new Promise(((resolve, reject) => {
        Resource.findById(id)
            .then((resource) => {
                if(typeof body.multimediaLink != 'undefined')
                    resource.multimediaLink = body.multimediaLink;
                resource.save()
                    .then((object) => {
                        resolve({status: 'UPDATED', resource: object});
                    })
                    .catch((error) => {
                        reject({status: 'KO', error: error});
                    });
            })
            .catch((error) => {
                reject({status: 'KO', error: error});
            });
    }));
}

function removeResource(id){
    return new Promise(((resolve, reject) => {
        Resource.findById(id)
            .then((resource) => {
                resource.deleteOne({_id: id})
                    .then((object) => {
                        resolve({status: 'DELETED', resource: object});
                    })
                    .catch((error) => {
                        reject({status: 'KO', error: error});
                    });
            })
            .catch((error) => {
                reject({status: 'KO', error: error});
            });
    }));
}

module.exports = {
    addResource,
    getAll,
    getResource,
    updateResource,
    removeResource
};