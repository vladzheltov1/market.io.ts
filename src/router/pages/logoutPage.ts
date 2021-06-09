export const logoutPage = (req, res) => {
    res.clearCookie("user");
    res.redirect('/');
}