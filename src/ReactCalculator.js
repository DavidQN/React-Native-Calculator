import React, { Component } from 'react';
import {
    Text,
    AppRegistry,
    View
} from 'react-native';

import Style from './Style';
import InputButton from './InputButton';

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

class ReactCalculator extends Component {

    render() {
        return (
          <View style={Style.rootContainer}>
              <View style={Style.displayContainer}></View>
              <View style={Style.inputContainer}></View>
          </View>
        )
    }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
