import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../Screens/Login/Login';

const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1f51fc',
            borderBottomColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0, // For iOS
            borderBottomWidth: 0, // For iOS
          },
          headerTitleStyle: {
            color: '#FFF',
            alignSelf: 'flex-start',
            fontWeight: 'bold',
            // backgroundColor:'red',
            // width:'100%'
          },
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
