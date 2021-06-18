// import { SearchObject } from "../models/SearchType";
import { mongoDB } from "../database/queryMongo";
import { utils } from "../helper/utils";
import { searchErrors } from "../list/searchErrors";
import { SearchServiceClass } from "../services/search.service";

class SearchControllerClass extends SearchServiceClass{    

    // Searching
    public search(req, res){
        const {query} = req.params;
        
        /*
         * Making sure that the `query` is not empty
         * so that we could avoid some obvious 
         * problems with database.
        */
        if(query === undefined || !query.trim()){
            return res.status(400).json({
                error: searchErrors.EMPTYQUERY
            })
        }

        // Sending a request
        mongoDB.getAll("products", {product_title: query.trim()}, (response) => {
            if(response.error){
                return res.status(response.status).json({
                    status: 400,
                    error: response.error
                });
            }

            if(utils.isObjectEmpty(response.results)){
                return res.status(response.status).json({
                    status: 400,
                    error: searchErrors.NOTFOUND
                });
            }

            return res.json({status: 200, results: response.results});
        });
    }

    // public search(query: string): Array<SearchObject>{
    //     return [{
    //         _id: 21,
    //         product_title: "string",
    //         product_description: "string",
    //         product_category: "string",
    //         product_price: 1000,
    //         product_bought: 10,
    //         product_available: 1000,
    //         product_photo: "string"
    //     }];
    // }

    public getSuggestions(query){
        // const serverResponse = this.search(query);
        // const possibleCategory = this.getProducts(serverResponse);

        const tips = [];
        const keyWords = this.getTips(query);

    }
}

export const searchController = new SearchControllerClass();