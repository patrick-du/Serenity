import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class Header extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.subTitle}>{this.props.subtitle}</Text>
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 30,
      color: '#343340',
    },
  
    subTitle: {
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 16,
      color: '#95a5a6', // light grey colour
      marginVertical: 10,
    },
  
  })
  
  