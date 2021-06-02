class SearchPage extends React.Component{
    
    /**
     * Main constructor
     * @param {*} props 
     */
    constructor(props){
        /* --- */
        super(props);

        /* State object */
        this.state = {
            value: "",
            suggestions: []
        }

        /* Binding functions to THIS */
        this.handleChange = this.handleChange.bind(this);
        this.handlePress = this.handlePress.bind(this);

        /* Creating and setting the autocomplete list */
        this.listSuggest = [];
        this.setList(this.state.suggestions);
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
     * Works out when the component is rerendered
     */
    componentDidUpdate = () => {
        this.setList(this.state.suggestions);
    }

    /**
     * Works out when the search input is typed
     * @param {*} event 
     */
    handleChange = (event) => {
        this.setState({value: event.target.value}, () => {

            /* Makeing the autocomplete list visible */
            if(this.state.value.length > 0){    
                document.querySelector('.index-search-input').classList.add('input-typing');
                return;
            }

            /* Getting the autocomplete list from the server */
            if(this.state.value.length > 2){
                this.getData();
                return;
            }

            /* Makeing the autocomplete list invisible */
            document.querySelector('.index-search-input').classList.remove('input-typing');
        });
    }

    /**
     * Get autocomplete list from the server
     */
    getData = () => {
        const data = JSON.stringify({query: this.state.value});
        const load = () => {
            let serverData = JSON.parse(request.response);

            if(serverData.status !== 200){
                data !== null ? console.log(serverData.error) : "";
                return;
            }
            console.log("data", serverData);
            
            // Тут ошибка
            this.setState({suggestions: serverData.response}, () => {
                console.log("state is ", this.state.suggestions);
            }).bind(this);
        }
        
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

        console.log("render()", this.state.suggestions);

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