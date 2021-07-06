import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Index } from "../pages";
import { NotFound } from "../pages/404";
import { AddProduct } from "../pages/addProduct";
import { Cart } from "../pages/cart";
import { Login } from "../pages/login";
import { Profile } from "../pages/profile";
import { ResetPassword } from "../pages/resetPassword";
import { Search } from "../pages/search";
import { Shop } from "../pages/shop";
import { Signup } from "../pages/signup";

export const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/user/reset" component={ResetPassword} />
            <Route path="/cart" component={Cart} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/shop" component={Shop} />
            <Route path="/search/:query?" component={Search} />
            <Route path="/add/product" component={AddProduct} />
            <Route path="/profile" >
                <Redirect to={"/"} />
            </Route>
            <Route component={NotFound} />
        </Switch>
    )
}