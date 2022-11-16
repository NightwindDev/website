import React, { Component } from 'react';
import '../App.css'

export default
class ProjectBox extends Component {
    render () {
        return (
            <div className='project-box'>
                {this.props.children}
            </div>
        )
    }
}