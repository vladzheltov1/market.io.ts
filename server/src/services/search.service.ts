import { Category } from "../list/productCategories";
export class SearchServiceClass{
    protected getTips = (category: string): Array<Object> | null => {
        const tips = {
            shirts: ["футболка", "майка", "блузка"],
            pants:  ["штаны", "спортивные штаны", "брюки", "джинсы"],
            hoody:  ["худи", "кофта", "толстовка", "свитер"],
            boots:  ["ботинки", "туфли", "кроссовки"]
        }
        return tips[Category[category]] || null;
    }
}