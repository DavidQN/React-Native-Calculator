import React, { Component } from 'react';
import {
    Text,
    AppRegistry,
    View
} from 'react-native';

import Style from './Style';

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
