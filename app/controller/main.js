var async = require('async');

exports.main = function(req, res) {
  res.render('index', {
    title: 'Express'
  });
}