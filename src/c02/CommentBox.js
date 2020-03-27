import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import withTimer from "../c01/WithTimer";
import "./CommentBox.css";


export class CommentBox extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            'comments': [
                {
                  author: "Nate",
                  content: "Hello React! This is a sample comment.",
                },
                { author: "Kevin", content: "Hello Redux!" },
                { author: "Bood", content: "Hello Rekit!" },
            ],
        };
    }

    submittedComment(comment) {
        // var comments = this.state.comments.slice(0);
        // comments.push(comment);
        this.setState({
            'comments': [...this.state.comments, comment]
        });
    }

    render() {
        return <div><CommentList comments={this.state.comments}/><CommentForm submittedComment={this.submittedComment.bind(this)}/></div>
    }
}

export default withTimer(CommentBox);