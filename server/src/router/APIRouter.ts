import { Router } from "express";
import { ProductsAPI } from "../api/products/ProductsAPI";
import { SearchAPI } from "../api/search/SearchAPI";
import { UsersAPI } from "../api/users/UsersAPI";

const router = Router();

/* --- USERS --- */
router.get("/users", UsersAPI.findUsersWithParams);
router.get("/users/:id", UsersAPI.findUserWithId);
router.post("/users/login", UsersAPI.login);
router.post("/users/signup", UsersAPI.signup);
router.delete("/users/:id", UsersAPI.deleteUser);

/* --- PRODUCTS --- */
router.get("/products", ProductsAPI.getAllProducts);
router.get("/products/:id", ProductsAPI.getProductById);
router.post("/products/add", ProductsAPI.addProduct);
router.delete("/products/:id", ProductsAPI.deleteProduct);

/* --- SEARCH --- */
router.get("/search/:query", SearchAPI.findByQuery);
router.get("/search/tips/:query", SearchAPI.getTipsByQuery);

module.exports = router;
