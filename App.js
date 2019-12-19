/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {Navigation} from 'react-native-navigation';
import TestComponent from './components/TestComponent';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.getData();
    this.storeData();
  }

  goToRules = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Rules',
        options: {
          topBar: {
            title: {
              text: 'Rules',
              alignment: 'center',
            },
          },
        },
      },
    }).then();
  };

  storeData = async () => {
    try {
      await AsyncStorage.setItem('@isRulesSeen', 'true');
    } catch (e) {
      // saving error
    }
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@isRulesSeen');
      if (value !== null) {
      } else {
        this.goToRules();
      }
    } catch (e) {
      // error reading value
    }
  };

  getTestsFromAPIAsync() {
    return fetch('http://www.tgryl.pl/quiz/tests')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({data: responseJson});
      })
      .catch(error => {
        alert(error);
      });
  }

  goToTest = (title, numberOfTasks, id) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Test',
        passProps: {
          ti: title,
          numberOfTasks: numberOfTasks,
          task_id: id,
        },
        options: {
          topBar: {
            title: {
              text: title,
              alignment: 'center',
            },
          },
        },
      },
    }).then();
  };

  componentDidMount() {
    this.getTestsFromAPIAsync();
    SplashScreen.hide();
  }

  render() {
    let availableTestsArray = [];
    const data = this.state.data;

    for (let i = 0; i < data.length; i++) {
      availableTestsArray.push(
        <TouchableOpacity
          style={{margin: 10}}
          key={i}
          onPress={() => {
            this.goToTest(`Test #${i + 1}`, data[i].numberOfTasks, data[i].id);
          }}>
          <TestComponent
            title={`Test #${i + 1}`}
            tags={data[i].tags}
            desc={data[i].description}
          />
        </TouchableOpacity>,
      );
    }
    return (
      <View style={styles.container}>

        <ScrollView>{availableTestsArray}</ScrollView>
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
    paddingTop: 10,
  },
});
