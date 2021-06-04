import { pool } from "../../database/connect";

export const product = (req, res) => {
    if(!req.params.id){
        res.redirect('/shop');
        return;
    }

    pool.query("SELECT * FROM products WHERE id = ?", [req.params.id], function(err, results, fields){
        if(err){
            console.error(err);
            res.redirect('/shop');
            return;
        }

        if(!results[0]){
            res.redirect('/shop');
            return;
        }

        const product = results[0];

        pool.query("SELECT * FROM reviews WHERE review_product_id = ?", [req.params.id], function(error1, reviews, field){
            if(error1){
                console.error(error1);
                return;
            }
            pool.query('SELECT product_amount FROM purchases WHERE product_id = ?', [req.params.id], function(error2, amounts, fields){

                if(error2){
                    console.error(error2);
                    return;
                }

                const params = {
                    title: results[0].product_title + " - Market.io",
                    navActive: "shop",
                    product: product,
                    cookies: req.cookies,
                    reviews: [],
                    rating: 0 || "0",
                    ratingRound: 0,
                    bought: amounts.length
                }
    
                if(!reviews[0]){
                    res.render('pages/product-page', params);
                    return;
                }
    
                let sum = 0;
    
                for(let i = 0; i < reviews.length; i++){
                    sum += reviews[i].review_rate;
                }
    
                let rating = reviews.length > 0 ? sum / reviews.length : 0;
    
                params.rating = rating.toFixed(1);
                params.ratingRound = Math.round(rating);
                params.reviews = reviews;
                
                res.render('pages/product-page', params);
            });
        });

        // product.rating = "";
    });
}