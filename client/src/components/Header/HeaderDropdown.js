import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Icon } from "rsuite";
import { useAuth } from "../../hooks/useAuth";

export const HeaderDropdown = () => {

    const { getUserData, clearUserData } = useAuth();
    const userData = getUserData();

    return (
        <Dropdown
            className="dropdownHeader header-item header-dropdown"
            title="Личный кабинет"
            icon={<Icon icon="profile" />}
        >
            {userData ? (
                <React.Fragment>
                    <Link to={"/profile/" + userData._id} className="header-dropdown-item">
                        <Icon icon="user" />
                        Мой профиль
                    </Link>
                    <Link to="/cart" className="header-dropdown-item">
                        <Icon icon="shopping-cart" />
                        Корзина
                    </Link>
                    {userData && userData.role === 2 && (
                        <Link to="/admin" className="header-dropdown-item">
                            <Icon icon="cog" />
                            Админ панель
                        </Link>
                    )}
                    <Dropdown.Item divider />
                    <Link to="#" onClick={() => {
                        clearUserData();
                        window.location.reload()
                    }} className="header-dropdown-item">
                        <Icon icon="sign-out" />
                        Выход
                    </Link>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Link to="/login" className="header-dropdown-item">
                        <Icon icon="sign-in" />
                        Вход
                    </Link>

                    <Link to="/signup" className="header-dropdown-item">
                        <Icon icon="user-plus" />
                        Регистрация
                    </Link>
                </React.Fragment>
            )}
        </Dropdown>
    )
}