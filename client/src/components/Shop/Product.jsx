import React from "react";
import { Link } from "react-router-dom";
import { getRandomColor } from "../../scripts/Colorizer";

export const Product = ({ data }) => {
    return (
        <>
            {data && data.map((item) => (
                <Link to={item.link} className="shop-item" key={item.title} style={{ backgroundColor: getRandomColor() || 'rgb(252, 244, 240)' }}>
                    <div className="shop-item-image">
                        <img src={item.image} alt="" />
                    </div>
                    {item.discount ? (
                        <>
                            <div className="shop-item-price text-crossed">
                                {item.price} руб.
                            </div>
                            <div className="shop-item-price new-price">
                                {Math.round(item.price * (1 - (item.discount / 100)))} руб.
                            </div>
                            <div className="shop-item-discount-message">
                                Скидка {item.discount}%!
                            </div>
                        </>
                    ) : (
                        <div className="shop-item-price">
                            {item.price} руб.
                        </div>
                    )}
                    <div className="shop-item-title">
                        {item.title}
                    </div>
                    <div className="shop-item-description">
                        {item.description}
                    </div>
                    <div className="shop-item-curtain"></div>
                </Link>
            ))}
        </>
    )
}