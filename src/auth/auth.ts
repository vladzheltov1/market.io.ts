import { router } from "../helper/createRouter";
import { loginScript } from "./authScripts/loginScript";
import { signupScript } from "./authScripts/signupScript";
// import { resetUser } from "./authScripts/resetUser";

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

/* ------------------------------------------------------------------ */

router.post('/signup', jsonParser, signupScript);
router.post('/login', jsonParser, loginScript);
// router.get("/user/reset", jsonParser, resetUser)

module.exports = router;
