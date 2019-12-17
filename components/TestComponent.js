import React from 'react';
import {View, Text} from 'react-native';

const TestComponent = props => {
  return (
    <View style={{borderRadius: 10, borderColor: '#00adb5', borderWidth: 2}}>
      <Text style={{fontSize: 16, textAlign: 'center', color: '#eeeeee'}}>
        {props.title}
      </Text>
      <View>
        <Text style={{fontSize: 12, marginLeft: 10, color: '#00adb5'}}>
          {props.tags.join(' ')}
        </Text>
      </View>
      <View>
        <Text style={{margin: 15, color: '#eeeeee'}}>{props.desc}</Text>
      </View>
    </View>
  );
};

export default TestComponent;
