import React from 'react'
import ReactDOM from 'react-dom'

const World = React.createClass({
    render() {
        return <p>The world it not enough.</p>
    }
});

ReactDOM.render(<World/>, document.getElementById('world'));
