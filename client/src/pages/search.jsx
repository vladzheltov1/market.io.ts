import React from "react";

export const Search = (props) => {

    const query = props.match.params.query;



    return (
        <div className="wrapper" style={{ maxWidth: 800 }}>
            <h3>Результаты поиска по запросу: {query}</h3>
            {(query === undefined || query.trim().length === 0) ? (
                <span style={{ fontSize: 16 }}>Задан пустой поисковый запрос</span>
            ) : (
                <div>Запрос не пустой, всё ок</div>
            )}

        </div>
    );
}