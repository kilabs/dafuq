var async = require('async');

exports.index = function(req, res) {
  res.render('login/index', {
    title: 'Login'
  });
}
exports.auth = function(req, res) {
  console.log(req.param('remember_me'));
  if (req.param('remember_me') == 'on') {
    res.cookie('user', o.user, {
      maxAge: 900000
    });
    res.cookie('pass', o.pass, {
      maxAge: 900000
    });
    res.send(o, 200);
    res.redirect('/dashboard');
  }
}