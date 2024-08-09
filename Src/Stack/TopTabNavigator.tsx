import React, {useState} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from '../Screens/HomeScreen/All';
import Miss from '../Screens/HomeScreen/Miss';
import Completed from '../Screens/HomeScreen/Completed';
import Today from '../Screens/HomeScreen/Today';
import {useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  // Example state holding the counts for each tab

  const todayCount = useSelector(s => s.global.todayCount);
  const missCount = useSelector(s => s.global.missCount);
  const completedCount = useSelector(s => s.global.completedCount);
  const allCount = useSelector(s => s.global.allCount);
  const count = useSelector(s => s.global);

  const renderTabLabel = (title, count) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 13, fontWeight: '800', color: 'black'}}>
          {title}
        </Text>
        {count > 0 && (
          <View
            style={{
              marginLeft: 4,
              backgroundColor: 'red',
              borderRadius: 10,
              paddingHorizontal: 5,
              paddingVertical: 2,
              minWidth: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>
              {count > 9 ? '9+' : count}
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
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
            color: 'black',
            textAlign: 'center',
          },
          swipeEnabled: false,
          lazy: true,
        }}>
        <Tab.Screen
          name="Today"
          component={Today}
          options={{
            tabBarLabel: () => renderTabLabel('Today', todayCount),
          }}
        />
        <Tab.Screen
          name="Miss"
          component={Miss}
          options={{
            tabBarLabel: () => renderTabLabel('Miss', missCount),
          }}
        />
        <Tab.Screen
          name="Completed"
          component={Completed}
          options={{
            tabBarLabel: () => renderTabLabel('Completed', completedCount),
          }}
        />
        <Tab.Screen
          name="All"
          component={All}
          options={{
            tabBarLabel: () => renderTabLabel('All', allCount),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default TopTabNavigator;
