import React from 'react'

export default (Original) => class accordion extends React.Component {
    state = {
        openItemId: null
    };

    toggleOpen = (id) => () => { this.setState({
        openItemId: id === this.state.openItemId ? null : id
    }) };

    render() {
        return (
            <Original {...this.props} openItemId={this.state.openItemId} toggleItem={this.toggleOpen}/>
        )
    }
}