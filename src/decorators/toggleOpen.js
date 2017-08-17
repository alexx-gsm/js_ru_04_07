import React from 'react'

export default (Original) => class toggleOpen extends React.Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (
            <Original {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen}/>
        )
    }
}