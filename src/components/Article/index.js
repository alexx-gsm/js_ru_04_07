import React from 'react'
import CommentList from '../commentList'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'

class Article extends React.Component {
    render() {
        const { title, toggleOpen } = this.props;
        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.getBody()}
                </ReactCSSTransitionGroup>
            </div>
        )
    }

    getBody = () => {
        const {isOpen, comments, text} = this.props;
        if (!isOpen) return null;

        return (
            <div>
                <p>{text}</p>
                <CommentList comments={comments}/>
            </div>
        )
    }
}


Article.PropTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array,
    // from decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
};

export default Article;