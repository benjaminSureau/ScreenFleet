const TvService = require('../../services/core/TvService');
const ModuleController = require('./ModuleController');
const CompositionController = require('./CompositionController');
const Tv = require('../../models/core/TVs');
const TreeNode = require('treenode').TreeNode;

let screen = new Tv();

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
            if(tv != null && typeof tv != 'undefined') {
                CompositionController.getById(tv.compositionId).then(function (compo) {
                    ModuleController.getById(compo.moduleId).then(function (module) {
                        let tree = new TreeNode(module);
                        return res.status(200).json({tv: createTree(module, tree)});
                    }).catch(() => {
                        return null;
                    });
                }).catch(() => {
                    return null;
                });
            }
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

function createTree(module, tree) {
    if (module.nextModulesId == null) {
        return tree;
    }
    module.nextModulesId.forEach(function (mId) {
        let treeChild = new TreeNode(ModuleController.getById(mId));
        treeChild.addChild(createTree(ModuleController.getById(mId), treeChild));
        tree.addChild(treeChild);
    });
    return tree;
}

module.exports = {
    update,
    getInformations,
    initScreen
};