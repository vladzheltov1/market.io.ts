import { router } from "../helper/createRouter";
import { getProducts } from "./scripts/getProducts";
import { getUsers } from "./scripts/getUsers";

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.get('/products/:id?', jsonParser, getProducts);
router.get('/users/:id?', jsonParser, getUsers);


module.exports = router;