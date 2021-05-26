import { database } from "./database.mod";
import { RouterServer } from "./routerInit.mod";
import { FormErrors, ServerUtils } from "./serverUtils.mod";

/* ------------------------------------------------------------------ */

// Index page
RouterServer.get('/', (req, res) => {
    res.render('pages/main', { title: "Главная страница - Market.io", navActive: "index", cookies: req.cookies });
});


// Profile page
RouterServer.get('/profile/:id?', (req, res) => {

    // ПЕРЕДЕЛАТЬ!!!

    let user = {};
    let id = req.params.id;

    if(!id) id = req.cookies.id;

    if(id == req.cookies.id){
        user = req.cookies.user;
    }
    else{
        database.query("SELECT * FROM users WHERE 'id' = ?", [id], function(err, result, field){

            const resultObj = result !== undefined ? ServerUtils.JsonConvert(result[0]) : undefined;
            const isPermited = req.cookies.user.user_role == 2 ? true : false;

            res.render('pages/product-page', { 
                title: " - Market.io",
                navActive: "user",
                cookies: req.cookies,
                userinfo: resultObj,
                isPermited: isPermited 
            });
        });
        return;
    }

    res.render('pages/product-page', {
        title: req.cookies.user.user_login + " - Market.io",
        navActive: "user",
        cookies: req.cookies,
        userinfo: req.cookies.user,
        isPermited: true
    });
});


// Single product page
RouterServer.get('/product/:id?', (req, res) => {
    res.render('pages/product-page', { title: "Товар - Market.io", navActive: "shop", cookies: req.cookies });
});


// Shop page
RouterServer.get('/shop/:category?/:page?/:priceMin?/:priceMax?/', (req, res) => {
    
    const params = {
        category: req.params.category || "all",
        page:     req.params.page     || 1,
        priceMin: req.params.priceMin || 0,
        priceMax: req.params.priceMax || Infinity
    };

    res.render('pages/shop', { title: "Магазин - Market.io", navActive: "shop", params, cookies: req.cookies });
});


// Log in page
RouterServer.get('/login/:error?', (req, res) => {

    if(req.cookies.user) res.redirect("/");

    let error = "";

    if(req.params.error){
        error = FormErrors[req.params.error];
    }
    
    res.render('pages/login', { title: "Вход - Market.io", navActive: "dropdown", error: error, cookies: req.cookies});
});


// Sign up page
RouterServer.get('/signup', (req, res) => {
    if(req.cookies.user) res.redirect("/");
    res.render('pages/signup', { title: "Регистрация - Market.io", navActive: "dropdown", error: "", cookies: req.cookies });
});


// Logout logic
RouterServer.get('/logout', (req, res) => {
    res.clearCookie("user");
    res.redirect('/');
});


// Search logic
RouterServer.get('/search/:query?', (req, res) => {
    // Здесь нужно произвести поиск, пропарсить строку, и сделать 
    // редирект на страницу "Магазин" с нужными фильтрами.

    if(req.params.query){
        const query = req.params.query;

        

        return;
    }
    
    res.redirect('/shop/');
});


// 404 page
RouterServer.get('/*', (req, res) => {
    res.status(404);
    res.render('pages/404', { title: "Страница не найдена - Market.io", navActive: "", cookies: req.cookies });
});

module.exports = RouterServer;