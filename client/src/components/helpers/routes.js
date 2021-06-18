import React from "react";
import { Route, Switch } from "react-router-dom";
import { AdminIndex } from "../../pages/AdminPanel/Admin.index";
import { LoginPage } from "../../pages/LoginPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { SearchPage } from "../../pages/SearchPage";
import { ShopPage } from "../../pages/ShopPage";
import { SignupPage } from "../../pages/SignupPage";
import { Header } from "../Header";

export const useRoutes = isLoggedIn => {
    if (isLoggedIn) {
        return (
            <Switch>
                <Header />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <SearchPage />
            </Route>
            <Route path="/shop">
                <ShopPage />
            </Route>
            <Route path="/product/:id">
                <SearchPage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>

            {/* перенести в isLoggedIn */}

            <Route path="/admin">
                <AdminIndex />
            </Route>

            {/* ---------------------- */}
            <Route path="/signup">
                <SignupPage />
            </Route>
            <NotFoundPage />
        </Switch>
    )
}