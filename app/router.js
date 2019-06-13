import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import view2 from './views/view2';
import viewUtama from './views/viewUtama';
import UserFetch from './views/UserFetch';
import CryptoApp from './views/CryptoApp';


const RootStack = createStackNavigator({
  Utama: {
    screen: viewUtama,
    title: 'testRedux',
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: true,
    }),
  },
  View2: {
    screen: view2,
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: true,
    }),
  },
});

const CryptoStack = createStackNavigator({
  CryptoApp: {
    screen: CryptoApp,
  },
});

const BottomTabNav = createBottomTabNavigator({
  CryptoStack,
  Root: RootStack,
  UserFetch: {
    screen: UserFetch,
    title: 'User',
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: true,
    }),
  },
});

const Root = createAppContainer(BottomTabNav);

export default Root;
