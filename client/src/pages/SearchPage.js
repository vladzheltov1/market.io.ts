import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";
import { useHttp } from "../components/hooks/http.hook";
import { Suggestions } from "../components/Suggestions";


export const SearchPage = () => {

    /* Hooks */
    const [value, setValue] = useState('');
    const [prevValue, setPrevValue] = useState('start');
    const [suggestions, setSuggestions] = useState([]);
    const [fetching, setFetching] = useState(false);

    const { request, errors } = useHttp();

    const getData = (() => {
        if (!fetching && value.trim().length !== 0 && !value.includes(prevValue)) {
            /*
             * Parsing the data server has sent.
             * 
             * The result might contain:
             *  - error (we should print it)
             *  - status (usual text field which dublicates the actual response status)
             *  - response (might be an array or null (not found)) 
            */
            // const data = JSON.stringify({ query: value });


            /*
             * Setting previous value helps check if the
             * new input value is the same as the old one.
             * There's no point in sending a new request
             * because the results will be the same
             * 
             * This property saves the server from endless queries
            */
            setPrevValue(value);


            /*
             * Flag `fetching` stores boolean value and 
             * helps to understand if fetching process has
             * not been finished yet and if so, the system 
             * doesn't send a new request in order to help 
             * server and avoid probles when the first request
             * comes after the second one
             * 
             * This property saves the server from endless queries
            */
            setFetching(true);


            /* 
             * Sending a simple ajax query to the server 
             * to get the autocomplete list based on 
             * user's input
            */
            const url = '/api/search/products/' + JSON.stringify(value);

            request(url, "GET").then((response) => {
                if (errors.error) {
                    console.log(errors);
                }

                console.log(response);

                setSuggestions(response);
            });

            setFetching(false);
        }
    });


    /* Works out when the text is typed */
    const handleChange = ((event) => {
        setValue(event.target.value);

        value.length >= 2 && getData();

        if (value.length <= 2) {
            setSuggestions([]);
            setPrevValue('start');
        }

    });


    /* Redirection user to the search page when Enter is pressed */
    // Find a way to do it differently //
    const handlePress = (event => event.key === 'Enter' && window.location.replace('/search/' + value));

    const clearField = () => setValue("");

    /* Render component */
    return (
        <div className="container index-wrapper">
            <div className="index-search">
                <div className="h1 index-title">Market.io</div>
                <div className="index-input-block">
                    <Icon className="index-icon" icon="search" size="lg" />
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="form-input index-search-input"
                        onChange={handleChange}
                        onKeyPress={handlePress}
                        value={value}
                    />
                    {
                        value.length > 0 && <div className="icon icon-x index-clear-icon" onClick={clearField}></div>
                    }
                    <Link to={"/search/" + value} className="btn btn-red btn-search">Найти</Link>

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