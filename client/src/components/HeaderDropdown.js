import { Link } from "react-router-dom";
import { Dropdown, Icon } from "rsuite";

// USE CONTEXT INSTEAD OF PROPS //

export const HeaderDropDown = (props) => {
    return (
        <Dropdown
            className="dropdownHeader"
            title="Личный кабинет"
            icon={<Icon icon="profile" />}
            className="header-item header-dropdown">
            {props.userData !== undefined && (
                <>
                    {/* If any errors with DOM nesting, solution is below */}
                    <Link to={"/profile/" + props.userData._id}>
                        <Dropdown.Item>
                            <Icon icon="user" />
                            Мой профиль
                        </Dropdown.Item>
                    </Link>
                    <Link to="/cart">
                        <Dropdown.Item>
                            <Icon icon="shopping-cart" />
                            Корзина
                        </Dropdown.Item>
                    </Link>
                    {props.userData !== undefined && props.userData.user_role === 2 && (
                        <Link to="/admin">
                            <Dropdown.Item>
                                <Icon icon="cog" />
                                Админ панель
                            </Dropdown.Item>
                        </Link>
                    )}
                    <Dropdown.Item divider />
                    <Link to="/logout">
                        <Dropdown.Item>
                            <Icon icon="sign-out" />
                            Выход
                        </Dropdown.Item>
                    </Link>
                </>
            )}
            {/* Solution */}
            <Link to="/login" className="header-dropdown-item">
                <Icon icon="sign-in" />
                Вход
            </Link>

            <Link to="/signup" className="header-dropdown-item">
                <Icon icon="user-plus" />
                Регистрация
            </Link>
        </Dropdown>
    );
}