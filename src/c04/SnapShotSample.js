import React from "react";
import "./SnapshotSample.css";

export default class SnapshotSample extends React.PureComponent {
  state = {
    messages: []
  };

  handleNewMessage() {
    this.setState(prev => ({
      messages: [
        `msg ${prev.messages.length}`,
        ...prev.messages
      ]
    }));
  }

  componentDidMount() {
    for (let i = 0; i < 20; i++) {
        this.handleNewMessage();
    }

    this.interval = window.setInterval(() => {
      if (this.state.messages.length > 200) {
        window.clearInterval(this.interval);
        return;
      }
      this.handleNewMessage();
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  getSnapshotBeforeUpdate() {
    return this.rootNode.scrollHeight;
  }

  componentDidUpdate(prePros, preState, scrollHeight) {
      const scrollTop = this.rootNode.scrollTop;
      console.log('scrollTop='+scrollTop)
      if(scrollTop<5) return;
      this.rootNode.scrollTop = scrollTop + (this.rootNode.scrollHeight - scrollHeight);
  }

  render() {
    return (
      <div
        className="snapshot-sample"
        ref={n => (this.rootNode = n)}
      >
        {this.state.messages.map((msg, index) => <div key={index}>{msg}</div>)}
      </div>
    );
  }
}