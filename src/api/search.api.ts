import { mongoDB } from "../database/queryMongo";
import { getName } from "../list/productCategories";

export const searchApi = (req, res) => {
    const {query, table} = req.params;

    mongoDB.getAll(table, {product_title: query}, (response) => {
        if(response.status !== 200){
            return res.status(response.status).json({
                error: response.error
            });
        }

        const searchTips = [];

        searchTips.push(getName(response[0]?.product_category));

       return res.json({response: searchTips, status: 200}); 
    });
}