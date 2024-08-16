import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import Documents from '../Screens/Information/Documents';
import Engine from '../Screens/Information/Engine';
import Exterior from '../Screens/Information/Exterior';
import Interior from '../Screens/Information/Interior';
import Final from '../Screens/Information/Final';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function InformationTabNavigator() {
  const route = useRoute();
  const leadId = route?.params?.leadId;
  const docSection = useSelector(s => s.global.docSection);
  const engineSection = useSelector(s => s.global.engineSection);
  const exteriorSection = useSelector(s => s.global.exteriorSection);
  const interiorSection = useSelector(s => s.global.interiorSection);
  const finalSection = useSelector(s => s.global.finalSection);

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
          listeners={({navigation}) => ({
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
              let flag = false;

              let ar = Object.keys(docSection);
              for (let i = 0; i < ar.length; i++) {
                if (docSection[ar[i]] == false) {
                  flag = true;
                  break;
                }
              }
              // if (flag || ar.length === 0) {
              if (false) {
                Alert.alert(
                  'Unificars Alert',
                  'Please Fill all the Fields in this section',
                );
              } else {
                navigation.navigate('Engine');
              }
            },
          })}
        />
        <Tab.Screen
          name="Exterior"
          component={Exterior}
          initialParams={{leadId: leadId}}
          listeners={({navigation}) => ({
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
              let flag = false;
              let ar = Object.keys(engineSection);
              console.log('==>', ar);
              for (let i = 0; i < ar.length; i++) {
                if (engineSection[ar[i]] == false) {
                  flag = true;
                  break;
                }
              }
              // if (flag || ar.length === 0) {
              if (false) {
                Alert.alert(
                  'Unificars Alert',
                  'Please Fill all the Fields in this section',
                );
              } else {
                navigation.navigate('Exterior');
              }
            },
          })}
        />
        <Tab.Screen
          name="Interior"
          component={Interior}
          initialParams={{leadId: leadId}}
          listeners={({navigation}) => ({
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
              let flag = false;
              let ar = Object.keys(exteriorSection);
              for (let i = 0; i < ar.length; i++) {
                if (exteriorSection[ar[i]] == false) {
                  flag = true;
                  break;
                }
              }
              // if (flag || ar.length === 0) {
              if (false) {
                Alert.alert(
                  'Unificars Alert',
                  'Please Fill all the Fields in this section',
                );
              } else {
                navigation.navigate('Interior');
              }
            },
          })}
        />
        <Tab.Screen
          name="Final"
          component={Final}
          initialParams={{leadId: leadId}}
          listeners={({navigation}) => ({
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
              let flag = false;
              let ar = Object.keys(interiorSection);
              for (let i = 0; i < ar.length; i++) {
                if (interiorSection[ar[i]] == false) {
                  flag = true;
                  break;
                }
              }
              // if (flag || ar.length === 0) {
              if (false) {
                Alert.alert(
                  'Unificars Alert',
                  'Please Fill all the Fields in this section',
                );
              } else {
                navigation.navigate('Final');
              }
            },
          })}
        />
      </Tab.Navigator>
    </View>
  );
}

export default InformationTabNavigator;
