var mongoose = require('mongoose');

module.exports = mongoose.model('Version', new mongoose.Schema({
  document: { type: mongoose.Schema.Types.ObjectId, ref: 'Document' },
  timestamp: { type: Date, default: Date.now() },
  properties: { type: mongoose.Schema.Types.ObjectId, ref: 'Original' },
}));
