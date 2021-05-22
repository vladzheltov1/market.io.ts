var Router = require('express').Router;
var api_db = require('../api/api_database');
var router = Router();
router.get('/', function (req, res) {
    var result = api_db.getAll("SELECT * FROM users WHERE id = 1");
    console.log("Router module file: ", result);
    res.send(result);
});
module.exports = router;
