var Router = require('express').Router;
var db = require('../api/api_database');
var router = Router();
router.get('/', function (req, res) {
    var result = db.getAll("SELECT * FROM users WHERE id = ?", [1]);
    console.log("Router module file: ", result);
    res.send(result);
});
module.exports = router;
