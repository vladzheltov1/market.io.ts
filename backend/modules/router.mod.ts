import { database } from "./database.mod";
import { RouterServer } from "./routerInit.mod";
import { ServerUtils } from "./serverUtils.mod";

/* ------------------------------------------------------------------ */

// Index page
RouterServer.get('/', (req, res) => {
    const params = {
        title: "Главная страница - Market.io",
        navActive: "index",
        cookies: req.cookies
    }

    res.render('pages/main', params);
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

    if(!req.params.id){
        res.redirect('/shop');
        return;
    }

    database.query("SELECT * FROM products WHERE id = ?", [req.params.id], function(err, results, fields){
        if(err){
            console.error(err);
            return;
        }

        if(!results[0]){
            res.redirect('/shop');
            return;
        }

        const product = results[0];

        database.query("SELECT * FROM reviews WHERE review_product_id = ?", [req.params.id], function(error1, reviews, field){
            if(error1){
                console.error(error1);
                return;
            }
            database.query('SELECT product_amount FROM purchases WHERE product_id = ?', [req.params.id], function(error2, amounts, fields){

                if(error2){
                    console.error(error2);
                    return;
                }

                const params = {
                    title: results[0].product_title + " - Market.io",
                    navActive: "shop",
                    product: product,
                    cookies: req.cookies,
                    reviews: [],
                    rating: 0 || "0",
                    ratingRound: 0,
                    bought: amounts.length
                }
    
                if(!reviews[0]){
                    res.render('pages/product-page', params);
                    return;
                }
    
                let sum = 0;
    
                for(let i = 0; i < reviews.length; i++){
                    sum += reviews[i].review_rate;
                }
    
                let rating = reviews.length > 0 ? sum / reviews.length : 0;
    
                params.rating = rating.toFixed(1);
                params.ratingRound = Math.round(rating);
                params.reviews = reviews;
                
                res.render('pages/product-page', params);
            });
        });

        // product.rating = "";
    });
});


// Shop page
RouterServer.get('/shop/:category?/:page?/:priceMin?/:priceMax?/', (req, res) => {
    
    const searchParams = {
        category: req.params.category || "all",
        page:     req.params.page     || 1,
        priceMin: req.params.priceMin || 0,
        priceMax: req.params.priceMax || Infinity
    };

    const params = {
        title: "Магазин - Market.io",
        navActive: "shop",
        searchParams: searchParams,
        cookies: req.cookies
    }

    res.render('pages/shop', params);
});


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


// Search results page
// RouterServer.get('/search/:isError/:', (req, res) => {
//     res.clearCookie("user");
//     res.redirect('/');
// });


// Search logic
RouterServer.get('/search/:query?', (req, res) => {
    // Здесь нужно произвести поиск, пропарсить строку, и сделать 
    // редирект на страницу "Магазин" с нужными фильтрами.

    if(req.params.query.trim()){
        const query = req.params.query !== undefined ? req.params.query.trim() : null;

        if(query == null) return "";

        database.query("SELECT * FROM `products` WHERE product_title LIKE '%"+query+"%' OR product_description LIKE '%"+query+"%'", function(err, results, fields){
            if(err){
                console.error(err);
                return;
            }

            const params = {
                title: "Результаты поиска - Market.io",
                navActive: "",
                cookies: req.cookies,
                notFound: false,
                serverResponse: [],
                query: query
            }

            if(!results[0]){
                params.notFound = true;

                res.render('pages/search-results', params);

                return;
            }
            else{
                params.serverResponse = results;

                res.render('pages/search-results', params);

                return;
            }
        });

        return;
    }
    
    res.redirect('/');
});


// 404 page
RouterServer.get('/*', (req, res) => {
    res.status(404);
    res.render('pages/404', { title: "Страница не найдена - Market.io", navActive: "", cookies: req.cookies });
});

module.exports = RouterServer;