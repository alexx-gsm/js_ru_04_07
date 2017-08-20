import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ArticlesChart extends Component {
    render() {
        return (
            <div ref={this.setContainerRef}/>
        );
    }

    setContainerRef = (container) => {
        this.container = container;
        // do some logic
    }
}

ArticlesChart.propTypes = {
    articles: PropTypes.array
};
ArticlesChart.defaultProps = {
    articles: []
};

export default ArticlesChart;
