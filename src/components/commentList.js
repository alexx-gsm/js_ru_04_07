import React from 'react'
import { Comment } from './comment'
import toggleOpen from './../decorators/toggleOpen'
import PropTypes from 'prop-types'

const CommentList = (props) => {
    const { isOpen, toggleOpen } = props;
    const button = <button onClick={toggleOpen}>{isOpen ? 'Hide' : 'Show' } comments</button>;
    return (
        <div>
            { button }
            { getBody(props) }
        </div>
    )
};

function getBody({ isOpen, comments}) {
    if (!isOpen) return null;
    if (!comments.length) return <h3>no comments yet</h3>;
    const commentElements = comments.map( comment => <li key={comment.id}><Comment {...comment}/></li> );

    return <ul>{commentElements}</ul>;
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
