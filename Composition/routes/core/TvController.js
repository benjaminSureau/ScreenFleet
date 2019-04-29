const TvService = require('../../services/core/TvService');
const mongoose = require('mongoose');

function create(req, res) {
    if (req.body.port == null && (req.body.compositionId == null || mongoose.Types.ObjectId.isValid(req.body.compositionId))) {
        let tv = TvService.addTv(req.body);
        return res.status(201).send({tv:tv});
    } else {
        return res.status(400);
    }
}

function getAll(req, res) {
    TvService.getAll()
        .then(function (tvs) {
            if (tvs == null || typeof tvs == 'undefined') {
                return res.status(400);
            } else {
                return res.status(200).json({tv: tvs});
            }
        })
        .catch((error) => {
            return res.sendStatus(400).json({error:error});
        });
}

function update(req, res) {

}

function getById(req, res) {
    if (req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)) {
        TvService.getTv(req.params.id)
            .then(function(tv){
                if(tv == null || typeof tv == 'undefined') {
                    return res.status(400);
                }else{
                    return res.status(200).json({composition: tv});
                }})
            .catch((error) => {
                return res.sendStatus(400).json({error:error});
            });
    }
}

function remove(req, res) {

}

module.exports = {
    create,
    getAll,
    update,
    getById,
    remove
};