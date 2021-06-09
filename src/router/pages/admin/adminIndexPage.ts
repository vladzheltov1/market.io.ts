import { access } from "../../../script/access";

export const AdminIndex = (req, res) => {
    
    if(!access['admin'](req.cookies.user)){
        return res.redirect('/');
    }

    const params = {
        title: "Админ панель",
        navActive: "dropdown",
        cookies: req.cookies
    }

    res.render("pages/admin/adminIndex", params);
}