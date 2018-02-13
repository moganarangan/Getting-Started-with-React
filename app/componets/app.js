/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter.js';
import DisplayCounter from './displayCounter.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state =    { count: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }

    handleClick(incrementValue) {
        this.setState((prevState) => ({
        count: prevState.count + incrementValue
        }));
    };

    resetClick(){
        this.setState({count: 0});
    };

    render(){
        return (
            <div>
                Hello From React!!
                <br />
                <Counter incrementValue={1} onClickFunction={this.handleClick} />
                <Counter incrementValue={5} onClickFunction={this.handleClick} />
                <Counter incrementValue={10} onClickFunction={this.handleClick} />
                <Counter incrementValue={20} onClickFunction={this.handleClick} />
                <br />
                <DisplayCounter count={this.state.count} />

                <br />
                <button onClick={this.resetClick} disabled={this.state.count === 0}> Reset </button>
            </div>
        );
    }
}