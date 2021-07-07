import React from "react";
import { Button, ButtonGroup } from "../components/Market.io/market.io";

export const Shop = () => {
    return (
        <div className="wrapper">
            <h2 className="center">Магазин</h2>
            <ButtonGroup justify="start">
                <Button link="/add/product" color="blue">Добавить продукт</Button>
                <Button link="/components" color="green">Все компоненты</Button>
            </ButtonGroup>
        </div>
    )
}