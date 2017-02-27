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
    inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
    }
});

export default Style;
