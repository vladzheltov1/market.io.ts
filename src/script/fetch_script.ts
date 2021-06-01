import { db } from "../database/query";
import { IProduct } from "../interfaces/IProduct";

const setInstance = (serverData: Array<IProduct>) => {
    // const condition = (x) => x.id && x.product_title
    //                               && x.product_description
    //                               && x.product_category
    //                               && x.product_price
    //                               && x.product_bought
    //                               && x.product_available
    //                               && x.product_photo;


    return JSON.parse(JSON.stringify(serverData));
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