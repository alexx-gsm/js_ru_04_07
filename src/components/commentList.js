import React from 'react'
import { Comment } from './comment'

class CommentList extends React.Component {
    state = {
        isOpen: false
    };

    render() {
        const button = <button onClick={this.handleComments}>{this.state.isOpen ? 'Hide' : 'Show' } comments</button>;

        return (
            <div>
                { button }
                { this.getBody() }
            </div>
        )
    }

    getBody = () => {
        if (!this.state.isOpen) return null;
        const { comments } = this.props;
        if (!comments || !comments.length) return <h3>no comments yet</h3>;

        return (
            <ul>
                {comments.map( comment => <li key={comment.id}><Comment {...comment}/></li> )}
            </ul>
        );
    };

    handleComments = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList;