import React from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article/'
import accordion from './../decorators/accordion'
import PropTypes from 'prop-types'
import ArticleForm from './ArticleForm'

class ArticlesList extends React.Component {
    state = {
        newArticleForm: false
    };

    articleRefs = [];

    render() {
        const { articles, openItemId, toggleItem } = this.props;
        const articleElements = articles.map(article =>
            <li key = {article.id}>
                <Article
                     ref = {this.setArticleRef}
                     {...article}
                     isOpen = {openItemId === article.id }
                     toggleOpen = {toggleItem(article.id)}
                />
            </li>
        );
        const articleForm = this.state.newArticleForm ? <ArticleForm articles={articles}/> : null;

        return (
            <div>
                <button onClick={this.addNewArticle} >Add new article</button>
                {articleForm}
                <ul ref = {this.setContainerRef}>
                    {articleElements}
                </ul>
            </div>

        )
    }

    addNewArticle = () => {
        this.setState({
            newArticleForm: !this.state.newArticleForm
        })
    };

    setContainerRef = (container) => {
        this.container = container;
        console.log(container);
    };

    setArticleRef = (articleRef) => {
        this.articleRefs.push(articleRef);
    };

    componentDidMount() {
        console.log(this.articleRefs);
        console.log('nodes ', this.articleRefs.map(findDOMNode))
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