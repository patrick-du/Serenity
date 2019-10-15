import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

import DashboardHeader from '../DashboardHeader';

export default class DashboardScreen extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (

            <View style={styles.container}>
                <DashboardHeader title='Hello Patrick,' subtitle=''/>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 45,
        backgroundColor: '#FAFAFC', // basically white colour
    },
});
