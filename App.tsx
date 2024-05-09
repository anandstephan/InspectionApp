import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MainStack from './Src/Navigation/MainStack';
import Login from './Src/Screens/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): React.JSX.Element {
  const [loginTrue, setLoginTrue] = useState(true);

  useEffect(() => {
    async function doesUserExist() {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        if (jsonValue !== null) {
          const user = JSON.parse(jsonValue);
          console.log('🚀 ~ doesUserExist ~ user:', typeof user);
          if (user) {
            console.log('🚀 ~ doesUserExist ~ user:', user);
            setLoginTrue(true); // User exists and has a name
          } else {
            setLoginTrue(false); // User exists but doesn't have a name
          }
        } else {
          setLoginTrue(false); // User doesn't exist
        }
      } catch (error) {
        console.error('Error checking user existence:', error);
        setLoginTrue(false); // Return false in case of an error
      }
    }

    doesUserExist();
  }, []);

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>{!loginTrue ? <Login /> : <MainStack />}</View>
    </NavigationContainer>
  );
}

export default App;
