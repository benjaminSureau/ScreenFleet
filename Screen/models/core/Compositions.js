const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const compositionSchema = new mongoose.Schema({
    moduleId: ObjectId
});

module.exports = mongoose.model('Compositions', compositionSchema, 'Compositions');