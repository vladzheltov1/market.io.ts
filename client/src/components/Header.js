import * as $ from "jquery";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Icon } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';
import "../css/header.scss";


export const Header = (props) => {

    // const [buttonClass, setButtonClass] = useState('btn invisible');

    const [headerClassList, setHeaderClassList] = useState(['header']);

    useEffect(() => {
        window.addEventListener("resize", windowResize);
        windowResize();
    }, []);

    const windowResize = () => {
        if (window.innerWidth <= 426) {
            setHeaderClassList(["header", "header-collapse"]);
        }
        else {
            setHeaderClassList(["header"]);
        }
    }

    const showHeader = () => {
        $(".header").toggleClass("header-show");
    }

    const style = {
        collapseBtn: {
            display: headerClassList.indexOf("header-collapse") !== -1 ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFF"
        }
    }

    return (
        <header className={headerClassList.join(' ')}>
            <div className="header-top-title">
                <Link to="/">Market.io</Link>
                <div onClick={showHeader} style={style.collapseBtn}>
                    <Icon icon="bars" size="lg" />
                </div>
            </div>
            <div className="header-nav">
                <div className="header-item" id="index">
                    <NavLink to="/" exact activeClassName='active-header'>
                        <Icon icon="home" />Главная
                    </NavLink>
                </div>
                <div className="header-item" id="shop">
                    <NavLink to="/shop" activeClassName='active-header'>
                        <Icon icon="shopping-cart" />Магазин
                    </NavLink>
                </div>
                <Dropdown title="Личный кабинет" icon={<Icon icon="profile" />} className="header-item header-dropdown" {...props}>
                    {props.userData !== undefined && (
                        <>
                            {/* If any errors with DOM nesting, solution is below */}
                            <Link to={"/profile/" + props.userData._id}>
                                <Dropdown.Item>
                                    <Icon icon="user" />Мой профиль
                                </Dropdown.Item>
                            </Link>
                            <Link to="/cart">
                                <Dropdown.Item>
                                    <Icon icon="shopping-cart" />Корзина
                                </Dropdown.Item>
                            </Link>
                            {props.userData !== undefined && props.userData.user_role === 2 && (
                                <Link to="/admin">
                                    <Dropdown.Item>
                                        <Icon icon="cog" />Админ панель
                                    </Dropdown.Item>
                                </Link>
                            )}
                            <Dropdown.Item divider />
                            <Link to="/logout">
                                <Dropdown.Item>
                                    <Icon icon="sign-out" />Выход
                                </Dropdown.Item>
                            </Link>
                        </>
                    )}
                    {/* Solution */}
                    <Link to="/login">
                        <Dropdown.Item>
                            <Icon icon="sign-in" />Вход
                        </Dropdown.Item>
                    </Link>

                    <Link to="/signup">
                        <Dropdown.Item>
                            <Icon icon="user-plus" />Регистрация
                        </Dropdown.Item>
                    </Link>
                </Dropdown>
                {/* <div className="header-item" id="dropdown">
                    <a
                        className="dropdown-toggle"
                        href="$"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <Icon icon="user" />
                        Личный кабинет
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {props.userData !== undefined && (
                            <div>
                                <li>
                                    <NavLink
                                        className="dropdown-item"
                                        to={"/profile/" + props.userData._id}
                                    >
                                        <i className="icon icon-user-dark"></i>
                                        {props.userData.user_firstname}{" "}
                                        {props.userData.user_lastname}
                                    </NavLink>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                            </div>
                        )}

                        {props.userData !== undefined && props.userData.user_role === 2 && (
                            <li>
                                <NavLink to="/admin" className="dropdown-item">
                                    <i className="icon icon-settings"></i>Админ панель
                                </NavLink>
                            </li>
                        )}

                        {props.userData !== undefined ? (
                            <div>
                                <li>
                                    <NavLink to="/cart" className="dropdown-item">
                                        <i className="icon icon-bag"></i>Корзина
                                    </NavLink>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/logout">
                                        <i className="icon icon-logout"></i>Выход
                                    </a>
                                </li>
                            </div>
                        ) : (
                            <div>
                                <li>
                                    <NavLink to="/login" className="dropdown-item">
                                        <Icon icon="sign-in" />Вход
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup" className="dropdown-item">
                                        <Icon icon="user-plus" />Регистрация
                                    </NavLink>
                                </li>
                            </div>
                        )}
                    </ul>
                </div> */}
            </div>
        </header >
    );
};