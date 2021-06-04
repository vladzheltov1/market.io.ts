// import { database } from "../database/query";
import { RouterServer } from "../helper/create_router";
/* ---Pages--- */
import { product } from "./pages/productPage";
import { searchData } from "./pages/searchPage";
import { shopPage } from "./pages/shopPage";



/* ------------------------------------------------------------------ */

// Index page
RouterServer.get('/', (req, res) => {
    const params = {
        title: "Поиск - Market.io",
        navActive: "index",
        cookies: req.cookies
    }

    res.render('pages/main', params);
});


// Profile page
RouterServer.get('/profile/:id?', (req, res) => {

    // ПЕРЕДЕЛАТЬ!!!

    // let user = {};
    // let id = req.params.id;

    // if(!id) id = req.cookies.id;

    // if(id == req.cookies.id){
    //     user = req.cookies.user;
    // }
    // else{
    //     db.getOne
    //     database.query("SELECT * FROM users WHERE 'id' = ?", [id], function(err, result, field){

    //         const resultObj = result !== undefined ? ServerUtils.JsonConvert(result[0]) : undefined;
    //         const isPermited = req.cookies.user.user_role == 2 ? true : false;

    //         res.render('pages/product-page', { 
    //             title: " - Market.io",
    //             navActive: "user",
    //             cookies: req.cookies,
    //             userinfo: resultObj,
    //             isPermited: isPermited 
    //         });
    //     });
    //     return;
    // }

    // res.render('pages/product-page', {
    //     title: req.cookies.user.user_login + " - Market.io",
    //     navActive: "user",
    //     cookies: req.cookies,
    //     userinfo: req.cookies.user,
    //     isPermited: true
    // });
});


// Single product page
RouterServer.get('/product/:id?', product);


// Shop page
RouterServer.get('/shop/:category?/:page?/:priceMin?/:priceMax?/', shopPage);


// Log in page
RouterServer.get('/login/:error?', (req, res) => {
    
    if(req.cookies.user) res.redirect("/");

    const params = {
        title: "Вход - Market.io",
        navActive: "dropdown",
        cookies: req.cookies
    }

    res.render('pages/login', params);
});


// Sign up page
RouterServer.get('/signup', (req, res) => {
    if(req.cookies.user) res.redirect("/");

    const params = {
        title: "Регистрация - Market.io",
        navActive: "dropdown",
        cookies: req.cookies 
    }

    res.render('pages/signup', params);
});


// Logout logic
RouterServer.get('/logout', (req, res) => {
    res.clearCookie("user");
    res.redirect('/');
});


// Search logic
RouterServer.get('/search/:query?', searchData);


// 404 page
RouterServer.get('/*', (req, res) => {
    res.status(404);
    res.render('pages/404', { title: "Страница не найдена - Market.io", navActive: "", cookies: req.cookies });
});

module.exports = RouterServer;