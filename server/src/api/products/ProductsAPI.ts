const Product = require("../../models/ProductSchema");
import { methods } from "../../database/mongo/MongoDB";

export const ProductsAPI = {
    getAllProducts(req, res) {

    },

    // We always have an id in req.params
    getProductById(req, res) {

    },

    async addProduct(req, res) {
        const { data } = req.body;

        console.log(data);

        if (!data) {
            return res.status(400).json({ status: 400, message: "Пустой запрос!" });
        }

        const existingProduct = await methods.get({ table: "products", where: { title: data.title } });

        if (existingProduct) {
            return res.status(400).json({ status: 400, message: "Продукт с таким заголовком уже существует!" });
        }

        const product = Product({
            title: data.product,
            description: data.description,
            category: data.category,
            price: data.price,
            photo: data.photo,
            keywords: data.keywords
        });

        await product.save();

        return res.status(200).json({ status: 200 });
    },

    // We always have an id in req.params
    deleteProduct(req, res) {

    }
};