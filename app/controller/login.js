var async = require('async');

exports.index = function(req, res) {
  res.render('login/index', {
    title: 'Login'
  });
}
exports.auth = function(req, res) {
  console.log(req.body)
  res.send(req.body.email);
}