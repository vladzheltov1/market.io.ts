import React from "react";
import { Text } from "../../components/lib";

export const Search = (props) => {

    const query = props.match.params.query;

    return (
        <div className="wrapper" style={{ maxWidth: 800 }}>
            <Text mode="h3">Результаты поиска по запросу: {query}</Text>
            {(query === undefined || query.trim().length === 0) ? (
                <Text size="16">Задан пустой поисковый запрос</Text>
            ) : (
                <Text mode="div">Запрос не пустой, всё ок</Text>
            )}
        </div>
    );
}