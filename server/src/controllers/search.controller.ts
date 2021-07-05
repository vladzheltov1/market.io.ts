import { utils } from "../helper/utils";
import { SearchServiceClass } from "../services/search.service";

const searchService = new SearchServiceClass();

class SearchControllerClass{
    /**
     * This is a default method called by api router. It checks what parameters
     * were given and calls the necessary function that will return the necessary result. 
     * @param req 
     * @param res 
     * @returns `object`
     */
    public async search(req, res){
        const {query} = req.params;
        if(utils.isStringValid(query)){
            return res.json(searchService.searchByQuery(query));
        }
    }
}

export const searchController = new SearchControllerClass();