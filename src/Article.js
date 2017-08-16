import React, {Component} from 'react'
import CommentList from './components/commentList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            showComments: false
        }
    }

    render() {
        const { article } = this.props
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
                <button onClick={this.handleComments}>{this.state.showComments ? 'Hide' : 'Show' } comments</button>
                {this.getComments(article)}
            </div>
        )
    };

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getComments = ({ comments }) =>
        (!this.state.showComments) ? '' :
        (comments.length) ? <CommentList comments={comments}/> :
        <i>no comments</i>


    handleComments = () => {
        this.setState({
            showComments: !this.state.showComments
        })
    }
}

export default Article