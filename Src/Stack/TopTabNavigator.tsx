import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from '../Screens/HomeScreen/All';
import Miss from '../Screens/HomeScreen/Miss';
import Completed from '../Screens/HomeScreen/Completed';
import Today from '../Screens/HomeScreen/Today';
import {SafeAreaView} from 'react-native';

function TopTabNavigator() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'black',
          tabBarIndicatorStyle: {
            backgroundColor: 'white',
          },
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            width: '100%',
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '800',
            width: '100%',
            color: 'black',
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
