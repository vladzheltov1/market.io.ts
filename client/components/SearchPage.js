class SearchPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: "",
            suggestions: ["что-то 1", "что-то 2"]
        }

        this.listSuggest = this.state.suggestions.map((listItem) =>
            <a href={"/search/" + listItem} className="search-reatime-result-link" key={this.state.suggestions.indexOf(listItem)}>{listItem}</a>
        );

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value}, () => {
            if(this.state.value.length > 0){    
                document.querySelector('.index-search-input').classList.add('input-typing');
            }
            else{
                document.querySelector('.index-search-input').classList.remove('input-typing');
            }
        });
    }

    render(){
        return (
            <div className="index-search">
                <div className="h1 index-title">Market.io</div>
                <div className="index-input-block">
                    <div className="icon icon-search index-icon"></div>
                    <input 
                        type="text" 
                        className="form-input index-search-input" 
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                    {
                        this.state.value.length > 0
                        ?
                        <div className="search-realtime-result">
                            <div className="search-realtime-result-container">
                                <a href={"/search/" + this.state.value} className="search-reatime-result-link">{this.state.value}</a>
                                {this.listSuggest}
                            </div>
                         </div>
                        :
                        ''
                    }
                </div>
            </div>
        )
    }
}