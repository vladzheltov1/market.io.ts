import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";

export const AdminSide = () => {

    const [sidebar, setSidebar] = useState(['admin-sidebar']);

    const toggleSidebar = () => {
        if (sidebar.length === 1) {
            setSidebar([...sidebar, "admin-sidebar-collapse"]);
            return;
        }
        setSidebar(['admin-sidebar']);

        console.log("works")

        return;
    }

    return (
        <div className={sidebar.join(' ')}>
            <span>
                <Icon icon="bars" onClick={toggleSidebar} size="lg" />
            </span>
            <div className="admin-sidebar-title">Общие</div>
            <Link to="/" className="admin-sidebar-element">
                <Icon icon="home" size="lg" />
                Главная
            </Link>
            <Link to="/admin" className="admin-sidebar-element">
                <Icon icon="dashboard" size="lg" />
                Панель управления
            </Link>
            <div className="admin-sidebar-title">Данные</div>
            <Link to="/admin" className="admin-sidebar-element">
                <Icon icon="group" size="lg" />
                Пользователи
            </Link>
            <Link to="/admin" className="admin-sidebar-element">
                <Icon icon="shopping-cart" size="lg" />
                Товары
            </Link>
            <Link to="/admin" className="admin-sidebar-element">
                <Icon icon="usd" size="lg" />
                Покупки
            </Link>
            <Link to="/admin" className="admin-sidebar-element">
                <Icon icon="book" size="lg" />
                Отзывы
            </Link>
        </div>
    )
};