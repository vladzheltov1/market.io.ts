import { db } from "../database/query";
import { utils } from "./utils";

export const fetchData = (query, type, callback) => {
    switch(type){
        case "product":
            db.getAll("SELECT * FROM products WHERE product_title LIKE '%"+ query +"%'", [], (result) => {
                if(result === null){
                    callback({response: null, status: 404});
                    return
                }

                if(result.error){
                    callback({ error: result.error, status: 400, response: null });
                    return;
                }

                callback(utils.json(result));
            });
    }
}