import React from 'react';
import { Comment } from './comment';
import toggleOpen from './../decorators/toggleOpen';
import PropTypes from 'prop-types';
import NewCommentForm from './NewCommentForm/';

class CommentList extends React.Component {
    render() {
        const { isOpen, toggleOpen } = this.props;
        const btnHandleComments = <button onClick={toggleOpen}>{isOpen ? 'Hide' : 'Show' } comments</button>;

        return (
            <div>
                { btnHandleComments }
                { getNewCommentForm() }
                { getBody(this.props) }
            </div>
        )
    }

}

function getBody({ isOpen, comments}) {
    if (!isOpen) return null;
    if (!comments.length) return <h3>no comments yet</h3>;
    const commentElements = comments.map( comment => <li key={comment.id}><Comment {...comment}/></li> );

    return <ul>{commentElements}</ul>;
}

function getNewCommentForm() {
    return <NewCommentForm/>
}

CommentList.PropTypes = {
    comments: PropTypes.array,
    // from decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
};

CommentList.defaultProps = {
    comments: []
};

export default toggleOpen(CommentList);
