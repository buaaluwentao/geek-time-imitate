import React from "react";
import CommentItem from "./CommentItem";
import PropTypes from 'prop-types';

export default class CommentList extends React.PureComponent {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    return (
      <div className="comment-list">
        {this.props.comments.map((comment, index) => <CommentItem key={index} comment={comment} ></CommentItem>)}
      </div>
    );
  }
}