const Suggestions = (props) => {
    return(
        <div>
            {props.suggestions && (
                props.suggestions.map((listItem) => 
                    (
                        typeof listItem == "object"
                        ?
                            (<a
                                href={listItem.link}
                                className="search-realtime-result-link search-direct-link"
                                key={props.suggestions.indexOf(listItem)}>
                                {listItem.title}
                                <span className="text-muted search-link-tip">Магазин</span>
                            </a>)
                        :
                            (<a
                                href={'/search/' + listItem}
                                className="search-realtime-result-link"
                                key={props.suggestions.indexOf(listItem)}>
                                {listItem}
                                <span className="text-muted search-link-tip">Поиск</span>
                            </a>)
                    )
                ))
            }
        </div>
    );
};