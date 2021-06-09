export const loginPage = (req, res) => {
    if(req.cookies.user) res.redirect("/");

    const params = {
        title: "Вход - Market.io",
        navActive: "dropdown",
        cookies: req.cookies
    }

    res.render('pages/login', params);
}