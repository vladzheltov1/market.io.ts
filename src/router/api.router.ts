import { searchController } from "../controllers/search.controller";
import { userController } from "../controllers/user.controller";
import { router } from "../helper/createRouter";


/* --- GET --- */
router.get("/users/:id?", userController.getUsers);
router.get("/search/:query?", searchController.search);

/* --- POST --- */
router.post("/users/login", userController.userLogin);
router.post("/users/signup", userController.userSignUp);

/* --- DELETE --- */
router.delete("/users/:id", userController.userDelete);

module.exports = router;
