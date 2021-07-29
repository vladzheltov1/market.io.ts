import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ScrollButton } from "../components/Market.io/market.io";

export const Cart = () => {

    const [data, setData] = useState([
        {
            title: 'Футболка белая',
            description: "Описание для белой футболки",
            image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
            price: 1500,
            amount: 4
        },
        {
            title: 'Штаны',
            description: "Описание для штанов",
            image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
            price: 1800,
            amount: 1
        }
    ]);

    // We need to update the data on the server, but just on client 
    const deleteItem = (title) => {
        setData(data.filter((item) => item.title !== title));
    }

    // Calculating the total price of the items in the cart
    const totalPrice = data.reduce((total, current) => total + (current.price * current.amount), 0)
    const totalAmount = data.reduce((total, item) => total + item.amount, 0);

    return (
        <div className="wrapper">
            <ScrollButton />
            <div className="cart-grid-row">
                <div className="cart-list-wrapper">
                    {data.length > 0 ? (
                        <table className="cart-list-table" border="1">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Картинка</th>
                                    <th>Название</th>
                                    <th>Описание</th>
                                    <th>Цена</th>
                                    <th>Количество</th>
                                    <th>Итого</th>
                                    <th>Удалить</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr className="cart-list-item" key={item.title}>
                                        <td>{index += 1}</td>
                                        <td>
                                            <div className="cart-list-item-image-wrapper">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price} руб.</td>
                                        <td>{item.amount} шт.</td>
                                        <td>{item.amount * item.price} руб.</td>
                                        <td onClick={() => deleteItem(item.title)} className="link-view">Удалить</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="empty-cart-message">
                            <div>Корзина пуста!</div>
                            <div><Link to="/shop">В магазин!</Link></div>
                        </div>
                    )}
                </div>
                <div className="cart-total-wrapper">
                    <div className="cart-total-inner">
                        <h4>Оформить покупку</h4>
                        <hr className="cart-divider" />
                        <div className="cart-row">
                            Предметов в корзине&nbsp;
                            <span className="cart-value">{totalAmount} шт.</span>
                        </div>
                        <hr className="cart-divider" />
                        <div className="cart-row">
                            Итого&nbsp;
                            <span className="cart-value">{totalPrice} руб.</span>
                        </div>
                        <hr className="cart-divider" />
                        <Button className="cart-pay-button" disabled={data.length === 0}>Оплатить</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}