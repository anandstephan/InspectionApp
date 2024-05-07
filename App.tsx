import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MainStack from './Src/Navigation/MainStack';

function App(): React.JSX.Element {
  // return <Text>Hi</Text>;
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <MainStack />
      </View>
    </NavigationContainer>
  );
}

export default App;
