const TvService = require('../../services/core/TvService');
const Tv = require('../../models/core/TVs');

let screen = Tv();

function update(req, res){
    TvService.updateTv(req.params.id, req.body)
        .then(function(tv){
            if(tv == null || typeof tv == 'undefined') {
                screen = tv;
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
    TvService.getInformations(screen.port)
        .then(function (tv) {
            if(tv != null || typeof tv != 'undefined')
                return res.status(200).json({tv: tv});
        })
        .catch(() => {
            return null;
        });
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