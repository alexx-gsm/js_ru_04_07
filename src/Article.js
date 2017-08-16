import React, {Component} from 'react'
import CommentList from './components/commentList'

class Article extends Component {
    state = {
        isOpen: false
    };

    render() {
        const { article } = this.props;
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody(article)}
            </div>
        )
    }

    getBody = (article) => {
        if (!this.state.isOpen) return null;

        return (
            <div>
                <p>{article.text}</p>
                <CommentList {...article}/>
            </div>
        )
    };

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}

export default Article