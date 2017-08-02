import React from 'react';
import ReactDOM from 'react-dom';
import Gamepad from 'react-gamepad';

class App extends React.Component {
    connectHandler(gamepadIndex) {
        console.log('Gamepad ${gamepadIndex} connected !')
    }

    disconnectHandler(gamepadIndex) {
        console.log('Gamepad ${gamepadIndex} disconnected !')
    }

    buttonChangeHandler(buttonName, down) {
        console.log(buttonName, down)
    }

    axisChangeHandler(axisName, value, previousValue) {
        console.log(axisName, value)
    }

    buttonDownHandler(buttonName) {
        console.log(buttonName, 'down')
    }

    buttonUpHandler(buttonName) {
        console.log(buttonName, 'up')
    }

    render() {
        return (
            <Gamepad
                onConnect={this.connectHandler}
                onDisconnect={this.disconnectHandler}

                onButtonChange={this.buttonChangeHandler}
                onAxisChange={this.axisChangeHandler}
            />
        )
    }
}

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('app')
);