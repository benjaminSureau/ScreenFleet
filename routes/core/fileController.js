var aws = require('aws-sdk'),
    multer = require('multer'),
    multerS3 = require('multer-s3');

/* Setup aws with account created */
aws.config.update({
    secretAccessKey: 'CW9OCYRL0RF/FmvaBnLqFPIssQJtIQyRG51oQ4Ix',
    accessKeyId: 'AKIAIMG6YKIKEJFYIO4A',
    region: 'eu-west-3'
});

/* instance s3 */
var s3 = new aws.S3();

/* to upload a file in the bucket AWS create for screenfleet */
var myupload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'screenfleet',
        acl: 'public-read',
        key: function (req,file, cb) {
            console.log(file);
            cb(null, Date.now().toString() + file.originalname);
        }
    })
});

/* function called by the router when a user upload a file */
function upload(req, res) {
    if (req.files != null) {
        res.json({
            'fileUrl': req.files[0].location,
            'keyFile' : req.files[0].key
        });
    }
    else {

    listAllKeys();
        res.json({
            'error': '500'
        });
    }
}

/* function called by the router when a user request all files in the bucket -> this function return all files in the bucket */
function getAllFile(req, res) {
    var params = {
        Bucket: 'screenfleet',
        Delimiter: '/'
    };
    var allKeys = [];
    s3.listObjectsV2(params, function (err, data) {
        if (err) {
            res.json({
                'error': '500'
            })
        } else {
            var contents = data.Contents;
            contents.forEach(function (content) {
                allKeys.push({"fileUrl": "https://s3.eu-west-3.amazonaws.com/screenfleet/"+content.Key, "keyFile": content.Key });
            });
            res.json({
                "size" : allKeys.length,
                "content": allKeys
            })
        }
    });
}

/* in test */
function getFile(req, res, next) {
    var params = {Bucket: 'screenfleet', Key: '1557151951757VfE_html5.mp4'};
   // s3.getObject(params).forwardToExpress(res, next);
    s3.getObject(params).createReadStream().pipe(res)
    /*res.json ({
         "test" :
 }
     );*/
}

module.exports = {
    upload,
    myupload,
    getFile,
    getAllFile
};