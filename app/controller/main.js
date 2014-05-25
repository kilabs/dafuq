var async = require('async');

exports.index = function(req, res) {
  res.render('index', {
    title: 'Express'
  });
}
exports.user = function(req, res) {
  res.render('index', {
    layout: 'layout',
    title: 'user',
  })
}