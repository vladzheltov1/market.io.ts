import React, { useState } from "react";
import { Icon } from "rsuite";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

export const AlertComponent = () => {
    const [visible, setVisible] = useState(false);

    const getState = () => visible;

    const showAlert = () => setVisible(true);
    const closeAlert = () => setVisible(false);

    const Alert = ({
        type = "info",
        title = "Внимание!",
        description = "Системное оповещение!",
        children
    }) => {
        return (
            <>
                {visible && (
                    <div className="alert-wrapper">
                        <div className="alert-blinder"></div>
                        <div className={"alert-window alert__type-" + type}>
                            <div onClick={closeAlert} className="alert__close"><Icon icon="close" /></div>
                            <div className="alert-window__icon">
                                {type === "info" && (<Icon className="alert__icon" icon="info" />)}
                                {type === "warning" && (<Icon className="alert__icon" icon="exclamation-triangle" />)}
                                {type === "danger" && (<Icon className="alert__icon" icon="warning" />)}
                                {type === "success" && (<Icon className="alert__icon" icon="check-circle" />)}
                            </div>
                            <div className="alert-window__title">{title}</div>
                            <div className="alert-window__description">{description}</div>
                            <ButtonGroup gap="3px">
                                {children || (
                                    <Button action={closeAlert} view="primary">Ок</Button>
                                )}
                            </ButtonGroup>
                        </div>
                    </div>
                )
                }
            </>
        )
    }
    return { Alert, showAlert, closeAlert, getState }
}