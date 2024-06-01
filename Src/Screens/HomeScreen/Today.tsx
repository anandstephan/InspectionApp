import React from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './Home';

const Today = () => {
  return (
    <View style={{padding: '2%'}}>
      <HomeScreen nav={'today'} />
    </View>
  );
};

export default Today;
