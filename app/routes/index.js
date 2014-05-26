module.exports = function(express, controller) {
  var router = express.Router();

  /* GET home page. */
  /* format  router(method(post/get/put) / path/controller.(controller name).controller method)*/

  router.get('/', controller.main.index);
  router.get('/user', controller.main.user);
  router.post('/api', controller.api.save);
  router.get('/api', controller.api.index);

  return router;
}