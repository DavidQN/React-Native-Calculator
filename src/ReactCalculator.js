import React, { Component } from 'react';
import {
    Text,
    AppRegistry,
    View
} from 'react-native';

import Style from './Style';
import InputButton from './InputButton';

// Defined input buttons that will be displayed in the calculator.
// const inputButtons = [
//     [1, 2, 3, '/'],
//     [4, 5, 6, '*'],
//     [7, 8, 9, '-'],
//     [0, 'CE', '=', '+']
// ];
const inputButtons = [
  ['', 'CE', '%', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '+/-', '.', '=']
]

class ReactCalculator extends Component {
  constructor(props) {
      super(props);

// the three states the calculator goes in
      this.state = {
          previousInputValue: 0,
          inputValue: 0,
          selectedSymbol: null
      }
  }


// displayContainer= the display screen for the answer

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        );
    }

// For each row in `inputButtons`, create a row View and add create
//an InputButton for each input in the row.
_renderInputButtons() {
    let views = [];
    //for loop over the array of input buttons
    for (var r = 0; r < inputButtons.length; r ++) {
        let row = inputButtons[r];

        let inputRow = [];
        //for loop of each button and stuffing them in input
        for (var i = 0; i < row.length; i ++) {
            let input = row[i];
            //inputing each of the grabbed buttons and pushing them into
            //inputRow array which will by the view being displayed for the
            //calculator on the bottom side
            inputRow.push(
                <InputButton
                    value={input}
                    highlight={this.state.selectedSymbol === input}
                    onPress={this._onInputButtonPressed.bind(this, input)}
                    //apparently it is in good practice for each child in an arr
                    //to have a "key" prop or you will get a little warning but it will still work
                    key={r + "-" + i}/>
            );
        }
        // pushing all the buttons into the views
        views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }
    return views;
}

_onInputButtonPressed(input) {
    // switch loop to check the cases if number or string is being handled
    //aka if number or the input buttons
    switch (typeof input) {
        case 'number':
            return this._handleNumberInput(input)
        case 'string':
            return this._handleStringInput(input)
    }
}
_handleNumberInput(num) {
    // if input type is a number it will be added to the end of the existing
    //input value with each digit shifted to the left. Example:
    //if you put in "1" in the calculator if will be (0*10) BUT! if you add
    //a 3 after it will be (1*10)+3=13.


    // let inputValue = (this.state.inputValue * 10) + num;

    this.setState({
        // inputValue: inputValue
        inputValue: this.state.isDecimal ? eval(this.state.currentInputValue + this.state.selectedSymbol + num) : this.state.inputValue * 10 + num,
        currentInputValue: this.state.isDecimal ? 0 : this.state.inputValue * 10 + num,
        connectValue: null,
        displayedValue: null,
        isDecimal: null
    })
}

_handleStringInput(str) {
  // switch statement to check which input is going to be used on the numbers
  switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
          this.setState({
              selectedSymbol: str,
              previousInputValue: this.state.inputValue,
              inputValue: 0
          });
          break;

          // equal sign so the logic can work
          case '=':
          let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

          if (!symbol) {
            return;
          }

          this.setState({
            previousInputValue: 0,
            inputValue: eval(previousInputValue + symbol + inputValue),
            selectedSymbol: null
          });
          break;

          case 'CE':
            // Clear Everything
          this.setState({
              inputValue: 0,
              connectValue: null,
              displayedValue: null
            });
          break;

          //turns the number to a decimal by dividing it by 100
          case '%':
          this.setState({
          inputValue: this.state.inputValue / 100
          });
          break;

          //the decimal sign for the calculator
          case ".":
          this.setState({
            isDecimal: true,
            selectedSymbol: str,
            previousInputvalue: this.state.inputValue
          });
          break;

          //converts number to negative
          //stack overflo']w stack overflow stack overflow
          case "+/-":
          this.setState({
            inputValue: -Math.abs(this.state.currentInputValue),
            currentInputValue: -Math.abs(this.state.currentInputValue)
          })
          break;

        }
      }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
