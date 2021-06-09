import { RouterServer } from "../helper/createRouter";
import { getProducts } from "./scripts/getProducts";
import { getUsers } from "./scripts/getUsers";

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


RouterServer.get('/products/:id?', jsonParser, getProducts);
RouterServer.get('/users/:id?', jsonParser, getUsers);


module.exports = RouterServer;