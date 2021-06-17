import { mongoDB } from "../database/queryMongo";
import { getCategory } from "../helper/search";

/* ----------- DEPRECATED ----------- */
/* USE SERVICE AND CONTROLLER INSTEAD */

export const searchApi = (req, res) => {
    const {query, table} = req.params;

    mongoDB.getAll(table, {product_title: query}, (response) => {
        if(response.status !== 200){
            return res.status(response.status).json({
                error: response.error
            });
        }

        const searchTips = [];

        searchTips.push(getCategory(response[0]?.product_category));

       return res.json({response: searchTips, status: 200}); 
    });
}