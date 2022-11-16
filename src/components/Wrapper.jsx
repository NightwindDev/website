import React, { Component } from 'react';

export default
class Wrapper extends Component {

    render () {
        return (
            <div className={this.props.className}>{this.props.children}</div>
        )
    }
}