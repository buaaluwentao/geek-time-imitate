import React from "react";
import PropTypes from 'prop-types';

export default class CommentItem extends React.PureComponent {
    static propsTypes = {
        comment: PropTypes.shape({
            author: PropTypes.string,
            content: PropTypes.string,
        }),
    }

    render() {
        const {author,content} = this.props.comment;
        return (
            <div className="comment-item">
                <span className="avatar" />
                    <a href="#">{author}</a>
                <p>{content}</p>
            </div>
        )
    }
}