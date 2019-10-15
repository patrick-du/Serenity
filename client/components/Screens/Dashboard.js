import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';

import DashboardHeader from '../DashboardHeader';

export default class DashboardScreen extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
                <DashboardHeader title='Hello Patrick,' subtitle='Upcoming Workouts...'/>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#95a5a6'}}></View>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Back and Biceps 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>6 exercises </Text>
                </View>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Chest and Triceps 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>3 exercises </Text>
                </View>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Legs 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>4 exercises </Text>
                </View>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Back and Biceps 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>6 exercises </Text>
                </View>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Chest and Triceps 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>3 exercises </Text>
                </View>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Legs 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>4 exercises </Text>
                </View>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Back and Biceps 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>6 exercises </Text>
                </View>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Chest and Triceps 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>3 exercises </Text>
                </View>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Legs 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>4 exercises </Text>
                </View>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Back and Biceps 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>6 exercises </Text>
                </View>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Chest and Triceps 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>3 exercises </Text>
                </View>
                <View style={styles.workout}>
                    <Text style={styles.workoutTitle}>Legs 5/3/1</Text>
                    <Text style={styles.workoutSubtitle}>4 exercises </Text>
                </View>
                </ScrollView>
               
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 45,
        backgroundColor: '#FAFAFC', // basically white colour
    },
    workout: {
        backgroundColor: '#fff', // white colour
        width: '100%',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        elevation: 1,
    },
    workoutTitle: {
        fontFamily: 'SFProDisplay-Medium',
        fontSize: 14,
        color: '#343340', // light grey colour
    }, 
    workoutSubtitle: {
        fontFamily: 'SFProDisplay-Light',
        fontSize: 14,
        color: '#95a5a6', // dark navy colour
    }
});
