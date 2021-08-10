import React from "react";
import { Card, Flex, Grid, Image, Space, Text } from "../../components/lib/sck";
import { Categories } from "../../components/Shop/Categories";
import { Header } from "../../components/Shop/Header";
import { setGradient } from "../../scripts/Gradient";
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
            <Header />
            <Grid templateColumn="200px auto">
                <Categories />
                <Grid templateColumn="66% auto" gap={20}>
                    <Card padding={40} link="/shop" vertical={false} background={setGradient(1)}>
                        <Grid templateColumn="55% auto">
                            <Flex direction="column" justify="center">
                                <Text mode="h2">Скидки!</Text>
                                <Text mode="div" size={18} bold>Самые популярные товары теперь ещё девешле!</Text>
                            </Flex>
                            <Image maxWidth={200} src="https://clipart-best.com/img/headphones/headphones-clip-art-3.png" />
                        </Grid>
                    </Card>
                    <Flex direction="column" gap={20}>
                        <Card padding={40} link="/shop" background={setGradient(2)}>
                            <Text textAlign="center" bold size={20} color="#fff">
                                Скидки на наушники до 30%!
                            </Text>
                        </Card>
                        <Card padding={40} link="/shop" background={setGradient(3)}>
                            <Text textAlign="center" bold size={20} color="#fff">
                                Скидки на наушники до 30%!
                            </Text>
                        </Card>
                    </Flex>
                </Grid>
                <Space />
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
            </Grid>
        </div>
    )
}