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
import Documents from '../Screens/Imformation/Documents';
import Engine from '../Screens/Imformation/Engine';
import Exterior from '../Screens/Imformation/Exterior';
import Interior from '../Screens/Imformation/Interior';
import Final from '../Screens/Imformation/Final';

function ImformationTabNavigator() {
  const Tab = createMaterialImformationTabNavigator();
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
        <Tab.Screen name="Today" component={Documents} />
        <Tab.Screen name="Engine" component={Engine} />
        <Tab.Screen name="Exterior" component={Exterior} />
        <Tab.Screen name="Interior" component={Interior} />
        <Tab.Screen name="Final" component={Final} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default ImformationTabNavigator;
