import React from 'react'
import CommentList from './commentList'
import toggleOpen from './../decorators/toggleOpen'

const Article = (props) => {
    const { article, toggleOpen } = props;
    return (
        <div>
            <h3 onClick = {toggleOpen}>{article.title}</h3>
            {getBody(props)}
        </div>
    )
};

function getBody({isOpen, article}) {
    if (!isOpen) return null;

    return (
        <div>
            <p>{article.text}</p>
            <CommentList {...article}/>
        </div>
    )
};

export default toggleOpen(Article);