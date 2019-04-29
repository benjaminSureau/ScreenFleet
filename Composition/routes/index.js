const express = require('express');
const router = express();
const CompositionController = require('./core/CompositionController');
const ModuleController = require('./core/ModuleController');
const ResourceController = require('./core/ResourceController');
const TvController = require('./core/TvController');

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
    .route('/resources/')
    .post(ResourceController.create)
    .get(ResourceController.getAll);

router
    .route('/resources/:id')
    .put(ResourceController.update)
    .delete(ResourceController.remove)
    .get(ResourceController.getById);

router
    .route('/TVs/')
    .post(TvController.create)
    .get(TvController.getAll);

router
    .route('/TVs/:id')
    .put(TvController.update)
    .delete(TvController.remove)
    .get(TvController.getById);

module.exports = router;