import React, { Component } from 'react';

export default class Keypad extends Component {

    handlePassword = () => {
       console.log('Entering password...')
    }
    render() {
        return (
            <input onKeyUp={this.handlePassword} type="password"/>
        )
    }
}