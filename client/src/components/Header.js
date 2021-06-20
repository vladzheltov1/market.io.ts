import * as $ from "jquery";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';
import { HeaderDropDown } from "./HeaderDropdown";

export const Header = (props) => {
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
                <HeaderDropDown />
            </div>
        </header >
    );
};