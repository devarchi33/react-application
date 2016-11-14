import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = { message : "This is default state."}
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({ message : e.target.value })
    }

    render () {
        let name = this.props.name;

        return  (
            <div>
                <h1>Hello, {name}</h1>

                <Widget message={this.state.message} update={this.update}/>
                <Widget message={this.state.message} update={this.update}/>
                <Widget message={this.state.message} update={this.update}/>
                <Widget message={this.state.message} update={this.update}/>
            </div>
        )
    }
}

const Widget = (props) => (
    <div>
        <input type="text" onChange={props.update}/>
        <h2>{props.message}</h2>
    </div>
)

App.propTypes = {
    name : React.PropTypes.string.isRequired
}

App.defaultProps = {
    name : "React"
}

export default App;