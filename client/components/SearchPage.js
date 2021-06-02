class SearchPage extends React.Component{
    
    /**
     * Main constructor
     * @param {*} props 
     */
    constructor(props){
        /* ------ */
        super(props);

        /* State object */
        this.state = {
            value: "",
            suggestions: []
        }

        /* Binding functions to THIS */
        this.handleChange = this.handleChange.bind(this);
        this.handlePress = this.handlePress.bind(this);

        /* Autocomplete list */
        this.listSuggest = [];
    }

    /**
     * Sets the autocomplete list
     * @param array list 
     */
    setList(list){
        this.listSuggest = list.map((listItem) =>
            <a href={"/search/" + listItem} className="search-reatime-result-link" key={list.indexOf(listItem)}>{listItem}</a>
        );
    }

    /**
     * Works out when the search input is typed
     * @param {*} event 
     */
    handleChange = (event) => {
        this.setState({value: event.target.value}, () => {

            /* Making the autocomplete list visible */
            if(this.state.value.length > 0){    
                $('.index-search-input').addClass('input-typing');

                /* Getting the autocomplete list from the server */
                if(this.state.value.length > 2){
                    this.getData();
                }
                else{
                    /* Cleaning the suggestion list */
                    this.setState({suggestions: []});
                }
            }
            else{
                /* Making the autocomplete list invisible */
                $('.index-search-input').removeClass('input-typing');
            }
        });
    }

    /**
     * Get autocomplete list from the server
     */
    getData = () => {

        /* Preparing data for server */
        const data = JSON.stringify({query: this.state.value});

        /* Processing data */
        const load = () => {
            let serverData = JSON.parse(request.response);

            if(serverData.response === null){
                this.setState({suggestions: []});
                return;
            }

            if(serverData.error){
                console.log(serverData.error);
                return;
            }
            this.setState({suggestions: serverData.response});
        }
        
        /* Sending data to the server */
        let request = new XMLHttpRequest();

        request.open('POST', '/fetch/data/product', true);
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener('load', load);
        request.send(data);
    }

    /**
     * Redirect to search page when ENTER is pressed
     * @param {*} event 
     */
    handlePress(event){
        if(event.key === "Enter"){
            window.location.replace('/search/'+this.state.value);
        }
    }

    /**
     * Render component
     * @returns JSX
     */
    render(){

        this.setList(this.state.suggestions);

        return (
            <div className="index-search">
                <div className="h1 index-title">Market.io</div>
                <div className="index-input-block">
                    <div className="icon icon-search index-icon"></div>
                    <input 
                        type="text" 
                        className="form-input index-search-input" 
                        onChange={this.handleChange}
                        onKeyPress={this.handlePress}
                        value={this.state.value}
                    />
                    {
                        this.state.value.length > 0 &&
                        
                        <div className="search-realtime-result">
                            <div className="search-realtime-result-container">
                                <a  href={"/search/" + this.state.value} 
                                    className="search-reatime-result-link">
                                    {this.state.value}
                                </a>
                                {this.listSuggest}
                            </div>
                         </div>
                    }
                </div>
            </div>
        );
    }
}