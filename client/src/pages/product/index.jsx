import React, { useState } from "react";
import { Button, Rate, Text } from "../../components/lib";
import "./style.scss";

export const Product = () => {
    const productColors = [
        {
            value: "#211F25",
            isChoosen: true
        },
        {
            value: "#F9F6F4",
            isChoosen: false,
        },
        {
            value: "#063559",
            isChoosen: false
        }];

    const [color, setColor] = useState(productColors[0]);

    const chooseColor = (color) => {
        setColor()
    }

    return (
        <div className="wrapper">
            <div className="product-page__wrapper">
                <div className="product-info">
                    <Text mode="h3">
                        Название товара
                    </Text>
                    <Text mode="div">
                        Краткое описание товара. Qui ad cillum aliqua elit non ullamco tempor veniam dolore nostrud sunt voluptate. Nulla consequat in labore proident ex nulla aute voluptate sint fugiat sunt. Cillum officia eu amet nulla.
                    </Text>
                </div>
                <div className="product-picture">
                    <img src="/uploads/products/iphone.png" alt="" />
                </div>
                <div className="product-info">
                    <Text mode="h1">
                        69 999 руб.
                    </Text>
                    <div style={{ display: "flex", gap: 10 }}>
                        <Rate />
                        <Text mode="div" muted>41 отзыв</Text>
                    </div>
                    <div>
                        <Text mode="h4">Цвета</Text>
                        <div className="product-colors-wrapper">
                            {productColors.map((color) => (
                                <div className="product-colors-item" onClick={() => chooseColor(color)} style={{ backgroundColor: color.value }}></div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Text mode="h4">Характеристики</Text>
                        <div className="product-property-wrapper">
                            <div className="product-property-item">
                                <Text mode="div">Диагональ экрана</Text>
                                <Text mode="div">5.8 дюймов</Text>
                            </div>
                            <div className="product-property-item">
                                <Text mode="div">Оперативная память</Text>
                                <Text mode="div">3 ГБ</Text>
                            </div>
                            <div className="product-property-item">
                                <Text mode="div">Встроенная память</Text>
                                <Text mode="div">64/256 ГБ</Text>
                            </div>
                            <div className="product-property-item">
                                <Text mode="div">Разрешение основной камеры</Text>
                                <Text mode="div">12 Мпикс</Text>
                            </div>
                            <div className="product-property-item">
                                <Text mode="div">Процессор</Text>
                                <Text mode="div">A11 Bionic (6 ядер), 2.1 ГГц</Text>
                            </div>
                            <div className="product-property-item">
                                <Text mode="div">Беспроводные интерфейсы</Text>
                                <Text mode="div">Wi-Fi, NFC</Text>
                            </div>
                            <div className="product-property-item">
                                <Text mode="div">Разрешение экрана</Text>
                                <Text mode="div">2436x1125 пикс</Text>
                            </div>
                        </div>
                    </div>
                    <div className="product-buttons">
                        <Button link="/cart" className="product-button product-tocart-button">В корзину</Button>
                        <Button link="/" className="product-button product-buy-button">Купить</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}