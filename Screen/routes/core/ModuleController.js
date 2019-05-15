const ModuleService = require('../../services/core/ModuleService');
const mongoose = require('mongoose');

function getById(req, res) {
    if (req.params.id != null && mongoose.Types.ObjectId.isValid(req.params.id)) {
        ModuleService.getModule(req.params.id)
            .then(function(module){
                if (module == null || typeof module == 'undefined') {
                    return res.status(400);
                } else {
                    return res.status(200).json({module: module});
                }})
            .catch((error) => {
                return res.sendStatus(400).json({error:error});
            });
    }
}

module.exports = {
    getById
};