/**
 * @format
 */

import App from './App';
import TestScreen from './Screens/TestScreen';
import ResultScreen from './Screens/ResultScreen';
import {Navigation} from 'react-native-navigation';
import {Dimensions} from 'react-native';
import Drawer from './Screens/Drawer';
import Rules from './Screens/Rules';

Navigation.registerComponent('Home', () => App);
Navigation.registerComponent('Test', () => TestScreen);
Navigation.registerComponent('Result', () => ResultScreen);
Navigation.registerComponent('Drawer', () => Drawer);
Navigation.registerComponent('Rules', () => Rules);

const {width} = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      elevation: 0,
      visible: true,
      drawBehind: true,
      animate: false,
      borderHeight: 1,
      leftButtons: [
        {
          icon: require('./android/app/src/main/res/mipmap-hdpi/men.png'),
          id: 'drawerButton',
        },
      ],
      title: {
        color: '#eeeeee',
        alignment: 'center',
        text: 'Home',
      },
      background: {
        color: '#222831',
      },
    },
  });

  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'drawerId',
            name: 'Drawer',
            fixedWidth: width,
          },
        },
        center: {
          stack: {
            id: 'MAIN_STACK',
            children: [
              {
                component: {
                  id: 'homeScreen',
                  name: 'Home',
                },
              },
            ],
          },
        },
      },
    },
  }).then();
});

Navigation.events().registerNavigationButtonPressedListener(() => {
  Navigation.mergeOptions('drawerId', {
    sideMenu: {
      left: {
        visible: true,
      },
    },
  });
});
