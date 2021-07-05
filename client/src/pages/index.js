import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";
import { Suggestions } from "../components/Index/Suggestions";
import { useHttp } from "../hooks/useHttp";

export const Index = (props) => {

    const [value, setValue] = useState('');
    const [prevValue, setPrevValue] = useState('start');
    const [suggestions, setSuggestions] = useState([]);

    const { fetching, request } = useHttp();

    const getData = (() => {
        // NEW
        // if (!fetching && value.trim().length !== 0 && !value.includes(prevValue)) {
        //     setPrevValue(value);

        //     const response = request("/api/search")
        // }


        // OLD
        // REMAKE!!!
        // if (!fetching && value.trim().length !== 0 && !value.includes(prevValue)) {
        //     setPrevValue(value);
        //     setFetching(true);

        //     const url = '/api/search/products/' + JSON.stringify(value);

        //     request(url, "GET").then((response) => {
        //         if (errors.error) {
        //             console.log(errors);
        //         }

        //         console.log(response);

        //         setSuggestions(response);
        //     });

        //     setFetching(false);
        // }
    });


    /* Works out when the text is being typed */
    const handleChange = ((event) => {
        setValue(event.target.value);

        value.length >= 2 && getData();

        if (value.length <= 2) {
            setSuggestions([]);
            setPrevValue('start');
        }
    });

    /* Redirection user to the search page when Enter is pressed */
    const handlePress = (event => event.key === 'Enter' && props.history.push('/search/' + value));

    return (
        <div className="wrapper index-wrapper">
            <div className="index-search">
                <div className="index-title">Market.io</div>
                <div className="index-input-block">
                    <Icon className="index-icon" icon="search" size="lg" />
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="index-search-input"
                        onChange={handleChange}
                        onKeyPress={handlePress}
                        value={value}
                    />

                    {value.length > 0 && <div className="icon icon-x index-clear-icon" onClick={() => setValue("")}></div>}
                    <Link to={"/search/" + value} className="btn-search">Найти</Link>

                    {value.length > 0 && (
                        <div className="search-realtime-result">
                            <div className="search-realtime-result-container">
                                <Link
                                    to={'/search/' + value}
                                    className="search-realtime-result-link">
                                    {value}
                                    <span className="text-muted search-link-tip">Введите запрос</span>
                                </Link>
                                <Suggestions suggestions={suggestions} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}