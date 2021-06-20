import { mongoDB } from "../database/mongoDB";
import { SearchServiceClass } from "../services/search.service";

class SearchControllerClass extends SearchServiceClass{    
    public async search(req, res){
        const {query} = req.params;
        
        if(query === undefined || !query.trim()){
            return res.status(400).json({
                status: 400, message: "Пустой запрос!"
            })
        }

        const response = await mongoDB.getAll("products", {product_title: {$regex: query.trim()}});

        return res.json(response);
    }

    public async getSuggestions(query){
        // const serverResponse = this.search(query);
        // const possibleCategory = this.getProducts(serverResponse);

        const response = await mongoDB.getOne("products", {product_title: {$regex: query}}, {product_title: 1});

        // const tips = [];
        // const keyWords = this.getTips(query);
    }
}

export const searchController = new SearchControllerClass();