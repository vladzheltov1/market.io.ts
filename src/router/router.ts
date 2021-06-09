import { RouterServer } from "../helper/createRouter";
import { indexPage } from "./pages/indexPage";
import { loginPage } from "./pages/loginPage";
import { logoutPage } from "./pages/logoutPage";
import { notFoundPage } from "./pages/notFoundPage";
import { product } from "./pages/productPage";
import { profilePage } from "./pages/profilePage";
import { searchData } from "./pages/searchPage";
import { shopPage } from "./pages/shopPage";
import { signupPage } from "./pages/signupPage";


/* ------------------------------------------------------------------ */

RouterServer.get('/', indexPage);
RouterServer.get('/profile/:id?', profilePage);
RouterServer.get('/product/:id?', product);
RouterServer.get('/shop/:category?/:page?/:priceMin?/:priceMax?/', shopPage);
RouterServer.get('/login/:error?', loginPage);
RouterServer.get('/signup', signupPage);
RouterServer.get('/search/:query?', searchData);
RouterServer.get('/logout', logoutPage);
RouterServer.get('/*', notFoundPage);

/* ------------------------------------------------------------------ */

module.exports = RouterServer;