import React from "react";
import { Card, Flex, Image, Space, Text } from "../../components/lib";
import { Slider } from "./Slider";
import "./style.scss";


export const Index = (props) => {
    const trendingData = [
        {
            title: "Телефоны",
            link: "/search/телефон",
            image: "/uploads/products/iphone.png"
        },
        {
            title: "Джойстики",
            link: "/search/джойстик",
            image: "/uploads/products/dualshock.png"
        },
        {
            title: "Мониторы",
            link: "/search/монитор",
            image: "/uploads/products/monitor.png"
        },
        {
            title: "Клавиатуры",
            link: "/search/клавиатура",
            image: "/uploads/products/keyboard.png"
        },
    ]

    return (
        <div className="wrapper">

            <Slider />

            <Flex direction="column">
                <Space height={30} />
                <Text mode="h3">Популярное</Text>
                <Space height={10} />
                <Flex gap={20}>
                    {trendingData.map((item) => (
                        <Card link={item.link} key={item.title} width="100%" height={300}>
                            <Flex direction="column" align="center" >
                                <Image src={item.image} height={220} fit="contain" />
                                <Space height={10} />
                                <Text mode="div" size={18} bold>{item.title}</Text>
                            </Flex>
                        </Card>
                    ))}
                </Flex>
            </Flex>
        </div>
    )
}