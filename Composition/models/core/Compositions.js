const mongoose = require('mongoose');
const resources = require('./Resources.js').schema;
let ObjectId = mongoose.Schema.Types.ObjectId;


const compositionSchema = new mongoose.Schema({
    dataList: [resources],
    moduleId: ObjectId
});

module.exports = mongoose.model("Compositions", compositionSchema);
