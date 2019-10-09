import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from '@shoutem/ui';

export default class LoaderScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Spinner />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#23272A',
  },
});
