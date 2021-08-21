import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "rsuite";
import { categories } from "../../scripts/Category";
import { Text, Image } from "../lib";
import { HeaderDropdown } from "./HeaderDropdown";
import { HeaderSearch } from "./HeaderSearch";
import "./style.scss";

export const Header2 = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__inner">
                    <div className="header__row header__top--row">
                        <Link to="/" style={{display: "flex", gap: 5, alignItems: "center"}}>
                            <Image width={40} src="https://klike.net/uploads/posts/2020-07/1593671357_15.jpg"/>
                            <Text mode="h2" className="header__brand">Market.io</Text>
                        </Link>
                        <HeaderSearch />
                        <nav className="header__nav">
                            <Link to="/cart" className="header__nav--item">
                                <Icon icon="shopping-cart" size="lg" />
                                <Text>Корзина</Text>
                            </Link>
                            <Link to="/purchases" className="header__nav--item">
                                <Icon icon="shopping-basket" size="lg" />
                                <Text>Заказы</Text>
                            </Link>
                        </nav>
                        <HeaderDropdown />
                    </div>
                    <div className="header__row">
                        <nav className="header__nav">
                            <NavLink
                                to="/shop?category=all"
                                className="header__nav--item"
                            >
                                Все товары
                            </NavLink>
                            <div>|</div>
                            {categories.map(category => (
                                <NavLink
                                    to={"/shop?category=" + category.value}
                                    className="header__nav--item"
                                >
                                    {category.label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}