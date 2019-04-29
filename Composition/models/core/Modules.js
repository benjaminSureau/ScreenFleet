const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

// declare enumerations
const typeEnum = {MULTI:'multi',BASE:'base'};
const modeEnum = {SPLIT_VIEW:'split_view', SLIDE_VIEW:'slide_view', VIDEO:'video', FLUX_VIDEO:'flux_video', PICTURE:'picture'};
const splitModeEnum = {HORIZONTAL:'horizontal', VERTICAL:'vertical'};

const moduleSchema = new mongoose.Schema({
    type: String,
    mode: String,
    numberOfSlides: Number,
    splitMode: String,
    nextModuleId: ObjectId
});

module.exports = mongoose.model('Modules', moduleSchema);
