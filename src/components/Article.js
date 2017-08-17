import React from 'react'
import CommentList from './commentList'
import PropTypes from 'prop-types'

const Article = (props) => {
    const { title, toggleOpen } = props;
    return (
        <div>
            <h3 onClick = {toggleOpen}>{title}</h3>
            {getBody(props)}
        </div>
    )
};

function getBody({isOpen, comments, text}) {
    if (!isOpen) return null;

    return (
        <div>
            <p>{text}</p>
            <CommentList comments={comments}/>
        </div>
    )
}

Article.PropTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array,
    // from decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
};

export default Article;