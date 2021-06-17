import { SearchObject } from "../models/SearchType";
import { SearchServiceClass } from "../services/search.service";

class SearchControllerClass extends SearchServiceClass{    
    public search(query: string): Array<SearchObject>{
        return [{
            _id: 21,
            product_title: "string",
            product_description: "string",
            product_category: "string",
            product_price: 1000,
            product_bought: 10,
            product_available: 1000,
            product_photo: "string"
        }];
    }

    private getProducts(serverResponse: Array<Object>){
        const results = [];

        for(let product in serverResponse){
            results.push({title: product.product_title, link: "/product/"+product._id});
        }
    }

    public getSuggestions(query){
        const serverResponse = this.search(query);
        const possibleCategory = this.getProducts(serverResponse);
    }
}

export const searchController = new SearchControllerClass();