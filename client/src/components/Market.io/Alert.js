import React, { useState } from "react";
import { Icon } from "rsuite";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

export const Alert = (
    {
        type = "info",
        title = "Внимание!",
        description = "Описание",
        buttons = [
            {
                value: "Ок",
                color: "green",
            },
            {
                value: "Отмена",
                color: "red",
            }
        ]
    }) => {

    const [visible, setVisible] = useState(true);

    const showAlert = () => {
        document.querySelector('body').classList.add("alert-open");
        setVisible(true);
    }
    const hideAlert = () => {
        document.querySelector('body').classList.remove("alert-open");
        setVisible(false);
    }

    return (
        <>
            {visible && (
                <div className="alert-wrapper">
                    <div className="alert-blinder"></div>
                    <div className={"alert-window " + "alert__type-" + type}>
                        <div className="alert-window__icon">
                            {type === "info" && (<Icon className="alert__icon" icon="info" />)}
                            {type === "warning" && (<Icon className="alert__icon" icon="exclamation-triangle" />)}
                            {type === "danger" && (<Icon className="alert__icon" icon="warning" />)}
                            {type === "success" && (<Icon className="alert__icon" icon="check-circle" />)}
                        </div>
                        <div className="alert-window__title">{title}</div>
                        <div className="alert-window__description">{description}</div>
                        <ButtonGroup gap="3px">
                            {buttons.map((btn) => {
                                return <Button color={btn.color} key={btn.value}>{btn.value}</Button>
                            })}
                        </ButtonGroup>
                    </div>
                </div>
            )
            }
        </>
    )
}