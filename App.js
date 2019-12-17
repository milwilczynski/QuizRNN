/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#eeeeee'}}>SIEMANO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  homebar: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#393e46',
  },
});
