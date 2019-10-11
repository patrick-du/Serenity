import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class AuthTextInput extends Component {
    render() {
        return (
            <View>
                <Text style={styles.inputTitle}>{this.props.fieldTitle}</Text>
                <TextInput
                    style={styles.input}
                    returnKeyType={this.props.returnKeyT}
                    onChangeText={this.props.onChangeT} 
                    value={this.props.value}
                    ref={this.props.refTo}
                    autoCapitalize={this.props.autoCap}
                    onSubmitEditing={this.props.onSubmitT} 
                    secureText={this.props.secureT}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    inputTitle: {
        fontFamily: 'SFProDisplay-Medium',
        fontSize: 14,
        color: '#95a5a6', // light grey colour
        marginBottom: 5,
    },

    input: {
        fontFamily: 'SFProDisplay-Light',
        fontSize: 18,
        width: '100%',
        color: '#343340', // dark navy colour
        borderBottomWidth: 1,
        borderBottomColor: '#95a5a6' // light grey colour
    },
})
