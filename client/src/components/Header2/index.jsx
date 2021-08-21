import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";
import { categories } from "../../scripts/Category";
import { Text } from "../lib";
import { HeaderDropdown } from "./HeaderDropdown";
import { HeaderSearch } from "./HeaderSearch";
import "./style.scss";

export const Header2 = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__inner">
                    <div className="header__row header__top--row">
                        <Link to="/">
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
                            {categories.map(category => (
                                <div className="header__nav--item"><Link to={"/shop?category=" + category.value}>{category.label}</Link></div>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}