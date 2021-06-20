import React from "react";
import { Route, Switch } from "react-router-dom";
import { AdminIndex } from "../../pages/admin/Admin.index";
import { LoginPage } from "../../pages/LoginPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { SearchPage } from "../../pages/SearchPage";
import { ShopPage } from "../../pages/ShopPage";
import { SignupPage } from "../../pages/SignupPage";
import { useAuth } from "../hooks/auth.hook";

export const useRoutes = () => {

    const { getUserData } = useAuth();
    const userData = getUserData();

    return (
        <Switch>
            <Route path="/" exact component={SearchPage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/product/:id" component={SearchPage} />

            {
                !userData && (
                    <>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/signup" component={SignupPage} />
                    </>
                )
            }
            {
                userData && (
                    <>
                        <Route path="/profile" component={ProfilePage} />
                        {
                            userData.role === 2 && (
                                <>
                                    <Route path="/admin" component={AdminIndex} />
                                </>
                            )
                        }
                    </>
                )
            }
            <Route component={NotFoundPage} />
            {/* <Redirect to="/" /> */}
        </Switch>
    )
}