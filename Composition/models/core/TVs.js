const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const tvSchema = new mongoose.Schema({
    port: String,
    compositionId: ObjectId
});

module.exports = mongoose.model("tvs", tvSchema);
