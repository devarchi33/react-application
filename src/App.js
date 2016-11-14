import React, {Component} from 'react';

class App extends Component {
    render () {
        let name = this.props.name;

        return  (
            <div>
                <h1>Hello, {name}</h1>
            </div>
        )
    }
}

App.propTypes = {
    name : React.PropTypes.string.isRequired
}

App.defaultProps = {
    name : "React"
}

export default App;