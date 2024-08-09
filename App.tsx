import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MainStack from './src/Navigation/MainStack';
import Login from './src/Screens/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/Redux/store/Index';
import Main from './src/Main';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{flex: 1}}>
          <Main />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
