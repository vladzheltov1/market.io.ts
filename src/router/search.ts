import { db } from "../database/query";


export const searchData = (req, res) => {
    const queryStr = req.params.query.trim();

    const params = {
        title: "Результаты поиска - Market.io",
        navActive: "",
        cookies: req.cookies,
        notFound: false,
        error: "",
        query: queryStr,
        serverResponse: []
    }

    if(!queryStr) throw new Error("Пустой SQL запрос!");
    if(!db.isConnected){
        params.error = "Нет подключения к базе данных!";
        
        res.render('pages/search-results', params);
        return;
    }

    const query = "SELECT * FROM `products` WHERE product_title LIKE '%"+queryStr+"%' OR product_description LIKE '%"+queryStr+"%'";
    
    db.getAll(query, [], function(searchFields){

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