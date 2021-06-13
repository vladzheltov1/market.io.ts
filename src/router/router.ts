import { router } from "../helper/createRouter";
import { AdminIndex } from "./pages/admin/adminIndexPage";
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

router.get('/', indexPage);
router.get('/profile/:id?', profilePage);
router.get('/product/:id?', product);
router.get('/shop/:category?/:page?/:priceMin?/:priceMax?/', shopPage);
router.get('/login/:error?', loginPage);
router.get('/signup', signupPage);
router.get('/search/:query?', searchData);
router.get('/logout', logoutPage);

/* Admin panel */
router.get('/admin', AdminIndex);
/* ----------- */

router.get('/*', notFoundPage);

/* ------------------------------------------------------------------ */

module.exports = router;