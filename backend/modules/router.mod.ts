import { RouterServer } from "../modules/routerInit.mod";
import { FormErrors } from "../modules/serverUtils.mod";

const db = require('../modules/database.mod');

/* ------------------------------------------------------------------ */

RouterServer.get('/', (req, res) => {
    // console.log("Cookies: ", req.cookie);
    res.render('pages/main', { title: "Главная страница - Market.io", navActive: "index" });
});

RouterServer.get('/product/:id?', (req, res) => {
    // console.log("Cookies: ", req.cookie);
    res.render('pages/product-page', { title: "Товар - Market.io", navActive: "shop" });
});

RouterServer.get('/shop/:category?/:priceMin?/:priceMax?/:page?', (req, res) => {
    const params = {
        category: req.params.category || "all",
        priceMin: req.params.priceMin || 0,
        priceMax: req.params.priceMax || Infinity,
        page: req.params.page         || 1
    };



    res.render('pages/shop', { title: "Магазин - Market.io", navActive: "shop", params });
});

RouterServer.get('/login/:error?', (req, res) => {
    let error = "";

    if(req.params.error){
        error = FormErrors[req.params.error];
    }
    
    res.render('pages/login', { title: "Вход - Market.io", navActive: "dropdown", error: error});
});

RouterServer.get('/signup', (req, res) => {
    res.render('pages/signup', { title: "Регистрация - Market.io", navActive: "dropdown", error: "" });
});

RouterServer.get('/*', (req, res) => {
    res.render('pages/404', { title: "Страница не найдена - Market.io", navActive: "" });
});

module.exports = RouterServer;