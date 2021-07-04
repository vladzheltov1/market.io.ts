import { mongoDB } from "../database/mongoDB";
import { Category } from "../list/productCategories";
import { seatchTips } from "../list/searchTips";
export class SearchServiceClass{
    private getTips = (category: string): Array<Object> | null => {
        return seatchTips[Category[category]] || [];
    }

    public async getSuggestions(query: string){
        const response = await mongoDB.getOne("products", {product_title: {$regex: query}}, {product_title: 1});

        console.log()

        // const tips = this.getTips(response);
        // const keyWords = this.getTips(query);
    }
}