import React from "react";
//import PropTypes from "prop-types";

export default class CommentForm extends React.PureComponent {
  

  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
    this.onChange = this.handleChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  }

  handleSubmit(event) {
    this.props.submittedComment({
        'author': 'lwt',
        'content': this.textareaRef.current.value,
    });

    this.textareaRef.current.value = '';
  }

  render() {
    return (
      <div className="comment-form">
        <form>
          <textarea  ref={this.textareaRef} style={{ display: "block", width: "100%" }} onChange={this.onChange}/>
          <button onClick={this.onSubmit} >Submit</button>
        </form>
      </div>
    );
  }
}