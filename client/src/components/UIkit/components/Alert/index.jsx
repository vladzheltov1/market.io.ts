import React, { useState } from "react";
import { Icon } from "rsuite";
import { ButtonGroup } from "../../../UIkit";
import "./style.scss";

export const AlertComponent = () => {
    const [visible, setVisible] = useState(false);

    const getState = () => visible;

    const showAlert = () => setVisible(true);
    const closeAlert = () => setVisible(false);

    const types = {
        info: {
            icon: "info",
            label: "Информация!"
        },
        success: {
            icon: "check-circle",
            label: "Успех!"
        },
        warning: {
            icon: "exclamation-triangle",
            label: "Внимание!"
        },
        danger: {
            icon: "warning",
            label: "Ошибка!"
        }
    }

    const Alert = ({
        type = "info",
        description = "Оповещение!",
        controls
    }) => {
        return (
            <>
                {visible && (
                    <div className="alert-wrapper">
                        <div className="alert-blinder"></div>
                        <div className={"alert-window alert__type-" + type}>
                            <div onClick={closeAlert} className="alert__close"><Icon icon="close" /></div>
                            <div className="alert-window__icon">
                                <Icon className="alert__icon" icon={types[type].icon} />
                            </div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <div className="alert-window__title">{types[type].label}</div>
                                <div className="alert-window__description">{description}</div>

                                {controls && 
                                    (<div className="alert-window__controls">
                                        <ButtonGroup gap="3px">
                                            {controls}
                                        </ButtonGroup>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                )
                }
            </>
        )
    }
    return { Alert, showAlert, closeAlert, getState }
}