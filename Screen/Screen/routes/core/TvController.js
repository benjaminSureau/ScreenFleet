const TvService = require('../../services/core/TvService');
const mongoose = require('mongoose');

let screen;

function update(req, res){
    TvService.updateTv(req.params.id, req.body)
        .then(function(tv){
            if(tv == null || typeof tv == 'undefined') {
                return res.status(400);
            } else {
                return res.status(200).json({tv: tv});
            }
        })
        .catch((error) => {
            return res.sendStatus(400).json({error:error});
        });
}

function getInformations(req, res) {
    return res.status(200).json({tv: screen});
}

function initScreen(port) {
    TvService.initScreen(port)
        .then(function (sc) {
            if(sc != null || typeof sc != 'undefined')
                screen = sc;
        })
        .catch(() => {
            return null;
        });
}

module.exports = {
    update,
    getInformations,
    initScreen
};