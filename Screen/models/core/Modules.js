const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
let Resource = require('./Resources').schema;

const moduleSchema = new mongoose.Schema({
    type: String,//['MULTI', 'BASE'],
    mode: String,//['SPLIT_VIEW', 'SLIDE_VIEW', 'VIDEO', 'FLUX_VIDEO', 'PICTURE'],
    numberOfSlides: Number,
    splitMode: String,//['HORIZONTAL', 'VERTICAL'],
    resources: Resource,
    nextModulesId: [ObjectId]
});

module.exports = mongoose.model('Modules', moduleSchema, 'Modules');