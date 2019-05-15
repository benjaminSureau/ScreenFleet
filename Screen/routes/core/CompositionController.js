const CompositionService = require('../../services/core/CompositionService');
const mongoose = require('mongoose');

function getById(req, res) {
    if (req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)) {
        CompositionService.getComposition(req.params.id)
            .then(function(composition){
                if(composition == null || typeof composition == 'undefined') {
                    return res.status(400);
                }else{
                    return res.status(200).json({composition: composition});
                }})
            .catch((error) => {
                return res.sendStatus(400).json({error:error});
            });
    }
}

module.exports = {
    getById,
};