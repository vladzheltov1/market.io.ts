import { getCategory } from "../helper/search";

export class SearchServiceClass{
    public getTips(category){
        return getCategory(category);
    }
}

export const searchService = new SearchServiceClass();