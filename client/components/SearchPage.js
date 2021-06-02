const SearchPage = () => {


    /* Hooks */
    const [value, setValue] = React.useState('');
    const [suggestions, setSuggestions] = React.useState([]);
    const [fetching, setFetching] = React.useState(false);
    const [classList, setClassList] = React.useState(['form-input', 'index-search-input']);

    /* Make a request to the server */
    const getData = React.useCallback(() => {
        if(!fetching && value != ""){
            const data = JSON.stringify({ query: value });

            const load = () => {
                let serverData = JSON.parse(request.response);

                if (serverData.error) {
                    console.error(serverData.error);
                    return;
                }

                setSuggestions(serverData.response);
            }

            
            setFetching(true);
            
            let request = new XMLHttpRequest();
            request.open('POST', '/fetch/data/product', true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.addEventListener('load', load);
            request.send(data);

            setFetching(false);
        }
    }, [setSuggestions, setFetching]);

    React.useEffect(() => {
    
    }, [value]);
    
    
    /* Works out when the text is typed */
    const handleChange = React.useCallback((event) => {
        setValue(event.target.value);

        console.log('value 2', value);

        if(value.length > 0){
            setClassList(['form-input', 'index-search-input', 'input-typing']);

            if (value.length > 2) {
                getData();
            }

            return;
        }

        setClassList(['form-input', 'index-search-input']);

    }, [getData]);
    

    /* Redirection user to the search page when Enter is pressed */
    const handlePress = React.useCallback((event) => {
        // Find a way to do it differently
        return event.key === 'Enter' ? window.location.replace('/search/' + value) : '';
        // ---------------------------- //
    }, []);

    console.log('value 3', value);

    /* Render component */
    return (
        <div className="index-search">
            <div className="h1 index-title">Market.io</div>
            <div className="index-input-block">
                <div className="icon icon-search index-icon"></div>
                <input
                    type="text"
                    className={classList.join(' ')}
                    onChange={handleChange}
                    onKeyPress={handlePress}
                    value={value}
                />
                {value.length > 0 && (
                    <div className="search-realtime-result">
                        <div className="search-realtime-result-container">
                        <a
                            href={'/search/' + value}
                            className="search-realtime-result-link"
                        >
                            {value}
                        </a>
                        {suggestions &&
                            suggestions.map((listItem) => (
                                <a
                                    href={'/search/' + listItem}
                                    className="search-realtime-result-link"
                                    key={suggestions.indexOf(listItem)}
                                >
                                    {listItem}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}