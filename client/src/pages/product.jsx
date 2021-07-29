import React, { useState } from "react";
import { Button, Rate } from "../components/Market.io/market.io";
import { Header } from "../components/Shop/Header";

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
            <Header />
            <div className="product-page__wrapper">
                <div className="product-info">
                    <div className="product-title">
                        Название товара
                    </div>
                    <div>
                        Краткое описание товара. Qui ad cillum aliqua elit non ullamco tempor veniam dolore nostrud sunt voluptate. Nulla consequat in labore proident ex nulla aute voluptate sint fugiat sunt. Cillum officia eu amet nulla.
                    </div>
                </div>
                <div className="product-picture">
                    <img src="/uploads/products/iphone.png" alt="" />
                </div>
                <div className="product-info">
                    <div className="product-price">
                        69 999 руб.
                    </div>
                    {/* <Rate defaultValue={5} size="lg" color="orange" disabled={true} className="" /> */}
                    <div style={{ display: "flex", gap: 10 }}>
                        <Rate />
                        <span className="text-muted">
                            41 отзыв
                        </span>
                    </div>
                    <div>
                        <h4>Цвета</h4>
                        <div className="product-colors-wrapper">
                            {productColors.map((color) => (
                                <div className="product-colors-item" onClick={() => chooseColor(color)} style={{ backgroundColor: color.value }}></div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4>Характеристики</h4>
                        <div className="product-property-wrapper">
                            <div className="product-property-item">
                                <div>Диагональ экрана</div>
                                <div>5.8 дюймов</div>
                            </div>
                            <div className="product-property-item">
                                <div>Оперативная память</div>
                                <div>3 ГБ</div>
                            </div>
                            <div className="product-property-item">
                                <div>Встроенная память</div>
                                <div>64/256 ГБ</div>
                            </div>
                            <div className="product-property-item">
                                <div>Разрешение основной камеры</div>
                                <div>12 Мпикс</div>
                            </div>
                            <div className="product-property-item">
                                <div>Процессор</div>
                                <div>A11 Bionic (6 ядер), 2.1 ГГц</div>
                            </div>
                            <div className="product-property-item">
                                <div>Беспроводные интерфейсы</div>
                                <div>Wi-Fi, NFC</div>
                            </div>
                            <div className="product-property-item">
                                <div>Разрешение экрана</div>
                                <div>2436x1125 пикс</div>
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