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
    res.redirect('/api/user')

  }).error(function(e) {

    res.send({
      "error": e
    })

  })
}
exports.loginUser = function(req, res) {
  // var email = req.param('username');
  // var password = crypto.createHash('md5').update(req.param('password').toString()).digest('hex');
  // var data = {
  //   data: {
  //     email: email,
  //     password: password
  //   }
  // }
  // console.log(data);
  // db.User.login(function(data) {
  //   res.send({
  //     email: email
  //   })
  // })
}

exports.getAllUser = function(req, res) {
  db.User.findAllUser(function(user) {
    res.send({
      data: user
    });
  });
}