import { combineReducers } from 'redux';

const handleClickedTimes = (clickedTimes = 0, action) => {
	switch (action.type) {
		case 'INCREMENT': {
			return clickedTimes + 1;
		}

		default: {
			return clickedTimes;
		}
	}
}

const handleMultipleBase = (multipleBase = 1, action) => {
	switch (action.type) {
		case 'MULTIPLICATION': {
			return multipleBase * 2;
		}

		default: {
			return multipleBase;
		}
	}
}

const handleAsyncGetRequest = (preState={loading:false}, action) => {
	switch (action.type) {
		case 'FETCH_GETS_RES': {
			var {err, data} = action.payload;
			return {
				loading: false,
				err: err,
				data: data,
			};
		}

		case 'FETCH_GETS_REQ': {
			if (!preState.loading) {
				return {
					loading: true,
				};
			}else {
				return preState;
			}
		}

		default:
			return preState;
	}
}

//对象key对应state的属性
export default combineReducers({
	clickedTimes: handleClickedTimes,
	multipleBase: handleMultipleBase,
	asyncGetRequest: handleAsyncGetRequest,
})