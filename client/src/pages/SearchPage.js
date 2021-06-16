import { useCallback, useState } from "react";
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

    /* Send a request to the server */
    /*
     * This function checks if the fetching
     * is in process and tries to send another
     * request.
    */
    const getData = useCallback(() => {
        /*
         * Conditions are:
         *  - !fetching (checking if there's no unresponded queries)
         *  - value.trim().length != 0 (checking if the value field is not empty)
         *  - !value.includes(prevValue) (checking if the new value of input
         *                                is the same as the old one)
        */
        if (!fetching && value.trim().length !== 0 && !value.includes(prevValue)) {
            /*
             * Parsing the data server sent.
             * 
             * The result might contain:
             *  - error (we should print it)
             *  - status (usual text field which dublicates the actual response status)
             *  - response (might be an array or null (not found)) 
            */
            // const data = JSON.stringify({ query: value });


            /*
             * Basic function which is called when the response comes.
             * It parses the response, checks if the response 
             * has an `error` field and sets a new state for `suggestions` (array)
            */
            // const load = () => {
            //     let serverData = JSON.parse(request.response);

            //     if (serverData.error) {
            //         console.error(serverData.error);
            //         return;
            //     }

            //     setSuggestions(serverData.response);
            // }


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

            // let request = new XMLHttpRequest();
            // request.open('POST', '/fetch/data/product', true);
            // request.open('GET', url, true);
            // request.setRequestHeader('Content-Type', 'application/json');
            // request.addEventListener('load', load);
            // request.send(data);


            /*
             * Setting `fetching` to false to let the system
             * know that the server has sent the response and
             * the new one can be sent
            */
            setFetching(false);
        }
    }, [value, prevValue, errors, request, fetching, setSuggestions, setFetching]);


    /* Works out when the text is typed */
    const handleChange = useCallback((event) => {
        setValue(event.target.value);

        if (value.length > 2) {
            getData();
        }

        if (value.length < 2) {
            setSuggestions([]);
            setPrevValue('start')
        }

    }, [value, setSuggestions, setPrevValue, getData]);


    /* Redirection user to the search page when Enter is pressed */
    // Find a way to do it differently //
    const handlePress = useCallback((event) => {
        return event.key === 'Enter' ? window.location.replace('/search/' + value) : '';
    }, [value]);


    const clearField = useCallback(() => {
        setValue("");
    }, [setValue]);

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