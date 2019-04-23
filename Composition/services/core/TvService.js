const Tv = require('../../models/core/TVs');
const axios = require('axios');

function addTv() {
    let tv = new Tv();
    tv.port = getAvailablePort();
    tv.save().then(function () {
        return tv;
    });
}

function getAvailablePort() {
    axios({
        method:'get',
        url:'localhost:3001/tvs/newPort/',
        responseType:'Number'
    }).then (function (res) {
        return res;
    });
}

function getAll() {
    Tv.find({}, function (error, Tvs) {
        if(error) {
            return null;
        }
        return Tvs;
    });
}


module.exports = {
    addTv,
    getAll
};