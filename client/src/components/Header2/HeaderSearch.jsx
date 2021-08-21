import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../lib";

export const HeaderSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const history = useHistory();


    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const search = () => {
        if (!searchValue) return;

        history.push("/search?query=" + searchValue);
    }

    return (
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
    )
}