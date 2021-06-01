import { RouterServer } from "../helper/create_router";
import { Category } from "../list/product_categories";
import { fetchData } from "./fetch_script";

RouterServer.get('/data/:type/:query', (req, res) => {
    const type = req.params.type;
    const query = req.params.query;

    fetchData(query, type, (data) => {
        return res.json(Category[data[0].product_category]);
    });
});

module.exports = RouterServer;