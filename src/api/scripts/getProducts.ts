import { database } from "../../database/query";

export const getProducts = (req, res) => {
    if(req.params.id){
        database.getOne("SELECT * FROM products WHERE id = ?", [req.params.id], (product) => {
            if(product == null) return res.json({});
            else if(product.error) return res.json({error: product.error});
            else return res.json(product);
        });
    }
    else{
        database.getAll("SELECT * FROM products ORDER BY id DESC", [], (products) => {
            if(products == null) return res.json({});
            else if(products.error) return res.json({error: products.error});
            else return res.json(products);
        });
    }
}