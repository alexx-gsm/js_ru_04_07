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
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        return (
            <div>
                <p>{this.props.article.text}</p>
                <button onClick={this.handleComments}>{this.state.showComments ? 'Hide' : 'Show' } comments</button>
                {this.getComments()}
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getComments = () => {
        const { article: { comments = [] } } = this.props;
        return  (!this.state.showComments) ? '' :
                (comments.length) ? <CommentList comments={comments}/> : <i>no comments</i>

    }

    handleComments = () => {
        this.setState({
            showComments: !this.state.showComments
        })
    }
}

/*
function Article(props) {
    const { article } = props
    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
        </div>
    )
}
*/

export default Article