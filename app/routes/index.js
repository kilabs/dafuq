var start = +new Date(); // log start timestamp
module.exports = function(express, controller) {
  var router = express.Router();

  /* GET home page. */
  /* format  router(method(post/get/put) / path/controller.(controller name).controller method)*/

  router.get('/user', controller.main.user);
  router.post('/api', controller.api.save);
  router.get('/api', controller.api.index);
  router.get('*', function(req, res) {
    res.sendfile('./public/front/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });

  return router;
}

var end = +new Date(); // log end timestamp
console.log(end - start)