import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = { 
            widgetMessage : "This is default widget message.",
            red : 128,
            green : 128,
            blue : 128
        }
        this.updateWidget = this.updateWidget.bind(this)
        this.updateSlider = this.updateSlider.bind(this)
    }

    updateWidget(e) {
        this.setState({ 
            widgetMessage : e.target.value 
        })
    }

    updateSlider(e) {
        this.setState({ 
            red : ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green : ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue : ReactDOM.findDOMNode(this.refs.blue.refs.inp).value 
        })
    }

    render () {
        let name = this.props.name;

        return  (
            <div>
                <h1>Hello, {name}</h1>

                <Widget widgetMessage={this.state.widgetMessage} updateWidget={this.updateWidget}/>
                <hr/>

                <Slider ref="red" updateSlider={this.updateSlider}/>{this.state.red}<br/>
                <Slider ref="green" updateSlider={this.updateSlider}/>{this.state.green}<br/>
                <Slider ref="blue" updateSlider={this.updateSlider}/>{this.state.blue}<br/>

                <MyButton> I <HeartIcon/> React!</MyButton>
            </div>
        )
    }
}

const Widget = (props) => (
    <div>
        <input type="text" onChange={props.updateWidget}/>
        <h2>{props.widgetMessage}</h2>
    </div>
)

class Slider extends Component {
    render() {
        return (
            <div>
                <input ref="inp"
                       type="range"
                       min="0"
                       max="255"
                       onChange={this.props.updateSlider}/>
            </div>
        )
    }
}

class MyButton extends Component {
    render() {
        return (
            <button>{this.props.children}</button>
        )
    }
}

const HeartIcon = () => <span className="glyphicon glyphicon-heart"></span>

App.propTypes = {
    name : React.PropTypes.string.isRequired
}

App.defaultProps = {
    name : "React"
}

export default App;