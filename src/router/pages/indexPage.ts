export const indexPage = (req, res) => {
    const params = {
        title: "Поиск - Market.io",
        navActive: "index",
        cookies: req.cookies,
    }

    res.render('pages/main', params);
}