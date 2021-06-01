class SearchPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: ""
        }

        this.suggestions = [];

        this.handleChange = this.handleChange.bind(this);
        this.handlePress = this.handlePress.bind(this);
        this.changeList = this.changeList.bind(this);
    }

    changeList(){
        this.listSuggest = this.suggestions.map((listItem) =>
            <a href={"/search/" + listItem} className="search-reatime-result-link" key={this.suggestions.indexOf(listItem)}>{listItem}</a>
        );
    }

    handleChange(event){
        this.setState({value: event.target.value}, () => {
            if(this.state.value.length > 0){    
                document.querySelector('.index-search-input').classList.add('input-typing');

                if(this.state.value.length > 2){
                    const data = JSON.stringify({query: this.state.value});
        
                    let request = new XMLHttpRequest();
        
                    request.open('POST', '/fetch/data/product', true);
                    request.setRequestHeader("Content-Type", "application/json");
        
                    request.addEventListener('load', function(){
                        let serverData = JSON.parse(request.response);
        
                        if(serverData.status !== 200) document.querySelector('.form-error').innerHTML = serverData.error;
                        else{  
                            () => this.suggestions = serverData.response;
                            () => this.changeList();
                        }
                    });
                    request.send(data);
                }

            }
            else{
                document.querySelector('.index-search-input').classList.remove('input-typing');
            }
        });
    }
    handlePress(event){
        if(event.key === "Enter"){
            window.location.replace('/search/'+this.state.value);
        }
    }

    render(){
        console.log("render()");
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
                <div className="form-error"></div>
            </div>
        )
    }
}