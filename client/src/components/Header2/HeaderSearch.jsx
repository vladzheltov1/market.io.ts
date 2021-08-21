import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../lib";
import {HeaderAutocomplete} from "./HeaderAutocomplete";

export const HeaderSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const history = useHistory();


    const handleChange = (event) => {
        if(!event.target) return;
        setSearchValue(event.target.value);
    }

    const search = () => {
        if (!searchValue) return;
        history.push("/search?query=" + searchValue);
    }

    return (
        <div style={{position: "relative", width: "100%"}}>
            <div className="header__search--group">
                <input
                    type="text"
                    className="header__search--input"
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Поиск"
                />
                <Button color="red" icon="search" onClick={() => search()}></Button>
            </div>
            <HeaderAutocomplete />
        </div>
    )
}