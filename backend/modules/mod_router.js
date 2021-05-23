var Router = require('express').Router;
var db = require('../api/api_database');
var router = Router();
router.get('/', function (req, res) {
    res.render('pages/main', { title: "Главная страница - Market.io", navActive: "index" });
});
router.get('/shop/:category?/:priceMin?/:priceMax?/:page?', function (req, res) {
    // Convenience
    var params = {
        category: req.params.category || "all",
        priceMin: req.params.priceMin || 0,
        priceMax: req.params.priceMax || Infinity,
        page: req.params.page || 1
    };
    res.render('pages/shop', { title: "Магазин - Market.io", navActive: "shop", params: params });
});
router.get('/login', function (req, res) {
    res.render('pages/login', { title: "Вход - Market.io", navActive: "user" });
});
router.get('/signup', function (req, res) {
    res.render('pages/signup', { title: "Регистрация - Market.io", navActive: "user" });
});
module.exports = router;
