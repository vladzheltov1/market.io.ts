import React from "react";
import { Link } from "react-router-dom";

export const ShopProduct = () => {

    const colors = ["#F9F4F3", "#F1F6FA", "#F5F5F5", "#FCF4EF"];

    const getColor = () => {
        return colors[Math.floor(Math.random() * 4)];
    }

    const products = [
        {
            id: 1,
            title: "Продукт 1",
            description: "Описание первого товара",
            price: 1700,
            sale: "",
            picture: "https://via.placeholder.com/240x240?text=Картинка"
        },
        {
            id: 2,
            title: "Продукт 2",
            description: "Описание второго товара",
            price: 1500,
            sale: "30%",
            picture: "https://via.placeholder.com/240x240?text=Картинка"
        },
        {
            id: 3,
            title: "Продукт 2",
            description: "Описание второго товара",
            price: 1500,
            sale: "30%",
            picture: "https://via.placeholder.com/240x240?text=Картинка"
        },
        {
            id: 4,
            title: "Продукт 2",
            description: "Описание второго товара",
            price: 1500,
            sale: "30%",
            picture: "https://via.placeholder.com/240x240?text=Картинка"
        },
        {
            id: 5,
            title: "Продукт 2",
            description: "Описание второго товара",
            price: 1500,
            sale: "30%",
            picture: "https://via.placeholder.com/240x240?text=Картинка"
        },
        {
            id: 6,
            title: "Продукт 2",
            description: "Описание второго товара",
            price: 1500,
            sale: "30%",
            picture: "https://via.placeholder.com/240x240?text=Картинка"
        },
        {
            id: 7,
            title: "Продукт 2",
            description: "Описание второго товара",
            price: 1500,
            sale: "30%",
            picture: "https://via.placeholder.com/240x240?text=Картинка"
        },
        {
            id: 8,
            title: "Продукт 2",
            description: "Описание второго товара",
            price: 1500,
            sale: "30%",
            picture: "https://via.placeholder.com/240x240?text=Картинка"
        },
        {
            id: 9,
            title: "Продукт 2",
            description: "Описание второго товара",
            price: 1500,
            sale: "30%",
            picture: "https://via.placeholder.com/240x240?text=Картинка"
        },
    ]

    return (
        // <img src="https://via.placeholder.com/240x240?text=Картинка" height="240" />
        <div className="shop-products">
            {
                products.map((product) => {
                    return (
                        <React.Fragment key={product.id}>
                            <Link
                                to={"/product/" + product.id}
                                className="product-block block-regular"
                                style={{ background: getColor() || colors[2] }}
                            >
                                {product.sale && (
                                    <div className="product-sale">
                                        {product.sale}
                                    </div>
                                )}
                                <div className="product-img">
                                    <img src="https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png" alt="P" />
                                </div>
                                <div className="product-title">
                                    {product.title}
                                </div>
                                <div className="product-tip">
                                    {product.description}
                                </div>
                            </Link>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}