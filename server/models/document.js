var mongoose = require('mongoose');

module.exports = mongoose.model('Document', new mongoose.Schema({
  name: String,  
  versions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Version' }],
}));
