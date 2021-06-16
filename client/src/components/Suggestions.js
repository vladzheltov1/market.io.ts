import React from "react";
import { Link } from "react-router-dom";

export const Suggestions = (props) => {
    return (
        <div>
            {props.suggestions && (
                props.suggestions.map((listItem) =>
                (
                    typeof listItem == "object"
                        ?
                        (<Link
                            to={listItem.link}
                            className="search-realtime-result-link search-direct-link"
                            key={props.suggestions.indexOf(listItem)}>
                            {listItem.title}
                            <span className="text-muted search-link-tip">Магазин</span>
                        </Link>)
                        :
                        (<Link
                            to={'/search/' + listItem}
                            className="search-realtime-result-link"
                            key={props.suggestions.indexOf(listItem)}>
                            {listItem}
                            <span className="text-muted search-link-tip">Поиск</span>
                        </Link>)
                )
                ))
            }
        </div>
    );
};