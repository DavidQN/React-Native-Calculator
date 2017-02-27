import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    // the top of the calculator
    displayContainer: {
        flex: 2,
        backgroundColor: '#193441'
    },
    // the number part of calculator
    inputContainer: {
        flex: 8,
        backgroundColor: '#3E606F'
    },
    inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
    },
    // the size of the text for each button on the calculator
    inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
    },
    // the styling with flex 1 allows for all the rows to take up
    // enough space on the screen to look like a calculator
    inputRow: {
    flex: 1,
    flexDirection: 'row'
    }
});

export default Style;
