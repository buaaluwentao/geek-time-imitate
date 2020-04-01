//http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
import React, {PureComponent} from 'react';
export default class Counter extends PureComponent {
	incrementIfOdd() {
		if (this.props.value % 2 === 0) {
			this.props.onIncrement();
		}
	}

	incrementAsync() {
		setTimeout(() => {
			this.props.onIncrement();
		}, 100);
	}

	render() {
		let { clickedTimes, multipleBase, onIncrement, onDecrement, onMultiple ,asyncGetRequest, loading} = this.props;
		console.log('loading:' + loading)
		return (
			<p>
				Clicked it: {clickedTimes} times {'   '}

				<button onClick={onIncrement}>+</button>{'   '}
				<button onClick={onDecrement}>-</button>{'   '}
				< button onClick={this.incrementIfOdd.bind(this)}> + </button>{'   '}
				< button onClick = {this.incrementAsync.bind(this)}> + </button>{'   '}

				click it to update base: {multipleBase}
				< button onClick={onMultiple} > * </button>{'   '}&nbsp;&nbsp;
				loading status {loading ? "loading ..." : 'unloading'}
				<button onClick={asyncGetRequest}> async request </button>{ ' ' }
 			</p>
		);
	}
};