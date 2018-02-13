/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

const DisplayCounter = (props) => {
    return (
        <div>
            {props.count}
        </div>
    );
}
export default DisplayCounter;