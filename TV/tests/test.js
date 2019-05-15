const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ScreenFleet").then(
    () => {console.log('Database connection is successful') },
    err => { console.log('Error when connecting to the database'+ err)}
);
const Tvs = require('../models/core/TVs.js');
mongoose.model('tvs');
var assert = require('chai').assert;

describe('Array', function() {
    describe('Tvs', function () {
        describe('#CreateTv()', function () {
            it('should save tv without error', function (done) {
                var tv = new Tvs();
                tv._id = "6bb3fb5fc4c9250a0884161a";
                tv.port = 3053;
                tv.compositionId = mongoose.Types.ObjectId("5cdac5d3f2cf6239084cc031");

                tv.save().then(() => {
                    assert.isNotNull(tv);
                    assert.equal(tv._id, "6bb3fb5fc4c9250a0884161a");
                    assert.equal(tv.port, 3053);
                    assert.equal(tv.compositionId, "5cdac5d3f2cf6239084cc031");
                }).catch(done);
                done();
            });
        });
        describe('#GetTvById()', function () {
            it('should get tv using id', function (done) {
                var tvId = "6bb3fb5fc4c9250a0884161a";
                Tvs.findById(tvId).then((tv) => {
                    assert.isNotNull(tv);
                    assert.equal(tv._id, "6bb3fb5fc4c9250a0884161a");
                    assert.equal(tv.port, 3053);
                    assert.equal(tv.compositionId, "5cdac5d3f2cf6239084cc031");
                }).catch(done);
                done();
            });
        });
        describe('#GetInexistantTvById()', function () {
            it('should get no tv using id', function (done) {
                var tvId = "5cac58c6ce56dfde6163a075";
                Tvs.findById(tvId).then((tv) => {
                    assert.isNull(tv);
                }).catch(done);
                done();
            });
        });
        describe('#GetAllTvs()', function () {
            it('should get all tvs', function (done) {
                Tvs.find().then((tvs) => {
                    assert.isNotNull(tvs);
                    tvs.forEach(function (tv) {
                        assert.isNotNull(tv);
                        assert.isNotNull(tv.port);
                        assert.isNotNull(tv.compositionId);
                    });
                }).catch(done);
                done();
            });
        });
        describe('#UpdateTv()', function () {
            it('should update one tv', function (done) {
                var tvId = "6bb3fb5fc4c9250a0884161a";
                Tvs.findById(tvId).then((tv) => {
                    tv.port = 3054;
                    tv.save().then(() => {
                        Tvs.findById(tvId).then((tv) => {
                            assert.isNotNull(tv);
                            assert.equal(tv.port, 3054);
                        }).catch(done);
                    });
                }).catch(done);
                done();
            });
        });
        describe('#DeleteTv()', function () {
            it('should delete one tv', function (done) {
                var tvId = "6bb3fb5fc4c9250a0884161a";
                Tvs.deleteOne({_id: tvId}).then(() => {
                    Tvs.findById(tvId).then((tv) => {
                        assert.isNull(tv);
                        done();
                    }).catch(done);
                }).catch(done);
                done();
            });
        });
    });
});