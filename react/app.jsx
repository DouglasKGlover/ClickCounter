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

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Douglas',
    lastName: 'Glover'
};

const element = (
    <h1>Hello, {formatName(user)}!</h1>
);

ReactDOM.render(
    element,
    document.getElementById('app')
);