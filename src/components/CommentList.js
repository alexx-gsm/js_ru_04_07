import React  from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

function CommentList(props) {
    const { isOpen, toggleOpen } = props
    return (
        <div>
            <button onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</button>
            {getBody(props)}
        </div>
    )
}

function getBody({ isOpen }) {
    const comments = this.props.article.getRelation('comments');
    if (!isOpen) return null;
    if (!comments.length) return <h3>No comments yet</h3>

    return (
        <ul>
            {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
        </ul>
    )
}

CommentList.defaultProps = {
    comments: [],
    toggleOpen: PropTypes.func,
    isOpen: PropTypes.bool
}

export default toggleOpen(CommentList)