import React, { Component, createRef } from 'react';
import '../App.css'
import Tab from './Tab.jsx'

export default
class NavBar extends Component {
    constructor (props) {
        super(props)

        this.firstRef = createRef(null)
        this.secondRef = createRef(null)
        this.thirdRef = createRef(null)
    }

    update (selected) {

        switch (selected) {
            case 0:
                this.firstRef.current.update(true)
                this.secondRef.current.update(false)
                this.thirdRef.current.update(false)
                break;
            case 1:
                this.firstRef.current.update(false)
                this.secondRef.current.update(true)
                this.thirdRef.current.update(false)
                break;
           case 2:
                this.firstRef.current.update(false)
                this.secondRef.current.update(false)
                this.thirdRef.current.update(true)
                break;
            default:
                break;
        }
    }

    render () {
        return (
            <div className='navbar' data-selected={this.props['data-selected']}>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 828" preserveAspectRatio="xMidYMid meet">
                    <g id="Custom_Size_1" data-name="Custom Size – 1" clipPath="url(#clip-Custom_Size_1)">
                        <path id="Path_1" data-name="Path 1" d="M233,1135.818H374.914V655.024L527.972,1002.31l121.951,121.951H827.609l52.23-52.23,52.231,52.23h178.98L1233,1002.31V296.945H1091.932v645.7l-39.506,39.506H994.009L954.5,942.649v-645.7H812.128v645.7l-39.506,39.506h-63.16l-39.506-39.506v-645.7H527.972V643.683L374.914,296.945H233Z" transform="translate(-233.001 -296.945)"/>
                    </g>
                    </svg>
                </div>
                <div className='spacer'></div>
                <div className="tabbar">
                    <Tab refProp={this.props.firstRef} ref={this.firstRef}>Who I Am</Tab>
                    <Tab refProp={this.props.secondRef} ref={this.secondRef}>Experience</Tab>
                    <Tab refProp={this.props.thirdRef} ref={this.thirdRef}>Projects</Tab>
                </div>
            </div>
        )
    }
}