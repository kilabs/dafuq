var async = require('async');
var vote = require('../model/vote');

exports.save = function(req, res) {
  // create a todo, information comes from AJAX request from Angular
  vote.create({
    id_: '1',
  }, function(err, votes) {
    if (err)
      res.send(err);
    else
      vote.find(function(err, todos) {
        res.json(todos);
      })
  })
}
exports.index = function(req, res) {

  // use mongoose to get all todos in the database
  vote.find(function(err, todos) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)

    res.json(todos); // return all todos in JSON format
  });
}