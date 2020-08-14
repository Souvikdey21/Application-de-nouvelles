export function fetchCustomNews(source, relevance) {
    //return the actual action to do
    return function(dispatch) {
        fetch("https://newsapi.org/v1/articles?source=" + source + "&sortBy=" + relevance + "&apiKey=531462607cdb4fd49396baf293c8515e")
            .then(res => {
                return res.json();

            })
            .then(res => {
                // console.log(res)
                dispatch({ type: "FETCH_CUSTOM_NEWS", payload: res.articles });
            })
            .catch(err => {
                console.log(err);
            })

    }
}