import React from "react";
import { Button, ButtonGroup } from "../../components/lib";

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
            <section>
                <br />
                <h3 className="center">Классовые стили</h3>
                <h4>Тень</h4>
                <div style={{ width: "100%", padding: 10 }} className="shadow-1">
                    .shadow-1
                </div>
                <br />
                <div style={{ width: "100%", padding: 10 }} className="shadow-2">
                    .shadow-2
                </div>
                <br />
                <div style={{ width: "100%", padding: 10 }} className="shadow-left-1">
                    .shadow-left-1
                </div>
                <br />
                <div style={{ width: "100%", padding: 10 }} className="shadow-left-2">
                    .shadow-left-2
                </div>
                <br />
                <div style={{ width: "100%", padding: 10 }} className="shadow-right-1">
                    .shadow-right-1
                </div>
                <br />
                <div style={{ width: "100%", padding: 10 }} className="shadow-right-2">
                    .shadow-right-2
                </div>
                <br />
                <br />
                <h4>Граница</h4>
                <div style={{ width: "100%", padding: 10 }} className="border-radius-1 shadow-1">
                    .border-radius-1
                </div>

                <br />
                <div style={{ width: "100%", padding: 10 }} className="border-radius-2 shadow-1">
                    .border-radius-2
                </div>

                <br />
                <div style={{ width: "100%", padding: 10 }} className="border-1">
                    .border-1
                </div>

                <br />
                <div style={{ width: "100%", padding: 10 }} className="border-2">
                    .border-2
                </div>
            </section>
        </div>
    )
}