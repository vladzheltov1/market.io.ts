import { useState } from "react";
import { Icon } from "rsuite";

/**
 * This component does't work properly! You'd better use `Alert`, it works great!
 * However, if you are willing to use `Notification`, be ready for errors and other problems
 * that may pop up while using this component.
 */
export const NotificationComponent = () => {
    const [open, setOpen] = useState(false);

    const getState = () => open;

    const openNotification = () => setOpen(true);
    const closeNotification = () => setOpen(false);

    const Notification = ({ title = "Внимание!", description = "Системное уведомление!" }) => {
        return (
            <>
                {open && (
                    <div className="notification__window">
                        <div className="notification__close" onClick={closeNotification}><Icon icon="close" /></div>
                        <div className="notification__title">{title}</div>
                        <div className="notification__description">{description}</div>
                    </div>
                )}
            </>
        )
    }
    return { Notification, openNotification, closeNotification, getState };
}