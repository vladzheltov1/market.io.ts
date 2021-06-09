export const signupPage = (req, res) => {
    if(req.cookies.user) res.redirect("/");

    const params = {
        title: "Регистрация - Market.io",
        navActive: "dropdown",
        cookies: req.cookies 
    }

    res.render('pages/signup', params);
}