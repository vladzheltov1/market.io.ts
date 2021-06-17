// Importing scripts 

/* OLD CODE */
// import { searchApi } from "../api/search.api";
// import { deleteUser, getUsers } from "../api/user.api";
// import { loginAuth } from "../auth/login.auth";
// import { signupAuth } from "../auth/signup.auth";
/* NEW CODE */
import { userController } from "../controllers/user.controller";
import { router } from "../helper/createRouter";




// DO I NEED THEM???
// Some necessary middleware
// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json();


/* --------- OLD CODE ----------- */
/* --- GET --- */
// router.get('/users/:id?', getUsers);
// router.get('/search/:table?/:query?', searchApi);

// /* --- POST --- */
// router.post("/users/login", loginAuth);
// router.post("/users/signup", signupAuth);

// /* --- DELETE --- */
// router.delete("/users/:id", deleteUser)




/* ----------- NEW CODE ----------- */

/* --- GET --- */
router.get("/users/:id?", userController.getUsers);
// router.get("/search/:table?/:query?", ); // search...

/* --- POST --- */
router.post("/users/login", userController.userLogin);
router.post("/users/signup", userController.userSignUp);

/* --- DELETE --- */
router.delete("/users/:id", userController.userDelete);

module.exports = router;
