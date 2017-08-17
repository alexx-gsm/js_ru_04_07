import React from 'react'
import { Comment } from './comment'
import toggleOpen from './../decorators/toggleOpen'

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
    if (!comments || !comments.length) return <h3>no comments yet</h3>;
    const commentElements = comments.map( comment => <li key={comment.id}><Comment {...comment}/></li> );

    return <ul>{commentElements}</ul>;
}

export default toggleOpen(CommentList);