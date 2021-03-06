var async = require('async');
var db = require('../model');
var crypto = require('crypto');
exports.index = function(req, res) {
  res.send({
    message: '200 OK'
  });
}
exports.setUser = function(req, res) {
  var tokens;
  db.User.create({

    username: req.param('username').toString(),
    name: req.param('name').toString(),
    token: crypto.createHash('md5').update(req.param('email').toString() + req.param('username').toString() + req.param('password').toString()).digest('hex'),
    password: crypto.createHash('md5').update(req.param('password').toString()).digest('hex'),
    email: req.param('email').toString(),

  }).success(function() {

    res.send({
      "status": "Success",
      "token": crypto.createHash('md5').update(req.param('email').toString() + req.param('username').toString() + req.param('password').toString()).digest('hex'),
    })

  }).error(function(e) {

    res.send({
      "error": e.code
    })

  })
}