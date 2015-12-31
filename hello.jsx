/**
 * Created by tom on 12/30/15.
 */

import React from 'react'
import ReactDOM from 'react-dom'

const Hello = React.createClass({
    render() {
        return <h1>Hello, ReactJS</h1>
    }
});

ReactDOM.render(<Hello/>, document.getElementById('hello'));
