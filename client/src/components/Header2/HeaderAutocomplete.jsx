import React from "react";
import {Link} from "react-router-dom";

export const HeaderAutocomplete = ({data = []}) => {
    return (
        <>
            {data.length !== 0 && (
                <div className="header__autocomplete--wrapper">
                    {data.map((item) => (
                        <Link to={"/search?query=" + item} className="header__autocomplete--item">
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}