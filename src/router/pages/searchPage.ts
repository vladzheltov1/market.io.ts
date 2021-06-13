import { database } from "../../database/query";
import { dbErrors } from "../../list/dbErrors";

/* ------------------------------------------------------------------ */

export const searchData = (req, res) => {
    const queryStr = req.params.query != undefined ? req.params.query.trim() : null;

    const params = {
        title: "Результаты поиска - Market.io",
        navActive: "shop",
        cookies: req.cookies,
        notFound: false,
        error: "",
        query: queryStr,
        serverResponse: []
    }

    if(queryStr == null){
        params.error = "Ошибка! Пустой запрос!";
        res.render('pages/search-results', params);
    }

    if(!queryStr) throw new Error(dbErrors.EMPTYQUERY);
    if(!database.isConnected){
        params.error = dbErrors.ECONNREFUSED;
        
        res.render('pages/search-results', params);
        return;
    }

    const query = "SELECT * FROM `products` WHERE product_title LIKE '%"+queryStr+"%' OR product_description LIKE '%"+queryStr+"%'";
    
    database.getAll(query, [], function(searchFields){

        if(searchFields === null){
            params.notFound = true;
            res.render('pages/search-results', params);

            return;
        }

        if(searchFields.error){
            params.error = searchFields.error;
            res.render('pages/search-results', params);

            return;
        }

        params.serverResponse = searchFields;

        res.render('pages/search-results', params);
    });
}