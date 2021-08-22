import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "rsuite";
import { Flex, Text } from "../../components/UIkit";
import { setGradient } from "../../scripts/Gradient";

export const Slider = () => {
    return (
        <div style={{ borderRadius: 20, overflow: "hidden" }}>
            <Carousel shape="bar" autoplay>
                <Link to="/shop" className="index__slider--link" style={{ display: "flex", padding: 40, background: setGradient(1) }}>
                    <Flex direction="column" align="center" justify="center">
                        <Text mode="h2">Скидки!</Text>
                        <Text mode="div" size={18} bold>Самые популярные товары теперь ещё девешле!</Text>
                    </Flex>
                </Link>
                <Link to="/shop" className="index__slider--link" style={{ display: "flex", padding: 40, background: setGradient(2) }}>
                    <Flex direction="column" align="center" justify="center">
                        <Text mode="h2">Скидки!</Text>
                        <Text mode="div" size={18} bold>Самые популярные товары теперь ещё девешле!</Text>
                    </Flex>
                </Link>
            </Carousel>
        </div>
    )
}