import React from 'react'
import Article from './Article'

function ArticleList({ articles }) {
    const articleElements = articles.map(article => <li key = {article.id}><Article article = {article} /></li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default ArticleList