var async = require('async');

exports.index = function(req, res) {
  res.render('login/index', {
    title: 'Login'
  });
}
exports.auth = function(req, res) {
  res.send('Success');
}