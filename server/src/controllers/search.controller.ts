import { mongoDB } from "../database/mongoDB";
import { SearchServiceClass } from "../services/search.service";

const searchServiceClass = new SearchServiceClass();

class SearchControllerClass{    
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
}

export const searchController = new SearchControllerClass();