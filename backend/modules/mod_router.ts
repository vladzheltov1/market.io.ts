const { Router } = require('express');
const db = require('../api/api_database');

const router = Router();

router.get('/', (req, res) => {
    res.render('pages/main', { title: "Главная страница - Market.io", navActive: "index" });
});

router.get('/shop/:category?/:priceMin?/:priceMax?/:page?', (req, res) => {
    // Convenience
    const params = {
        category: req.params.category || "all",
        priceMin: req.params.priceMin || 0,
        priceMax: req.params.priceMax || Infinity,
        page: req.params.page || 1
    };



    res.render('pages/shop', { title: "Магазин - Market.io", navActive: "shop", params });
});

router.get('/login', (req, res) => {
    res.render('pages/login', { title: "Вход - Market.io", navActive: "user" });
});

router.get('/signup', (req, res) => {
    res.render('pages/signup', { title: "Регистрация - Market.io", navActive: "user" });
});

module.exports = router;