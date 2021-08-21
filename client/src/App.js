import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header2 } from "./components/Header2";
import { Router } from "./scripts/Router";

export default function App() {

    const routes = Router();

    return (
        <BrowserRouter>
            <Header2 />
            {routes}
        </BrowserRouter>
    )
}