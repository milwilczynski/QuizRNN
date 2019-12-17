import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Drawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Quiz App</Text>
        </View>
        <Image style={styles.imageStyle} />
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textStyle}>Home Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textStyle}>Result</Text>
        </TouchableOpacity>
        <View />
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textStyle}>Test title 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textStyle}>Test title 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textStyle}>Test title 3</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  buttons: {
    flex: 1.5,
    backgroundColor: '#393e46',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  imageStyle: {
    flex: 3,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  titleText: {
    color: '#eeeeee',
  },
  textStyle: {
    color: '#eeeeee',
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
