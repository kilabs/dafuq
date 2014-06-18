var async = require('async');

exports.index = function(req, res) {
  res.render('dashboard/index', {
    title: 'dashboard'
  });
}