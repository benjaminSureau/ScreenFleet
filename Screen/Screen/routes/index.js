const express = require('express');
const router = express();
const TvController = require('./core/TvController');

router.get('/', (req, res) => {
    res.json({
        status: 'OK',
    });
});

// ------ Object controller ------

//const objectController = require('./core/objectController');

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