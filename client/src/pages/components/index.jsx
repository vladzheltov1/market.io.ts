import React from "react";
import { Button, ButtonGroup } from "../../components/UIkit";

export const Components = () => {
    return (
        <div className="wrapper">
            <section>
                <h3 className="center">Цвета</h3>
            </section>

            <section>
                <br />
                <h3 className="center">Кнопки</h3>
                <br />
                <h4>По значимости</h4>
                <ButtonGroup justify="start" >
                    <Button primary>
                        Primary
                    </Button>
                    <Button secondary>
                        Secondary
                    </Button>
                </ButtonGroup>
            </section>
            <section>
                <br />
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