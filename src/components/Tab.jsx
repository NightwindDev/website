import React, { Component } from 'react';
import '../App.css'

export default
class Tab extends Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    backgroundColor = 'rgb(60, 62, 73, 0)'
    color = null

    onClick () {
        this.props.refProp.current.scrollIntoView({ behavior: 'smooth'})
    }

    update (isSelected) {
        this.backgroundColor = isSelected === true ? '#ffffff' : 'rgb(60, 62, 73, 0)'
        this.color = isSelected === true ? null : '#ffffff'
        this.forceUpdate()
    }

    render() {
        return (
            <button onClick={this.onClick} style={{backgroundColor: this.backgroundColor, color: this.color}} className='tab' aria-label='Tab'>
                {this.props.children}
            </button>
        )
    }
}