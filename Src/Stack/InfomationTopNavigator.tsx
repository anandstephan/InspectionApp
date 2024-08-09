import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView, Text, View} from 'react-native';
import Documents from '../Screens/Information/Documents';
import Engine from '../Screens/Information/Engine';
import Exterior from '../Screens/Information/Exterior';
import Interior from '../Screens/Information/Interior';
import Final from '../Screens/Information/Final';
import {useRoute} from '@react-navigation/native';

function InformationTabNavigator() {
  const route = useRoute();
  const leadId = route?.params?.leadId;

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 16, backgroundColor: '#1f51fc'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          Information
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
        <Tab.Screen
          name="Docs"
          component={Documents}
          initialParams={{leadId: leadId}}
        />
        <Tab.Screen
          name="Engine"
          component={Engine}
          initialParams={{leadId: leadId}}
        />
        <Tab.Screen
          name="Exterior"
          component={Exterior}
          initialParams={{leadId: leadId}}
        />
        <Tab.Screen
          name="Interior"
          component={Interior}
          initialParams={{leadId: leadId}}
        />
        <Tab.Screen
          name="Final"
          component={Final}
          initialParams={{leadId: leadId}}
        />
      </Tab.Navigator>
    </View>
  );
}

export default InformationTabNavigator;
