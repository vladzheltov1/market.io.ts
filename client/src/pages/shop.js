import React from "react";
import { Button } from "../components/Market.io/Button";

export const Shop = () => {
    return (
        <div className="wrapper">
            <h2 className="center">Магазин</h2>
            <Button link="/add/product" color="blue">Добавить продукт</Button>
        </div>
    )
}