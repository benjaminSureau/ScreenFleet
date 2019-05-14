const TvService = require('../../services/core/TvService');
const mongoose = require('mongoose');
const exec  = require('child_process');

const DEFAULT_PORT = 3001;

let ports = [];


function create(req, res) {
    if (req.body.port == null && (req.body.compositionId == null || mongoose.Types.ObjectId.isValid(req.body.compositionId))) {
        let port = DEFAULT_PORT;
        if (ports.length > 0) {
            port = ports[ports.length - 1] + 1;
        }
        let tv = TvService.addTv(req.body, port);
        ports.push(tv.port);
        exec('../Screen/npm start -- ' + tv.port);
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

function getById(req, res) {
    if (req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)) {
        TvService.getTv(req.params.id)
            .then(function(tv){
                if(tv == null || typeof tv == 'undefined') {
                    return res.status(400);
                }else{
                    return res.status(200).json({tv: tv});
                }})
            .catch((error) => {
                return res.sendStatus(400).json({error:error});
            });
    }
}

function update(req, res){
    if (req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)) {
        TvService.updateTv(req.params.id, req.body)
            .then(function(tv){
                if(tv == null || typeof tv == 'undefined') {
                    return res.status(400);
                }else{
                    return res.status(200).json({tv: tv});
                }
            })
            .catch((error) => {
                return res.sendStatus(400).json({error:error});
            });
    }
}

function remove(req, res) {
    if(req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)) {
        TvService.removeTv(req.params.id)
            .then(function(tv){
                if(tv == null || typeof tv == 'undefined') {
                    return res.status(400);
                } else{
                    return res.status(200).json({tv: tv});
                }
            })
            .catch((error) => {
                return res.sendStatus(400).json({error:error});
            });
    }
}

function getAllTvPorts() {
    TvService.getAll()
        .then(function (tvs) {
            if (tvs !== null && typeof tvs !== 'undefined') {
                tvs = (tvs['tvs']);
                for (var i = 0; i < tvs.length; i++) {
                    var tv = tvs[i];
                    ports.push(tv.port);
                }
            }
        })
        .catch(() => {
            return null;
        });
}

module.exports = {
    create,
    getAll,
    update,
    getById,
    remove,
    getAllTvPorts
};