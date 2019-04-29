const Tv = require('../../models/core/TVs');
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
            return res.sendStatus(400);
        });
}

module.exports = {
    create,
    getAll
};