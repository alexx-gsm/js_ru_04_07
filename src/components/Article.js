import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import {deleteArticle} from './../AC/articles'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    render() {
        const { article, toggleOpen } = this.props;
        return (
            <div>
                <h3 onClick = {toggleOpen}>
                    {article.title}
                    <a href="#" onClick={this.handleDelete}>Delete me, please</a>
                </h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article, isOpen } = this.props;
        if (!isOpen) return null;
        return (
            <div>
               <p>{article.text}</p>
                <CommentList comments = {article.comments}/>
            </div>
        )
    }
    handleDelete = (e) => {
        e.preventDefault();
        deleteArticle(this.props.article.id);
    }
}

export default Article