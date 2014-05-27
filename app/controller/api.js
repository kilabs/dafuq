var async = require('async');
var vote = require('../model/vote');

exports.save = function(req, res) {
  // create a todo, information comes from AJAX request from Angular
  req.setEncoding('utf8');
  console.log(req.body.text);
  console.log(req.is('text/*'));
  console.log(req.is('json'));
  console.log('RB: ' + req.rawBody);
  console.log('B: ' + JSON.stringify(req.body));
  vote.create({
    president: req.body.text,
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