import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultComponent = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.nickText}>{props.item.nick}</Text>
        <Text style={styles.dateText}>{props.item.date}</Text>
      </View>
      <View style={styles.viewComponent}>
        <Text style={styles.text}>Score: {props.item.score}</Text>
        <Text style={styles.text}>Total: {props.item.total}</Text>
        <Text style={styles.text}>Quiz type: {props.item.type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nickText: {
    fontSize: 14,
    color: '#eeeeee',
    marginLeft: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#eeeeee',
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: '#eeeeee',
  },
  viewComponent: {
    margin: 10,
    padding: 5,
    borderRadius: 3,
    borderColor: '#00adb5',
    borderWidth: 1,
  },
});

export default ResultComponent;
