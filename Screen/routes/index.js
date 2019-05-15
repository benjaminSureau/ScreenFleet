const express = require('express');
const router = express();
const TvController = require('./core/TvController');

router.route('/', (req, res) => {
    res.json({
        status: 'OK',
    });
});

// ------ Object controller ------

//const objectController = require('./core/objectController');

router
    .route('/TVs/')
    .put(TvController.update)
    .get(TvController.getInformations);


module.exports = router;