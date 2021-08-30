import React from "react";
import { 
    Button,
    ButtonGroup,
    Input,
    Container,
    Space,
    Text
} from "../../components/UIkit";
import "./style.scss";

export const Components = () => {
    return (
        <Container>
            <div>
                <Text mode="h1">UIkit components</Text>
                <section>
                    <Text mode="h3">Button</Text>

                    <ButtonGroup justify="start" >
                        <Button primary>
                            Primary
                        </Button>
                        <Button secondary>
                            Secondary
                        </Button>
                    </ButtonGroup>

                    <Space height={10} />

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
                    <Text mode="h3">Input</Text>

                    <Input placeholder="With placeholder"/>
                    <Input status="success" value="With value"/>
                    <Input label="With label"/>
                    <Input placeholder="With label and placeholder" label="With label and placeholder"/>
                </section>
            </div>
        </Container>
    )
}