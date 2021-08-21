import React from "react";
import { Dropdown, DropdownItem } from "../lib";

export const HeaderDropdown = () => {
    return (
        <Dropdown title="Профиль" icon="user">
            <DropdownItem link="/profile">Личный кабинет</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem link="/login">Вход</DropdownItem>
            <DropdownItem link="/signup">Регистрация</DropdownItem>
        </Dropdown>
    )
}