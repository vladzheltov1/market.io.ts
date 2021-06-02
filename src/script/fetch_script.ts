import { db } from "../database/query";
import { IProduct } from "../interfaces/IProduct";
import { utils } from "../script/utils";

const setInstance = (serverData: Array<IProduct>) => {
    return utils.json(serverData);
}

export const fetchData = (query, type, callback) => {
    switch(type){
        case "product":
            db.getOne("SELECT id, product_title, product_category FROM products WHERE product_title LIKE '%"+ query +"%'", [], (result) => {
                if(result === null){
                    callback(null);
                    return;
                }

                if(result.error){
                    callback({ error: result.error });
                    return;
                }

                callback(setInstance(result));
            });
    }
}