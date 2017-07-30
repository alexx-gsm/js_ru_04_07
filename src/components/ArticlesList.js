import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import { loadAllArticles } from './../AC/articles'

class ArticlesList extends Component {
    render() {
        const {articles, toggleOpenItem, openItemId, } = this.props
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>
        ));

        return (
            <section>
                <ul>
                    {articleElements}
                </ul>
                <hr/>
                <button onClick={this.handleReload}>reload</button>
            </section>

        )
    }
    handleReload = () => loadAllArticles();
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
};

export default accordion(ArticlesList)