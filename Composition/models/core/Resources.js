const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    multimediaLink: [String]
});

module.exports = mongoose.model("Resources", resourceSchema);
