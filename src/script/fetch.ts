import { RouterServer } from "../helper/create_router";
import { Category, getName } from "../list/product_categories";
import { fetchData } from "./fetch_script";

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

RouterServer.post('/fetch/data/:type/', jsonParser, (req, res) => {
    const type = req.params.type.trim();
    const query = req.body.query.trim();

    fetchData(query, type, (data) => {
        if(!data || data == null){
            return res.json({response: null, status: 200});
        }
        if(data.error){
            return res.json({error: data.error, status: 400});
        }
        return res.json({response: getName(Category[data.product_category]), status: 200});
    });
});

module.exports = RouterServer;