import React from "react";
import { Button, ButtonGroup, Container, Space, Text } from "../../components/UIkit";
import "./style.scss";

export const Components = () => {
    return (
        <Container>
            <div>
                <Text mode="h1">Компоненты UIkit</Text>
                <section id="buttons">
                    <Text mode="h3">Кнопки</Text>

                    <ButtonGroup justify="start" >
                        <Button primary>
                            Primary
                        </Button>
                        <Button secondary>
                            Secondary
                        </Button>
                    </ButtonGroup>

                    <Space height={20} />

                    <ButtonGroup justify="start" >
                        <Button color="red">
                            Red
                        </Button>
                        <Button color="orange">
                            Orange
                        </Button>
                        <Button color="yellow">
                            Yellow
                        </Button>
                        <Button color="green">
                            Green
                        </Button>
                        <Button color="blue">
                            Blue
                        </Button>
                        <Button color="violet">
                            Violet
                        </Button>
                    </ButtonGroup>
                </section>
            </div>
        </Container>
    )
}