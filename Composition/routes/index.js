const express = require('express');
const router = express();
const CompositionController = require('./core/CompositionController');
const ModuleController = require('./core/ModuleController');
const ResourceController = require('./core/ResourceController');

router.get('/', (req, res) => {
    res.json({
        status: 'OK',
    });
});

// ------ Object controller ------

//const objectController = require('./core/objectController');

router
    .route('/compositions/')
    .post(CompositionController.create)
    .get(CompositionController.getAll);

router
    .route('/compositions/:id')
    .put(CompositionController.update)
    .delete(CompositionController.remove)
    .get(CompositionController.getById);

router
    .route('/modules/')
    .post(ModuleController.create)
    .get(ModuleController.getAll);

router
    .route('/modules/:id')
    .put(ModuleController.update)
    .delete(ModuleController.remove)
    .get(ModuleController.getById);

router
    .route('/modules/nextModule/:id')
    .get(ModuleController.getByNextModId);

router
    .route('/resources/')
    .post(ResourceController.create)
    .get(ResourceController.getAll);

router
    .route('/resources/:id')
    .put(ResourceController.update)
    .delete(ResourceController.remove)
    .get(ResourceController.getById);

module.exports = router;