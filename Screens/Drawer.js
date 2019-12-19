import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Image} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Drawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

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

  componentDidMount() {
    this.getTestsFromAPIAsync();
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

  goToTest = (title, numberOfTasks, id) => {
    Navigation.mergeOptions('drawerId', {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });
    Navigation.push('MAIN_STACK', {
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

  render() {
    let availableTestsArray = [];
    const data = this.state.data;

    for (let i = 0; i < data.length; i++) {
      availableTestsArray.push(
        <TouchableOpacity
          style={styles.scrollViewButtons}
          key={i}
          onPress={() => {
            this.goToTest(`Test #${i + 1}`, data[i].numberOfTasks, data[i].id);
          }}>
          <Text style={{color: 'white'}}> Test #{i + 1} </Text>
        </TouchableOpacity>,
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Quiz App</Text>
        </View>
        <Image
          style={styles.imageStyle}
          source={require('./../android/app/src/main/res/mipmap-hdpi/kiss.png')}
        />
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
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-between',
            }}>
            {availableTestsArray}
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
    marginBottom: 10,
    width: '100%',
    height: null,
    resizeMode: 'contain',
    overflow: 'hidden',
    backgroundColor: 'transparent',
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
