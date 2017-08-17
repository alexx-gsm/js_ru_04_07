import React from 'react'
import Article from './Article'
import accordion from './../decorators/accordion'
import PropTypes from 'prop-types'

class ArticlesList extends React.Component {
    render() {
        const { articles, openItemId, toggleItem } = this.props;
        const articleElements = articles.map(article =>
            <li key = {article.id}>
                <Article {...article}
                         isOpen = {openItemId === article.id }
                         toggleOpen = {toggleItem(article.id)}
                />
            </li>
        );

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticlesList.PropTypes = {
    // from decoration
    openItemId: PropTypes.bool,
    toggleItem: PropTypes.func,
    // from props
    articles: PropTypes.array
};

ArticlesList.defaultProps = {
    articles: []
};

export default accordion(ArticlesList)