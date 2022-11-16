import React, { Component } from 'react';
import '../App.css'

export default
class LanguageBox extends Component {
    render () {
        return (
            <div className='language-box'>
                {this.props.children}
            </div>
        )
    }
}