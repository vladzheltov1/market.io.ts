import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Router } from "./scripts/Router";

export default function App() {

    const routes = Router();

    return (
        <BrowserRouter>
            <Header />
            {routes}
        </BrowserRouter>
    )
}