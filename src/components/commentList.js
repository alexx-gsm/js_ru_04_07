import React from 'react'

class CommentList extends React.Component {
    render() {
        const { comments } = this.props;
        console.log(comments);

        const commentList = comments.map( comment => (
                <li key={comment.id}>
                    <p>author: <i>{comment.user}</i></p>
                    <div>{comment.text}</div>
                </li>
            )
        );

        return (
            <ul>{commentList}</ul>
        )
    }
}


export default CommentList;