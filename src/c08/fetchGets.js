function requestGets(url) {
    return {
        type: 'FETCH_GETS_REQ',
        url:url
    };
}

function receiveGets(url, result) {
    return {
        type: 'FETCH_GETS_RES',
        url: url,
        payload: result,
    };
}

const fetchGets = (url) => (dispatch, getState) => {
    dispatch(requestGets(url));
    return fetch(url).then(function(response) {
        setTimeout(() => {
            dispatch(receiveGets(url, {
                data: "hello, world",
            }));
        }, 2000);
    }, function(err) {
        dispatch(receiveGets(url, {
            err: err,
        }));
    });
}

export default fetchGets;