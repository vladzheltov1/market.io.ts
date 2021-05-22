const { Router } = require('express');
const api_db = require('../api/api_database');

const router = Router();

router.get('/', (req, res) => {
    const result = api_db.getAll("SELECT * FROM users WHERE id = 1");

    console.log("Router module file: ", result);

    res.send(result);
});

module.exports = router;