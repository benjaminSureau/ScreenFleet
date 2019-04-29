const express = require('express');
const router = express();
const CompositionController = require('./core/CompositionController');
const ModuleController = require('./core/ModuleController');
const ResourceController = require('./core/ResourceController');
const TvController = require('./core/TvController');

/*router.get('/', (req, res) => {
    res.json({
        status: 'OK',
    });
});*/

// ------ Object controller ------

//const objectController = require('./core/objectController');

router
    .route('/compositions/')
    .post(function(){
        CompositionController.create();
    })
    .get(function(){
        CompositionController.getAll();
    });

router
    .route('/modules/')
    .post(function(){
        ModuleController.create();
    })
    .get(function(){
        ModuleController.getAll();
    });

router
    .route('/resources/')
    .post(function(){
        ResourceController.create();
    })
    .get(function(){
        ResourceController.getAll();
    });

router
    .route('/TVs/')
    .post(function(){
        TvController.create();
    })
    .get(function(){
        TvController.getAll();
    });

