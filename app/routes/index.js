module.exports = function(express,controller) {
	var router = express.Router();
	
	/* GET home page. */
	
	router.get('/', controller.main.index);
	
	return router;
}