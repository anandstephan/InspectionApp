import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/Home';
import Auction from '../Screens/Auction/Auction';
import TopTabNavigator from './TopTabNavigator';
import Profile from '../Screens/Profile/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function BottomStack() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarShowLabel="false"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        // headerShown: false,
        headerTitle: 'Inspection App',
        headerStyle: {
          backgroundColor: '#1f51fc',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={TopTabNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
    </Tab.Navigator>
  );
}

export default BottomStack;
