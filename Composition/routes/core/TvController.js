const Tv = require('../../models/core/TVs');
const TvService = require('../../services/core/TvService');


function create(req, res) {
    if (req.body.port == null) {
        let tv = TvService.addTv();
        return res.status(201).send({tv:tv});
    } else {
        return res.status(400);
    }
}

function getAll(req, res) {
    TvService.getAll().then(function (Tvs) {
        if (Tvs == null) {
            return res.status(400);
        } else {
            return res.status(200).json({Tv: Tvs});
        }
    });
}

Tv.exports = {
    create,
    getAll
};