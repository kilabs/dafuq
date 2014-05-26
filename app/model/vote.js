var mongoose = require('mongoose');

module.exports = mongoose.model('vote', {
  id_: String,
  created: {
    type: Date,
    default: Date.now
  }
});