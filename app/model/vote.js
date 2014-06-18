var mongoose = require('mongoose');

module.exports = mongoose.model('vote', {
  president: String,
  created: {}
});