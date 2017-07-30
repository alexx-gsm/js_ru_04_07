import React, {Component} from 'react';
import { articleStore } from '../stores';
import ArticleList from './ArticlesList';
import { loadAllArticles } from './../AC/articles';

class Container extends Component {
    state = {
        articles: articleStore.getAll()
    };

    componentDidMount() {
        articleStore.addChangeListener(this.handleChange);

        if (!this.state.articles.length) {
            loadAllArticles();
        }
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.handleChange)
    }


    render() {
        if (this.state.loading) return <h1>...loading</h1>
        return (
            <ArticleList articles={this.state.articles} />
        )
    }

    handleChange = () => this.setState({
        articles: articleStore.getAll(),
        loading: articleStore.loading
    });

}

Container.propTypes = {};
Container.defaultProps = {};

export default Container;
