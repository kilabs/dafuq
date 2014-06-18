var async = require('async');

exports.index = function(req, res) {
  res.render('register/index', {
    title: 'Register'
  });
}