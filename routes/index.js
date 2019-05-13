var express = require('express'),
    router = express(),
    fileController = require('./core/fileController');



router.get('/', (req, res) => {
    res.json({
        status: 'OK',
    });
});

router
    .route('/upload/')
    .post(fileController.myupload.array('file',1), fileController.upload);

router
    .route('/getImage/')
    .get(fileController.getFile);

router
    .route('/getAllFiles/')
    .get(fileController.getAllFile);

module.exports = router;