import { RouterServer } from "../helper/create_router";
import { Category, getName } from "../list/product_categories";
import { fetchData } from "./fetch_script";

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

RouterServer.post('/fetch/data/:type/', jsonParser, (req, res) => {
    const type = req.params.type;
    const query = req.body.query;

    fetchData(query, type, (data) => {
        if(data.error){
            return res.json({error: data.error, status: 400});
        }
        if(!data){
            return;
        }
        return res.json({response: getName(Category[data.product_category]), status: 200});
    });
});

module.exports = RouterServer;