import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Index } from "../pages";
import { NotFound } from "../pages/404";
import { Cart } from "../pages/cart";
import { Login } from "../pages/login";
import { Profile } from "../pages/profile";
import { ResetPassword } from "../pages/resetPassword";
import { Signup } from "../pages/signup";

export const Router = () => {

    const { getUserData } = useAuth();
    const loggedUser = getUserData();

    return (
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/user/reset" component={ResetPassword} />
            <Route path="/cart" component={Cart} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/profile" >
                <Redirect to={"/profile/" + loggedUser._id} />
            </Route>
            <Route component={NotFound} />
        </Switch>
    )
}