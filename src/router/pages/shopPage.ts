import { database } from "../../database/query";

export const shopPage = (req, res) => {
    const searchParams = {
        category: req.params.category || "all",
        page:     req.params.page     || 1,
        priceMin: req.params.priceMin || 0,
        priceMax: req.params.priceMax || Infinity,
        uri: ""
    };

    searchParams.uri = "/shop/" + searchParams.category + "/" + searchParams.page + "/" + searchParams.priceMin + "/" + searchParams.priceMax;

    const bottomBlockLimit = (searchParams.page - 1) * 15;
    const topBlockLimit = searchParams.page * 15;

    const query = searchParams.category !== "all" 
        ? "SELECT * FROM products WHERE product_category = "+ searchParams.category +" LIMIT " + bottomBlockLimit + "," + topBlockLimit
        : "SELECT * FROM products LIMIT " + bottomBlockLimit + "," + topBlockLimit;


    database.getAll(query, [], function(products){
        
        const params = {
            title: "Магазин - Market.io",
            navActive: "shop",
            cookies: req.cookies,
            error: '',
            products: []
        }

        if(products.error){
            console.error(products.error);
            params.error = products.error;
        }

        if(products == null){
            console.error('no products');
            params.products = [];
        }

        res.render('pages/shop', params);
    });
} 