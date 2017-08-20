import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class ArticleForm extends Component {
    state = {
        selectValue: ''
    };

    render() {
        const { articles } = this.props;
        const options = articles.map( article => {
            return {
                value: article.id,
                label: article.title
            }
        });

        return (
            <div>
                <Select
                    name="form-field-name"
                    value={this.state.selectValue}
                    options={options}
                    onChange={this.handleSelect}
                />
            </div>
        );
    }
    handleSelect = (selectValue) => {
        this.setState({ selectValue })
    }
}

ArticleForm.propTypes = {};
ArticleForm.defaultProps = {};

export default ArticleForm;
