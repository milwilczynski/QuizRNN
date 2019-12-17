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
import {tests} from '../objects/Tests';

export default class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  chooseName(text, title = '') {
    if (title === '') {
      if (text === 'Result') {
        return 'Results';
      } else {
        return 'Home';
      }
    } else {
      return title;
    }
  }

  goToScreen = (screenName, title = '') => {
    Navigation.mergeOptions('drawerId', {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });
    Navigation.push('MAIN_STACK', {
      component: {
        name: screenName,
        options: {
          topBar: {
            title: {
              text: this.chooseName(screenName, title),
            },
          },
        },
      },
    });
  };
  render() {
    return (

      <View style={styles.container}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Quiz App</Text>
          </View>
          <Image style={styles.imageStyle} />
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.goToScreen('Home')}>
            <Text style={styles.textStyle}>Home Page</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.goToScreen('Result')}>
            <Text style={styles.textStyle}>Result</Text>
          </TouchableOpacity>
        <View style={{flex: 3}}>
          <ScrollView contentContainerStyle={{flexGrow:1, justifyContent: 'space-between'}}>
          {tests.map((test, id) => {
            id++;
            return (
              <TouchableOpacity
                key={id}
                style={styles.scrollViewButtons}
                onPress={() => this.goToScreen('Test', `Test #${id}`)}>
                <Text style={styles.textStyle}>{`Test #${id}`}</Text>
              </TouchableOpacity>
            );
          }, 0)}
        </ScrollView>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393e46',
  },
  scrollViewStyle: {
    width: '100%',
  },
  scrollViewButtons: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'lightgreen',
    borderWidth: 1,
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'aqua',
    borderWidth: 1,
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
    backgroundColor: '#222831',
  },
});
