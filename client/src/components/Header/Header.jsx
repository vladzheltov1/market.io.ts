import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "rsuite";
import { HeaderDropdown } from "./HeaderDropdown";

export const Header = () => {

    const _MOBILE = "MOBILE";
    const _DESKTOP = "DESKTOP";

    const [view, setView] = useState(_DESKTOP);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", windowResize);
        windowResize();
    }, []);

    const windowResize = () => {
        if (window.innerWidth <= 426) setView(_MOBILE);
        else {
            setView(_DESKTOP);
            setOpened(false);
        }
    }

    const barsStyle = {
        display: view === _MOBILE ? "flex" : "none"
    }

    return (
        <header className={"header " + (view === _MOBILE ? "header-collapse" : "")}>
            <div className="header-top-title">
                <Link to="/">Market.io</Link>
                <div className="menuButton" style={barsStyle} onClick={() => setOpened(!opened)}>
                    <Icon icon="bars" size="lg" />
                </div>
            </div>
            <div className={"header-nav" + (view === _MOBILE && opened ? " header-nav-opened" : "")}>
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
                <HeaderDropdown />
            </div>
        </header>
    )
}