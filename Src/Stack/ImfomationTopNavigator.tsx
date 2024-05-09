import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView, Text, View} from 'react-native';
import Documents from '../Screens/Imformation/Documents';
import Engine from '../Screens/Imformation/Engine';
import Exterior from '../Screens/Imformation/Exterior';
import Interior from '../Screens/Imformation/Interior';
import Final from '../Screens/Imformation/Final';

function ImformationTabNavigator() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={{flex: 1}}>
      <View
        style={{padding: 16, backgroundColor: '#1f51fc', paddingTop: '15%'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          Imformation
        </Text>
      </View>
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
        <Tab.Screen name="Docs" component={Documents} />
        <Tab.Screen name="Engine" component={Engine} />
        <Tab.Screen name="Exterior" component={Exterior} />
        <Tab.Screen name="Interior" component={Interior} />
        <Tab.Screen name="Final" component={Final} />
      </Tab.Navigator>
    </View>
  );
}

export default ImformationTabNavigator;
