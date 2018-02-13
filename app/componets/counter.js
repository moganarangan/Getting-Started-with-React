/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.counterClick = this.counterClick.bind(this);
    }

    counterClick(){
    this.props.onClickFunction(this.props.incrementValue);
   }

    render(){
    return (
            <button onClick={this.counterClick}> {this.props.incrementValue} </button>
        );
    }
}