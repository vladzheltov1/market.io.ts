export enum Category{
    shirt,
    pants,
    hoody,
    boots,
}

/**
 * @param category // элементы из enum Category
 */
const getName = (category) => {
    switch(category){
        case Category.shirt: return ["футболка", "майка"];
        case Category.pants: return ["штаны", "спортивные штаны", "брюки", "джинсы"];
        case Category.hoody: return ["худи", "кофта", "толстовка", "свитер"];
        case Category.boots: return ["ботинки", "туфли", "кроссовки"];
    }
}