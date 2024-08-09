import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomStack from '../Stack/BottomStackNavigator';
import Home from '../Screens/HomeScreen/Home';

import InformationTabNavigator from '../Stack/InfomationTopNavigator';

function MainStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="BottomStack" component={BottomStack} />
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen
        name="InformationTabNavigator"
        component={InformationTabNavigator}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
