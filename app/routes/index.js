var start = +new Date(); // log start timestamp
module.exports = function(express, controller) {
  var router = express.Router();

  /* GET home page. */
  /* format  router(method(post/get/put) / path/controller.(controller name).controller method)*/

  router.get('/', controller.main.index);
  router.get('/login', controller.login.index);
  router.post('/login', controller.login.auth);

  router.get('/register', controller.register.index);

  router.get('/dashboard', controller.dashboard.index);

  ///api
  router.get('/api', controller.api.index);
  router.post('/api/register', controller.api.setUser)

  return router;
}

var end = +new Date(); // log end timestamp
console.log(end - start)