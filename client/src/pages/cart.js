import React from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
    let total = 0;

    const data = [
        {
            id: 1,
            title: 'Футболка белая',
            image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
            price: "1500",
            quantity: 4
        },
        {
            id: 2,
            title: 'Штаны',
            image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
            price: "1800",
            quantity: 1
        }
    ];

    data.forEach((product) => {
        total += (product.price * product.quantity);
    })

    const style = {
        list: {
            display: "flex",
            flexDirection: "column"
        },
        listItem: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px 20px",
            border: "1px solid #fafafa"
        },
        itemImageWrapper: {
            width: 200,
            position: "relative",
            borderRadius: 10,
            overflow: "hidden"
        },
        itemImage: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
        textWithTitle: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        textTitle: {
            color: "#bababa"
        },
        textValue: {
            fontSize: "16px"
        },
        divider: {
            height: 14,
            width: 1,
            background: "#333",
            display: "inline-block",
            margin: "-2px 5px"
        }
    }


    return (
        <div className="wrapper">
            <div style={style.list} >
                <div style={style.listItem}>
                    <div style={style.itemColumn}>
                        <div style={style.textWithTitle}>
                            <div style={style.textTitle}>Итог</div>
                            <div style={style.textValue}>{total}</div>
                        </div>
                    </div>
                    <div style={style.itemColumn}>
                        <div style={style.textWithTitle}>
                            <div style={style.textTitle}>Действия</div>
                            <div style={style.textValue}>
                                <Link to="#">Оформить покупку</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {data.map((item) => {
                return (
                    <div style={style.list} key={item.id} >
                        <div style={style.listItem}>
                            <div style={style.itemColumn}>
                                <div style={style.itemImageWrapper}>
                                    <img src={item.image} style={style.itemImage} alt="_" />
                                </div>
                            </div>
                            <div style={style.itemColumn}>
                                <div style={style.textWithTitle}>
                                    <div style={style.textTitle}>Название</div>
                                    <div style={style.textValue}>{item.title}</div>
                                </div>
                            </div>
                            <div style={style.itemColumn}>
                                <div style={style.textWithTitle}>
                                    <div style={style.textTitle}>Цена</div>
                                    <div style={style.textValue}>{item.price} руб.</div>
                                </div>
                            </div>
                            <div style={style.itemColumn}>
                                <div style={style.textWithTitle}>
                                    <div style={style.textTitle}>Количество</div>
                                    <div style={style.textValue}>{item.quantity}</div>
                                </div>
                            </div>
                            <div style={style.itemColumn}>
                                <div style={style.textWithTitle}>
                                    <div style={style.textTitle}>Действия</div>
                                    <div style={style.textValue}>
                                        <Link to="#">Купить</Link>
                                        <span style={style.divider}></span>
                                        <Link to="#">Удалить</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}