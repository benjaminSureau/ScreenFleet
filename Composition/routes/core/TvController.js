const Tv = require('../../models/core/TVs');
const TvService = require('../../services/core/TvService');


function create(req, res) {
    if (req.port == null) {
        let tv = TvService.addTv(req);
        res.status(201).send({tv:tv});
    } else {
        res.status(400);
    }
}

function getAll(req, res) {

}

Tv.exports = {
    create,
    getAll
};