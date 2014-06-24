var async = require('async');
var db = require('../model');
var crypto = require('crypto');


exports.index = function(req, res) {
  res.send({
    message: '200 OK'
  });
}

exports.setUser = function(req, res) {
  db.User.registerUser = ({
    username: req.param('username').toString(),
    name: req.param('name').toString(),
    token: crypto.createHash('md5').update(req.param('email').toString() + req.param('username').toString() + req.param('password').toString()).digest('hex'),
    password: crypto.createHash('md5').update(req.param('password').toString()).digest('hex'),
    email: req.param('email').toString()
  }).then(function(users) {
    res.send({
      data: users
    });
  }, next);
}
exports.getAllUser = function(req, res) {
  db.User.findAllUser(function(user) {
    res.send({
      data: user
    });
  });
}
exports.login = function(req, res, next) {
  db.User.findAllUsers({
    username: "vanbungkring",
    password: "merdeka123"
  }).then(function(users) {
    res.send({
      data: users
    });
  }, next);
}