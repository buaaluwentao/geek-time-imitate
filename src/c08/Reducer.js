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

export default combineReducers({
	clickedTimes: handleClickedTimes,
	multipleBase: handleMultipleBase,
})

//export default reducer1;