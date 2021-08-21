import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Icon } from "rsuite";

export const HeaderDropdown = () => {
    return (
        <Dropdown className="header__dropdown" title="Мой профиль" icon={<Icon icon="user" />}>
            <Dropdown.Item>
                <Link to="/profile">Личный кабинет</Link>
            </Dropdown.Item>

            <Dropdown.Item divider />

            <Dropdown.Item>
                <Link to="/login">Вход</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to="/signup">Регистрация</Link>
            </Dropdown.Item>
        </Dropdown>
    )
}