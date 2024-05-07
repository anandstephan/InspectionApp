import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../Screens/HomeScreen/Home';
import Auction from '../Screens/Auction/Auction';
import All from '../Screens/HomeScreen/All';
import Miss from '../Screens/HomeScreen/Miss';
import Completed from '../Screens/HomeScreen/Completed';
import Today from '../Screens/HomeScreen/Today';
import Profile from '../Screens/Profile/Profile';
import {SafeAreaView} from 'react-native';

function TopTabNavigator() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'black',
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
          },
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {width: '100%'},
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '900',
            width: '100%',
          },
          swipeEnabled: false,
          lazy: true,
        })}>
        <Tab.Screen name="Today" component={Today} />
        <Tab.Screen name="Miss" component={Miss} />
        <Tab.Screen name="Completed" component={Completed} />
        <Tab.Screen name="All" component={All} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default TopTabNavigator;
