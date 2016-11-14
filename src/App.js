import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = { message : "This is default state."}
    }

    update(e) {
        this.setState({ message : e.target.value })
    }

    render () {
        let name = this.props.name;

        return  (
            <div>
                <h1>Hello, {name}</h1>

                <input type="text" onChange={this.update.bind(this)}/>
                <h2>{this.state.message}</h2>
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