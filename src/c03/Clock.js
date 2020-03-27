import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidUpdate() {
        console.log('time updated ...');
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return <div>当前时间为{this.state.date.toLocaleString()}</div>
    }
}