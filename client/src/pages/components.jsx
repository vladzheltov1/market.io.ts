import React from "react";
import { Button, ButtonGroup } from "../components/Market.io/market.io";

export const Components = () => {
    return (
        <div className="wrapper">
            <h3>Цвета</h3>

            <h3>Кнопки</h3>
            <section>
                <h4>По значимости</h4>
                <ButtonGroup justify="start" >
                    <Button view="primary">
                        Primary
                    </Button>
                    <Button view="secondary">
                        Secondary
                    </Button>
                </ButtonGroup>
            </section>
            <section>
                <h4>По цвету</h4>
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
    )
}