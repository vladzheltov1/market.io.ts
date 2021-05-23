const router = require('../modules/mod_routerInit');
const db = require('../modules/mod_database');


const formErrors = [
    "Одно из полей пустое!", 
    "Пароль не может содержать менее 8 символов!",
    "Такого пользователя не существует!",
    "Неправильный пароль!",
    "Такой пользователь уже существует!",
    "Пароли не совпадают!",
    "Ошибка сервера. Попробуйте ещё раз.",
    "Всё хорошо!"
];


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

router.get('/login/:error?', (req, res) => {

    let error = "";

    if(req.params.error){
        error = formErrors[req.params.error];
    }

    res.render('pages/login', { title: "Вход - Market.io", navActive: "dropdown", error: error});
});

router.get('/signup', (req, res) => {
    res.render('pages/signup', { title: "Регистрация - Market.io", navActive: "dropdown", error: "" });
});

router.get('/*', (req, res) => {
    res.render('pages/404', { title: "Страница не найдена - Market.io", navActive: "" });
});

module.exports = router;