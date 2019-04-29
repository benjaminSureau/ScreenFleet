const CompositionService = require('../../services/core/CompositionService');
const mongoose = require('mongoose');

function create(req, res) {
    if (req.body.moduleId == null) {
        let composition = CompositionService.addComposition(req.body);
        return res.status(201).send({composition:composition});
    } else {
        return res.status(400);
    }
}

function getAll(req, res) {
    CompositionService.getAll()
        .then(function (compositions) {
            if (compositions == null || typeof compositions == 'undefined') {
                return res.status(400);
            } else {
                return res.status(200).json({composition: compositions});
            }
        })
        .catch((error) => {
            return res.sendStatus(400).json({error:error});
        });
}

function update(req, res) {
    //if (req.params.id != null) {
        //let composition = CompositionService.getComposition(req.params.id);
    //}
}

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

function remove(req, res) {

}

module.exports = {
    create,
    getAll,
    update,
    getById,
    remove
};