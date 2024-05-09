import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomStack from '../Stack/BottomStackNavigator';
import Home from '../Screens/HomeScreen/Home';
import Auction from '../Screens/Auction/Auction';
import ImformationTabNavigator from '../Stack/ImfomationTopNavigator';

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
      <Stack.Screen name="Auction" component={Auction} />
      <Stack.Screen
        name="ImformationTabNavigator"
        component={ImformationTabNavigator}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
