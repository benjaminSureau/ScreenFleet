var aws = require('aws-sdk'),
    multer = require('multer'),
    multerS3 = require('multer-s3');

/* Setup aws with account created */
aws.config.update({
    secretAccessKey: 'XXX',
    accessKeyId: 'XXX',
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

function getFile(req, res, next) {
    if (!req.query.keyFile) {
        res.json ({
                "error" : 400,
                "information": "You Must send in parameter the keyFile of the file"
            }
        );
    }

    var params = {Bucket: 'screenfleet', Key: req.query.keyFile};
    console.log(s3.getObject(params).url);
    s3.headObject(params, function (err, metadata) {
        if (err && err.code === 'NotFound') {
            res.json ({
                    "error" : 500,
                    "information": "the file doesn't exist in the bucket"
                }
            );
        } else {
            s3.getObject(params).createReadStream().pipe(res);
        }
    });
}

module.exports = {
    upload,
    myupload,
    getFile,
    getAllFile
};