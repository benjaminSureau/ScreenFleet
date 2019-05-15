const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ScreenFleet").then(
    () => {console.log('Database connection is successful') },
    err => { console.log('Error when connecting to the database'+ err)}
);
const Compositions = require('../models/core/Compositions.js');
const Modules = require('../models/core/Modules.js');
const Resources = require('../models/core/Resources.js');
mongoose.model('Compositions');
mongoose.model('Modules');
mongoose.model('Resources');
var assert = require('chai').assert;

describe('Array', function() {
    describe('Compositions', function() {
        describe('#CreateComposition()', function () {
            it('should save composition without error', function (done) {
                var comp = new Compositions();
                comp._id = mongoose.Types.ObjectId("6ba7fc5fc4c9250a0884161a");
                comp.moduleId = mongoose.Types.ObjectId("5cdac674f2cf6239084cc032");

                comp.save().then(() => {
                    assert.isNotNull(comp);
                    assert.isNotNull(comp._id);
                    assert.isNotNull(comp.moduleId);
                    assert.equal(comp.moduleId, "5cdac674f2cf6239084cc032");
                }).catch(done);
                done();
            });
        });
        describe('#GetCompById()', function () {
            it('should get composition using id', function (done) {
                var compId = "6ba7fc5fc4c9250a0884161a";
                Compositions.findById(compId).then((comp) => {
                    assert.isNotNull(comp);
                    assert.isNotNull(comp._id);
                    assert.isNotNull(comp.moduleId);
                    assert.equal(comp.moduleId, "5cdac674f2cf6239084cc032");
                }).catch(done);
                done();
            });
        });
        describe('#GetInexistantCompById()', function () {
            it('should get no comp using id', function (done) {
                var compId = "5cac58c6ce56dfde6163a075";
                Compositions.findById(compId).then((comp) => {
                    assert.isNull(comp);
                }).catch(done);
                done();
            });
        });
        describe('#GetAllCompositions()', function () {
            it('should get all compositions', function (done) {
                Compositions.find().then((comps) => {
                    assert.isNotNull(comps);
                    comps.forEach(function(comp){
                        assert.isNotNull(comp);
                        assert.isNotNull(comp.moduleId);
                    });
                }).catch(done);
                done();
            });
        });
        describe('#UpdateComposition()', function () {
            it('should update one composition', function (done) {
                var compId = "6ba7fc5fc4c9250a0884161a";
                Compositions.findById(compId).then((comp) => {
                    comp.moduleId = null;
                    comp.save().then( () => {
                        Compositions.findById(compId).then((comp) => {
                            assert.isNotNull(comp);
                            assert.isNull(comp.moduleId);
                        }).catch(done);
                    });
                }).catch(done);
                done();
            });
        });
        describe('#DeleteComposition()', function () {
            it('should delete one composition', function (done) {
                var compId = "6ba7fc5fc4c9250a0884161a";
                Compositions.deleteOne({_id: compId}).then( () => {
                    Compositions.findById(compId).then((comp) => {
                        assert.isNull(comp);
                        done();
                    }).catch(done);
                }).catch(done);
                done();
            });
        });
    });
    describe('Modules', function() {
        describe('#CreateModule()', function () {
            it('should save module without error', function (done) {
                var mod = new Modules();
                mod._id = mongoose.Types.ObjectId("5bc4fc5fc4c9250a0884161a");
                mod.type = "BASE";
                mod.mode = "VIDEO";
                mod.numberOfSlides = 0;
                mod.splitMode = "HORIZONTAL";
                mod.resources = null;//['https://www.google.com'];
                mod.nextModuleId = null;

                mod.save().then(() => {
                    assert.isNotNull(mod);
                    assert.isNotNull(mod._id);
                    assert.equal(mod.type, "BASE");
                    assert.equal(mod.mode, "VIDEO");
                    assert.equal(mod.numberOfSlides, 0);
                    assert.equal(mod.splitMode, "HORIZONTAL");
                    assert.isNull(mod.resources);
                }).catch(done);
                done();
            });
        });
        describe('#GetModuleById()', function () {
            it('should get module using id', function (done) {
                var modId = "5bc4fc5fc4c9250a0884161a";
                Modules.findById(modId).then((mod) => {
                    assert.isNotNull(mod);
                    assert.isNotNull(mod._id);
                    assert.equal(mod.type, "BASE");
                    assert.equal(mod.mode, "VIDEO");
                    assert.equal(mod.numberOfSlides, 0);
                    assert.equal(mod.splitMode, "HORIZONTAL");
                    assert.equal(mod.resources, ["https://www.google.com"]);
                }).catch(done);
                done();
            });
        });
        describe('#GetInexistantModuleById()', function () {
            it('should get no module using id', function (done) {
                var modId = "5cac58c6ce56dfde6163a075";
                Modules.findById(modId).then((mod) => {
                    assert.isNull(mod);
                }).catch(done);
                done();
            });
        });
        describe('#GetAllModules()', function () {
            it('should get all modules', function (done) {
                Modules.find().then((mods) => {
                    assert.isNotNull(mods);
                    mods.forEach(function(mod){
                        assert.isNotNull(mod);
                        assert.isNotNull(mod._id);
                        assert.isNotNull(mod.type);
                        assert.isNotNull(mod.mode);
                        assert.isNotNull(mod.numberOfSlides);
                        assert.isNotNull(mod.splitMode);
                    });
                }).catch(done);
                done();
            });
        });
        describe('#UpdateModule()', function () {
            it('should update one module', function (done) {
                var modId = "5bc4fc5fc4c9250a0884161a";
                Modules.findById(modId).then((mod) => {
                    mod.type = "MULTI";
                    mod.save().then( () => {
                        Modules.findById(modId).then((mod) => {
                            assert.isNotNull(mod);
                            assert.equal(mod.type, "MULTI");
                        }).catch(done);
                    });
                }).catch(done);
                done();
            });
        });
        describe('#DeleteModule()', function () {
            it('should delete one module', function (done) {
                var modId = "5bc4fc5fc4c9250a0884161a";
                Modules.deleteOne({_id: modId}).then( () => {
                    Modules.findById(modId).then((mod) => {
                        assert.isNull(mod);
                        done();
                    }).catch(done);
                }).catch(done);
                done();
            });
        });
    });
    describe('Resources', function() {
        describe('#CreateResource()', function () {
            it('should save resource without error', function (done) {
                var res = new Resources();
                res._id = mongoose.Types.ObjectId("5bc5bc5fc4c9250a0884161a");
                res.multimediaLink = "https://www.gooogle.com";

                res.save().then(() => {
                    assert.isNotNull(res);
                    assert.isNotNull(res._id);
                    assert.equal(mod.type, "https://www.google.com");
                }).catch(done);
                done();
            });
        });
        describe('#GetModuleById()', function () {
            it('should get module using id', function (done) {
                var resId = "5bc5bc5fc4c9250a0884161a";
                Resources.findById(resId).then((res) => {
                    assert.isNotNull(res);
                    assert.isNotNull(res._id);
                    assert.equal(res.multimediaLink, "https://www.google.com");
                }).catch(done);
                done();
            });
        });
        describe('#GetInexistantResourceById()', function () {
            it('should get no resource using id', function (done) {
                var resId = "5cac58c6ce56dfde6163a075";
                Resources.findById(resId).then((res) => {
                    assert.isNull(res);
                }).catch(done);
                done();
            });
        });
        describe('#GetAllResources()', function () {
            it('should get all resources', function (done) {
                Resources.find().then((rescs) => {
                    assert.isNotNull(rescs);
                    rescs.forEach(function(res){
                        assert.isNotNull(res);
                        assert.isNotNull(res._id);
                        assert.isNotNull(res.multimediaLink);
                    });
                }).catch(done);
                done();
            });
        });
        describe('#UpdateResource()', function () {
            it('should update one resource', function (done) {
                var resId = "5bc5bc5fc4c9250a0884161a";
                Resources.findById(resId).then((res) => {
                    res.multimediaLink = "https://www.stackoverflow.com";
                    res.save().then( () => {
                        Resources.findById(resId).then((res) => {
                            assert.isNotNull(res);
                            assert.equal(mod.multimediaLink, "https://www.stackoverflow.com");
                        }).catch(done);
                    });
                }).catch(done);
                done();
            });
        });
        describe('#DeleteResource()', function () {
            it('should delete one resource', function (done) {
                var resId = "5bc5bc5fc4c9250a0884161a";
                Resources.deleteOne({_id: resId}).then( () => {
                    Resources.findById(resId).then((res) => {
                        assert.isNull(res);
                        done();
                    }).catch(done);
                }).catch(done);
                done();
            });
        });
    });
});