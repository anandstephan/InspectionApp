import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/Home';
import Auction from '../Screens/Auction/Auction';
import TopTabNavigator from './TopTabNavigator';
import Profile from '../Screens/Profile/Profile';

function BottomStack() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarShowLabel="false"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen name="Home" component={TopTabNavigator} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
    </Tab.Navigator>
  );
}

export default BottomStack;
