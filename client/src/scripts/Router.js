import React from "react";
import { Route, Switch } from "react-router-dom";
import { Index } from "../pages";
import { NotFound } from "../pages/404";

export const Router = (props) => {
    return (
        <Switch>
            <Route path="/" exact component={Index} />
            <Route component={NotFound} />
        </Switch>
    )
}