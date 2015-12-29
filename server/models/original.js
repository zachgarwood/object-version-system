var mongoose = require('mongoose');

module.exports = mongoose.model('Original', new mongoose.Schema({}, {strict: false}));
