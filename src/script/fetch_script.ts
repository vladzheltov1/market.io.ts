import { db } from "../database/query";
import { IProduct } from "../interfaces/IProduct";

const setInstance = (serverData: Array<IProduct>) => {
    const condition = (x) => x.id && x.product_title
                                  && x.product_description
                                  && x.product_category
                                  && x.product_price
                                  && x.product_bought
                                  && x.product_available
                                  && x.product_photo;


    return serverData.filter(condition);
}

export const fetchData = (query, type, callback) => {
    switch(type){
        case "product":
            db.getAll(query, [], (result) => {
                if(result === null) return null;

                if(result.error) return { error: result.error };

                callback(setInstance(result));
            });
    }
}