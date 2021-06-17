import { Category } from "../list/productCategories";

export const getCategory = (category) => {
    const tips = {
        shirts: ["футболка", "майка", "блузка"],
        pants:  ["штаны", "спортивные штаны", "брюки", "джинсы"],
        hoody:  ["худи", "кофта", "толстовка", "свитер"],
        boots:  ["ботинки", "туфли", "кроссовки"]
    }

    return tips[Category[category]] || null;
}