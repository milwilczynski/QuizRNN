import React from 'react';
import {View, Text} from 'react-native';

export default class Rules extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#393e46'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#eeeeee'}}> Regulamin </Text>
          <Text style={{color: '#eeeeee'}}>Nie kradnij</Text>
          <Text style={{color: '#eeeeee'}}>Nie wyzywaj</Text>
        </View>
      </View>
    );
  }
}
