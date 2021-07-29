import React from "react";
import { Categories } from "../components/Shop/Categories";
import { Header } from "../components/Shop/Header";
import { Product } from "../components/Shop/Product";

export const Shop = () => {

    const data = [
        {
            title: "Очень длинное название первого товара",
            description: "Очень длинное описание товара 1",
            link: "Ссылка на товар 1",
            price: "1500",
            image: "/uploads/products/iphone.png"
        },
        {
            title: "Название товара 2",
            description: "Описание товара 2",
            link: "Ссылка на товар 2",
            price: "1800",
            discount: 30,
            image: "/uploads/products/keyboard.png"
        }
    ]

    return (
        <div className="wrapper">
            <Header />

            <div className="shop-grid-row">
                <Categories />
                <div className="shop-content">
                    <Product data={data} />
                </div>
            </div>
        </div>
    )
}