const mongoose = require('mongoose');
const modules = require('./Modules.js').schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

// declare enumerations
const typeEnum = {MULTI:"multi",BASE:"base"};
const modeEnum = {SPLIT_VIEW:"split_view", SLIDE_VIEW:"slide_view", VIDEO:"video", FLUX_VIDEO:"flux_video", PICTURE:"picture"};
const splitModeEnum = {HORIZONTAL:"horizontal", VERTICAL:"vertical"};

const moduleSchema = new mongoose.Schema({
    type: typeEnum,
    mode: modeEnum,
    numberOfSlides: String,
    splitMode: splitModeEnum,
    nextModuleId: ObjectId
});

modules.exports = mongoose.model("Modules", moduleSchema);
