/**
 * @format
 */

import App from './App';
import {Navigation} from 'react-native-navigation';

Navigation.registerComponent('Home', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Home',
      },
    },
  });
});
