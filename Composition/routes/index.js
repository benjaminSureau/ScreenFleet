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
    .route('/modules/')
    .post(ModuleController.create)
    .get(ModuleController.getAll);

router
    .route('/resources/')
    .post(ResourceController.create)
    .get(ResourceController.getAll);

router
    .route('/TVs/')
    .post(TvController.create)
    .get(TvController.getAll);

module.exports = router;