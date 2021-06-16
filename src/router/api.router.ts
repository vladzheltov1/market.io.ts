// Importing scripts 
import { searchApi } from "../api/search.api";
import { deleteUser, getUsers } from "../api/user.api";
import { loginAuth } from "../auth/login.auth";
import { signupAuth } from "../auth/signup.auth";
import { router } from "../helper/createRouter";

// Some necessary middleware
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


/* --- GET --- */
router.get('/users/:id?', getUsers);
router.get('/search/:table?/:query?', searchApi);

/* --- POST --- */
router.post("/users/login", loginAuth);
router.post("/users/signup", signupAuth);

/* --- DELETE --- */
router.delete("/users/:id", deleteUser)


module.exports = router;
