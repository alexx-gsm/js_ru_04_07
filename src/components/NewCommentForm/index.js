import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { validFields } from './valid-fields';
import toggleOpen from './../../decorators/toggleOpen';
import './style.less';

class NewCommentForm extends Component {
    state = {
        user: '',
        comment: '',
    };

    componentDidMount() {
        validFields.forEach(f => {
            const keyMin = f.name + '_min';
            const keyMax = f.name + '_max';
            const keyMinValid = f.name + '_min_valid';
            const keyMaxValid = f.name + '_max_valid';

            this.setState({
                [keyMin]: f.min,
                [keyMax]: f.max,
                [keyMinValid]: true,
                [keyMaxValid]: true
            })
        })
    }

    render() {
        const { isOpen, toggleOpen } = this.props;
        const form = isOpen ? this.getBody() : null;

        return (
            <div>
                <button onClick={toggleOpen}>Add new comment</button>
                { form }
            </div>
        );
    }

    getBody() {
        return (
            <div className="form">
                <div className="form__group">
                    <label className="form__label">Message:</label>
                    <textarea
                        name="comment"
                        cols="30"
                        rows="10"
                        className="form__text"
                        onChange={this.handleValue('comment')}
                        value={this.state.comment}
                    />
                    { this.handleError('comment') }
                </div>
                <div className="form__group">
                    <label className="form__label">Enter your name:</label>
                    <input
                        type="text"
                        value={this.state.name}
                        className="form__input"
                        onChange={this.handleValue('user')}
                    />
                    { this.handleError('user') }
                </div>
                <div className="form__group form__group_submit">
                    <button
                        onClick={this.handleSubmit}
                        className="btn btn-primary"
                        disabled={this.checkSubmit()}
                    >
                        Send
                    </button>
                </div>
            </div>
        )
    }

    handleValue = (fieldName) => (e) => {
        const {name, min, max} = validFields.find(f => f['name'] === fieldName);

        const fieldValue = e.target.value;
        const keyMinValid = name + '_min_valid';
        const keyMaxValid = name + '_max_valid';

        this.setState({
            [keyMinValid]: fieldValue.length < min,
            [keyMaxValid]: fieldValue.length > max,
            [name]: fieldValue
        });
    };

    handleError = (fieldName) => {
        const keyMin = fieldName + '_min';
        const keyMax = fieldName + '_max';
        const keyMinValid = fieldName + '_min_valid';
        const keyMaxValid = fieldName + '_max_valid';

        const classError = (this.state[keyMinValid])
            ? 'minValueError' : (this.state[keyMaxValid])
            ? 'maxValueError' : '';

        return (
            <div className={`form__validation ${classError}`}>
                <span className="minValue">{this.state[keyMin]}/</span>
                <span className="currentValue">{this.state[fieldName].length}</span>
                <span className="maxValue">/{this.state[keyMax]}</span>
            </div>
        )
    };

    checkSubmit = () => {
        const res = validFields.every(f => {
            const keyMinValid = f.name + '_min_valid';
            const keyMaxValid = f.name + '_max_valid';

            return !(this.state[keyMinValid]) && !this.state[keyMaxValid];
        });
        return !res;
    };

    handleSubmit = () => {
        console.log('---', this.state)
    }
}

NewCommentForm.propTypes = {
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
};
NewCommentForm.defaultProps = {};

export default toggleOpen(NewCommentForm);
